import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@components/GlobalStyles/GlobalStyles";
import store from "@store/index";

const theme = {
  colors: {
    primary: "hsl(0, 0%, 7%)",
    secondary: "hsl(212, 100%, 48%)",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
