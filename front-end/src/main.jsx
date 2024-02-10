import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

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
    50: "#F7FAFC",
    100: "#EDF2F7",
    800: "#1A202C",
    900: "#171923",
    light: "#616161",
    dark: "#1e1e1e",
  },
};

const theme = extendTheme({ styles, config, colors });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
