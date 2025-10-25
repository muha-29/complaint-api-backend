import React, { memo } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  Modal,
  Animated,
} from 'react-native';

interface LoadingSpinnerProps {
  visible: boolean;
  message?: string;
  type?: 'overlay' | 'inline';
  size?: 'small' | 'large';
  color?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = memo(
  ({
    visible,
    message = 'Loading...',
    type = 'overlay',
    size = 'large',
    color = '#2196F3',
  }) => {
    if (!visible) return null;

    if (type === 'overlay') {
      return (
        <Modal transparent animationType="fade" visible={visible}>
          <View style={styles.overlayContainer}>
            <View style={styles.content}>
              <ActivityIndicator size={size} color={color} />
              {message && <Text style={styles.message}>{message}</Text>}
            </View>
          </View>
        </Modal>
      );
    }

    return (
      <View style={styles.inlineContainer}>
        <ActivityIndicator size={size} color={color} />
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    );
  }
);

LoadingSpinner.displayName = 'LoadingSpinner';

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inlineContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  message: {
    marginTop: 15,
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },
});
