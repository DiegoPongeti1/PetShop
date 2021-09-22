import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import {AreaCadastro} from './styled'


import {BtnDeFaut} from '../../components/Styled'


import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default () => {
    return (
<BrowserRouter> 
<Switch>
<Route exact path="/Cadastro"> 
      <AreaCadastro>
          <h1 className="organize">
            <Link to="/Login"><ArrowBackIosIcon /></Link>
            Crie sua conta                    
          </h1> 

          <p> Crie sua conta gratuitamente!</p>

                  <form>
                        <div className="form-imput"> 
                              <label>Nome</label>
                              <input type="text" />
                        </div>

                        <div className="form-imput"> 
                              <label>E-mail</label>
                              <input type="email" />
                        </div>

                        <div className="form-imput"> 
                              <label>Senha</label>
                              <input type="password" />
                        </div>

                        <BtnDeFaut>Concluir Cadastro</BtnDeFaut>

                        <div className="footerLogin">
                              Já possui uma conta ? 
                              <Link to="/Login"> Realizar Login </Link> 
                   </div>
                  </form>
      </AreaCadastro>     
</Route>
</Switch>
</BrowserRouter> 
    );
}