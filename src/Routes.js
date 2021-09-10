import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

export default () => {
    
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/Cadastro">
                Pagina de Cadastro
            </Route>

            <Route exact path="/Agendamento">
                Pagina de Agendamento
            </Route>

            <Route exact path="/Produtos">
                Pagina de Produtos
            </Route>
        </Switch>
    )
}