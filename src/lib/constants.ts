export const COLORS = {
    black: '#060508',
    white: '#F5F2ED',
    nearWhite: '#FDFBFA',
    elevated: '#0E0C10',
    surface: '#141218',
    accent: {
        base: '#C9A66B',
        glow: 'rgba(201, 166, 107, 0.25)',
        mid: 'rgba(201, 166, 107, 0.15)',
        dim: 'rgba(201, 166, 107, 0.08)',
    },
    accent2: {
        base: '#E8D5B5',
        dim: 'rgba(232, 213, 181, 0.06)',
    },
    text: {
        base: '#F5F2ED',
        secondary: 'rgba(245, 242, 237, 0.85)',
        tertiary: 'rgba(245, 242, 237, 0.65)',
        metadata: 'rgba(245, 242, 237, 0.50)',
        muted: 'rgba(245, 242, 237, 0.60)',
    },
    glass: {
        bg: 'rgba(245, 242, 237, 0.02)',
        bgHover: 'rgba(245, 242, 237, 0.04)',
        border: 'rgba(245, 242, 237, 0.06)',
        borderHover: 'rgba(245, 242, 237, 0.12)',
    }
} as const;

export const EASING = {
    smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
    smoothArray: [0.16, 1, 0.3, 1],
    base: 'ease',
} as const;
