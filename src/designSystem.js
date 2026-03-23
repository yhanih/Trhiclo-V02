export const colors = {
  bgApp: '#F2F4F7',
  surfaceCard: '#FFFFFF',
  surfaceDark: '#2B2F35',
  accentOrange: '#F46331',
  accentLime: '#E2F163',
  accentOrangeLight: '#FEEDE8',
  textMain: '#1A1D20',
  textMuted: '#8E98A4',
  textInverse: '#FFFFFF',
  black: '#0A0A0A',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const radius = {
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  pill: 999,
};

export const elevation = {
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  floating: {
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
};

export const type = {
  h1: { fontSize: 28, fontWeight: '700', letterSpacing: -0.5 },
  h2: { fontSize: 20, fontWeight: '700', letterSpacing: -0.3 },
  h3: { fontSize: 17, fontWeight: '600' },
  body: { fontSize: 14, fontWeight: '400' },
  caption: { fontSize: 12, fontWeight: '500' },
};

export const layout = {
  screenPadding: 24,
  topInset: 48,
  bottomInset: 120,
  sectionGap: 24,
};

export const buttonVariants = {
  primary: { backgroundColor: colors.accentOrange, color: colors.textInverse },
  secondary: { backgroundColor: colors.surfaceDark, color: colors.textInverse },
  ghost: { backgroundColor: 'transparent', color: colors.textMain },
};
