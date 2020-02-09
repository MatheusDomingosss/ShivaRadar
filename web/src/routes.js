import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Contato from './pages/Contato';
import Historico from './pages/Historico';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/contato" component={Contato}/>
                <Route path="/historico" component={Historico}/>
            </Switch>
        </BrowserRouter>
    );
}