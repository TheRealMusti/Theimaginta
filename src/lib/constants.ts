export const COLORS = {
  void: '#060508',
  white: '#F5F2ED',
  nearWhite: '#FDFBFA',
  elevated: '#0E0C10',
  surface: '#141218',
  accent: {
    base: '#C9A66B',
    glow: 'rgba(201, 166, 107, 0.20)',
    mid: 'rgba(201, 166, 107, 0.12)',
    dim: 'rgba(201, 166, 107, 0.06)',
  },
  accent2: {
    base: '#E8D5B5',
    dim: 'rgba(232, 213, 181, 0.06)',
  },
  text: {
    base: '#F5F2ED',
    secondary: 'rgba(245, 242, 237, 0.75)',
    tertiary: 'rgba(245, 242, 237, 0.52)',
    metadata: 'rgba(245, 242, 237, 0.38)',
    muted: 'rgba(245, 242, 237, 0.22)',
  },
  glass: {
    bg: 'rgba(245, 242, 237, 0.018)',
    bgHover: 'rgba(245, 242, 237, 0.04)',
    warmBg: 'rgba(201, 166, 107, 0.015)',
    warmBgHover: 'rgba(201, 166, 107, 0.035)',
    border: 'rgba(245, 242, 237, 0.06)',
    borderHover: 'rgba(201, 166, 107, 0.10)',
  },
  prestige: {
    base: '#C4A36E',
    glow: 'rgba(196, 163, 110, 0.15)',
  }
} as const;

export const EASING = {
  smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
  smoothArray: [0.16, 1, 0.3, 1],
  base: 'ease',
} as const;
