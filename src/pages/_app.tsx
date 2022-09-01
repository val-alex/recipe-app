import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/styles/globalStyles/globalStyles";
import { store } from "../store";

const theme = {
  colors: {
    primary: "hsl(0, 0%, 7%)",
    secondary: "hsl(212, 100%, 48%)",
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
