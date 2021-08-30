import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'gray.700',
      },
    },
  },
  colors: {
    brand: {
      50: '#f6e8ff',
      100: '#e3bdff',
      200: '#cd94ff',
      300: '#b46ef7',
      400: '#9a4ce7',
      500: '#7e31ce',
      600: '#641eab',
      700: '#4b1483',
      800: '#341158',
      900: '#1e0d2d',
    },
  },
  fonts: {
    heading: `Josefin Sans, ${base.fonts.heading}`,
  },
  components: {
    Button: {
      variants: {
        pill: (props) => ({
          ...base.components.Button.variants.outline(props),
          rounded: 'full',
          color: 'gray.500',
        }),
      },
    },
  },
});

export default theme;
