import "../styles/globals.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Provider } from "react-redux";
import store from "../redux";

function MyApp({ Component, pageProps }) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
