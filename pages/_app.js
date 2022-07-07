import "../styles/globals.css";

import { Provider } from "react-redux";
import store from "../redux";
import CustomProvider from "../providers/Provider";
import CustomNav from "../components/nav/customNav";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CustomProvider>
        <CustomNav />
        <Component {...pageProps} />
      </CustomProvider>
    </Provider>
  );
}

export default MyApp;
