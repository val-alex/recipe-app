
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../Components/globalStyles/globalStyles';

import store from "../Store";

const theme = {
  colors: {
    primary: 'hsl(0, 0%, 7%)',
    secondary: 'hsl(212, 100%, 48%)',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}