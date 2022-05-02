import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import GlobalStyles from "./Components/Global"
import theme from "./Components/Global/theme";
import {ThemeProvider} from "styled-components"
import store from "./Redux/index";


ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <App/>
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
