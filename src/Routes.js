import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/login'

export default () => {
    
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/cadastro">
                Pagina de Cadastro
            </Route>

            <Route exact path="/agendamento">
                Pagina de Agendamento
            </Route>

            <Route exact path="/produtos">
                Pagina de Produtos
            </Route>
        </Switch>
    )
}