import React from 'react';
import { Provider } from 'mobx-react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import './index.sсss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mainStore from "./app/stores/MainStore";

const history = createBrowserHistory();

ReactDOM.render(
    <StrictMode>
        <Router history={ history }>
            <Provider { ...mainStore }>
                <App/>
            </Provider>
        </Router>
    </StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
