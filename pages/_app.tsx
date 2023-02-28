import Layout from "components/layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { Provider, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "store/store";
// import store, { persistor } from "store/store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global-style";
import { theme } from "styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    console.log("app running");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {() => (
            <Layout>
              <Component {...pageProps} />
              <GlobalStyle />
            </Layout>
          )}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};
export default App;
