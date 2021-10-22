import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import {AreaAgendamento} from './styled'

export default () => {
    return (
<BrowserRouter> 
<Switch>
<Route exact path="/Agendamento"> 
      <AreaAgendamento>
          <h1> Área de Agendamento </h1> 
      </AreaAgendamento>     
</Route>
</Switch>
</BrowserRouter> 
    );
}