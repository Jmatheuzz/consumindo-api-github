import React from 'react';
import {Switch} from 'react-router-dom';
import MyRoute from './MyRoute';
import Login from '../pages/BuscaApi';
import Page404 from '../pages/Page404';
import SobreMim from '../pages/SobreMim';

export default function Routes(){
    return (
        
        <Switch>
        <MyRoute exact path="/" component={Login} />
        <MyRoute exact path="/sobremim/" component={SobreMim} />
        <MyRoute path="*" component={Page404} />
        </Switch>

    );
}

