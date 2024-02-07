import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";

const styles = {
  global: (props) => ({
    body: {
      color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      bg: props.colorMode === "dark" ? "#101010" : "gray.100",
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  gray: {
    50: "#F7FAFC", // You might need to define more shades to match Chakra's default color scales
    100: "#EDF2F7",
    // Add other shades as needed
    800: "#1A202C",
    900: "#171923",
    light: "#616161", // Custom color shades
    dark: "#1e1e1e",
  },
  // Add other color scales as needed
};

const theme = extendTheme({ styles, config, colors });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
