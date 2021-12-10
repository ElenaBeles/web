import React from 'react';
import {BrowserRouter, Redirect, Route, Switch, useHistory} from 'react-router-dom';
import { Router } from 'react-router';
import './App.css';
import { Provider } from 'mobx-react';

import { createBrowserHistory } from 'history';
import {Auth} from "./app/pages/Auth";
import {Registration} from "./app/pages/Registration";
import {mainStore} from "./app/stores/MainStore";
import { hot } from "react-hot-loader";
import {Main} from "./app/pages/Main";
import {AboutFilm} from "./app/pages/AboutFilm";


const history = createBrowserHistory();

const App = hot(module) (() => {
        return (
            <Router history={history}>
                <Provider {...mainStore}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/auth" exact component={ Auth }/>
                            <Route path="/registration" exact component={ Registration }/>
                            <Route path="/collection" exact component={ Main }/>
                            <Route path="/film/:id" exact component={ AboutFilm }/>
                            <Redirect from='/' to='/collection'/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </Router>
        );
    }
)

export default App;
