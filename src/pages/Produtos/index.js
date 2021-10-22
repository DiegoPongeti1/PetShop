import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import {AreaProdutos} from './styled'

export default () => {
    return (
<BrowserRouter> 
<Switch>
<Route exact path="/Produtos"> 
      <AreaProdutos>
          <h1> Área de Produtos </h1> 
      </AreaProdutos>     
</Route>
</Switch>
</BrowserRouter> 
    );
}