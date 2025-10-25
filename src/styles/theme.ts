export const colors = {
  primary: '#2196F3',
  secondary: '#1976D2',
  success: '#4CAF50',
  error: '#C70039',
  warning: '#FF9800',
  info: '#2196F3',
  background: '#f5f5f5',
  surface: '#fff',
  text: '#333',
  textSecondary: '#666',
  textTertiary: '#999',
  border: '#ddd',
  disabled: '#ccc',
};

export const typography = {
  h1: { fontSize: 32, fontWeight: '700' as const },
  h2: { fontSize: 28, fontWeight: '700' as const },
  h3: { fontSize: 24, fontWeight: '700' as const },
  h4: { fontSize: 20, fontWeight: '700' as const },
  h5: { fontSize: 18, fontWeight: '700' as const },
  h6: { fontSize: 16, fontWeight: '700' as const },
  body1: { fontSize: 16, fontWeight: '400' as const },
  body2: { fontSize: 14, fontWeight: '400' as const },
  caption: { fontSize: 12, fontWeight: '400' as const },
  button: { fontSize: 16, fontWeight: '600' as const },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 10,
  },
};
