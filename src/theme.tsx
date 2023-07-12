import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    brand: {
      50: "#f7fafc",

      500: "#718096",

      900: "#171923",
    },

    nigga: {
      50: "#f2f2f8",
      100: "#d8d8da",
      200: "#bebebf",
      300: "#a4a4a4",
      400: "#8a8a8a",
      500: "#707070",
      600: "#575758",
      700: "#3e3e3f",
      800: "#252527",
      900: "#0c0c12",
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
