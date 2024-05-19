const breakpoints = {
  md: '768px',
  lg: '1024px',
  xl: '1366px',
};

export const devices = {
  tablet: `(min-width: ${breakpoints.md})`,
  'tablet-lg': `(min-width: ${breakpoints.lg})`,
  desktop: `(min-width: ${breakpoints.xl})`,
};
