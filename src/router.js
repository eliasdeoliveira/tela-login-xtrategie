import React from 'react';
import { isAuthenticated } from './auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/login';
// import api from './services/api';
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        )} />
)

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" exact component={Login} />
                {/* <PrivateRoute path="/dashboard/nao-possui-permissao" exact component={NaoPossuiPermissao} /> */}
            </Switch>
        </BrowserRouter>
    );
}