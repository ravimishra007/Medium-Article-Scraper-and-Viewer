import { extendTheme } from "@chakra-ui/react";
import "@fontsource/outfit"; // Import Outfit font

const theme = extendTheme({
  fonts: {
    heading: "'Outfit', sans-serif",
    body: "'Outfit', sans-serif",
  },
});

export default theme;
