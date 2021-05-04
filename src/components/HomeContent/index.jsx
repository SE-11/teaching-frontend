import React, {  } from 'react'
import { Route, Switch } from 'react-router'
import About from '../../pages/About'
import Product from '../../pages/Product'
import Home from '../../pages/Home';

export default function HomeContent() {
    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/product" component={ Product } />
            <Route path="/about" component={ About } />
        </Switch>
    )
}
