import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Agendamento from './pages/Agendamento'
import Produtos from './pages/Produtos'


export default () => {
    
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/Login">
                <Login />
            </Route>

            <Route exact path="/Cadastro">
                <Cadastro />
            </Route>

            <Route exact path="/Agendamento">
                <Agendamento />
            </Route>

            <Route exact path="/Produtos">
                <Produtos />
            </Route>
        </Switch>
    )
}