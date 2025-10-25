import '@testing-library/jest-native/extend-expect';

jest.mock('@react-native-firebase/app', () => ({
  __esModule: true,
  default: {
    app: jest.fn(),
  },
}));
