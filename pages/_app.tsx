import Layout from "components/layout";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
// import { Layout } from "pages";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "store/store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global-style";
import { theme } from "styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* {() => ( */}
          <Layout>
            <Component {...pageProps} />
            <GlobalStyle />
          </Layout>
          {/* )} */}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};
export default appWithTranslation(App);
