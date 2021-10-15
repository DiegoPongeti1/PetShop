import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


import  { AreaHome } from './styled';



export default () => {
    return (
<BrowserRouter> 
<Switch>
<Route exact path="/"> 
     
     <AreaHome > 
          <h1> Bem Vindo! </h1>
          <h2> Produtos em destaques </h2>
          <div className="sobre"> 
              <p> O Banho e Tosa de " " está localizado em Restinga-SP 
                  
              </p>   
          </div> 
    </AreaHome>
    
</Route>
</Switch>
</BrowserRouter> 
       
    );
}
