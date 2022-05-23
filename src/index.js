import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { theme } from "./Components/Global"
import { GlobalStyle } from "./Components/Global"
import { ThemeProvider } from 'styled-components';
import store from "./features/index"
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
