import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import * as SecureStore from 'react-native-secure-store';
import { RootState } from '../store/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Temporary placeholder screens
const PlaceholderScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" />
  </View>
);

// Auth Stack
const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: true,
    }}
  >
    <Stack.Screen name="Login" component={PlaceholderScreen} />
    <Stack.Screen name="Register" component={PlaceholderScreen} />
  </Stack.Navigator>
);

// Citizen Tabs
const CitizenTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: true,
      tabBarActiveTintColor: '#2196F3',
      tabBarInactiveTintColor: '#999',
      tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
    }}
  >
    <Tab.Screen
      name="ComplaintsList"
      component={PlaceholderScreen}
      options={{
        title: 'My Complaints',
        tabBarLabel: 'Complaints',
      }}
    />
    <Tab.Screen
      name="CreateComplaint"
      component={PlaceholderScreen}
      options={{
        title: 'New Complaint',
        tabBarLabel: 'New',
      }}
    />
    <Tab.Screen
      name="Profile"
      component={PlaceholderScreen}
      options={{
        title: 'Profile',
        tabBarLabel: 'Profile',
      }}
    />
  </Tab.Navigator>
);

// Admin Tabs
const AdminTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: true,
      tabBarActiveTintColor: '#2196F3',
      tabBarInactiveTintColor: '#999',
    }}
  >
    <Tab.Screen
      name="Dashboard"
      component={PlaceholderScreen}
      options={{
        title: 'Dashboard',
        tabBarLabel: 'Dashboard',
      }}
    />
    <Tab.Screen
      name="AdminComplaints"
      component={PlaceholderScreen}
      options={{
        title: 'Complaints',
        tabBarLabel: 'Complaints',
      }}
    />
    <Tab.Screen
      name="Profile"
      component={PlaceholderScreen}
      options={{
        title: 'Profile',
        tabBarLabel: 'Profile',
      }}
    />
  </Tab.Navigator>
);

export const RootNavigator = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    try {
      const token = await SecureStore.getItem('authToken');
      // Token validation logic here
    } catch (error) {
      console.log('Bootstrap error:', error);
    } finally {
      setIsBootstrapping(false);
    }
  };

  if (isBootstrapping) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{ animationEnabled: false }}
          />
        ) : user?.role === 'admin' ? (
          <Stack.Screen
            name="AdminRoot"
            component={AdminTabs}
            options={{ animationEnabled: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="CitizenRoot"
              component={CitizenTabs}
              options={{ animationEnabled: false }}
            />
            <Stack.Screen
              name="ComplaintDetail"
              component={PlaceholderScreen}
              options={{
                title: 'Complaint Details',
                headerShown: true,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
