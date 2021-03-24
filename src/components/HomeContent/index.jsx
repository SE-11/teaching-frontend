import React, {  } from 'react'
import { Route, Switch } from 'react-router'
import Cooperation from '../../pages/Cooperation'
import Help from '../../pages/Help'
import Mechanism from '../../pages/Mechanism'
import Product from '../../pages/Product'
import Vip from '../../pages/Vip'
import Home from '../../pages/Home';
import Login from "../../pages/Login";

export default function HomeContent() {

    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/product" component={ Product } />
            <Route exact path="/mechanism" component={ Mechanism } />
            <Route exact path="/cooperation" component={ Cooperation } />
            <Route exact path="/vip" component={ Vip } />
            <Route exact path="/Help" component={ Help } />
            <Route exact path="/login" component={ Login } />
        </Switch>
    )
}
