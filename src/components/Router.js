import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import App from './App';
import {routes, paths} from '../helpers/routes';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <App paths={paths}/>}/>
            {
                routes.map(({path, component: C, customProps}) => (
                    <Route key={path}
                           path={path}
                           render={(props) => <C {...props} customProps={customProps}/>}
                    />
                ))
            }
        </Switch>
    </BrowserRouter>
);

export default Router;