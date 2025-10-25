import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import crashlytics from '@react-native-firebase/crashlytics';
import { ErrorBoundary } from './components/ErrorBoundary';
import { RootNavigator } from './navigation/RootNavigator';
import { LoadingSpinner } from './components/LoadingSpinner';
import { store, persistor } from './store/store';
import { enableScreens } from 'react-native-screens';

enableScreens();

const App: React.FC = () => {
  useEffect(() => {
    if (__DEV__) {
      crashlytics().setCrashlyticsCollectionEnabled(true);
    }
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate 
          loading={<LoadingSpinner visible={true} message="Initializing..." />} 
          persistor={persistor}
        >
          <GestureHandlerRootView style={{ flex: 1 }}>
            <RootNavigator />
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
