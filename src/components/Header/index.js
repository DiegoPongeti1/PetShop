import React from 'react' 

import { AreaHeader } from './styled'

function Header() { 
    return (
        <AreaHeader>
           <div className="container">
                <div className="logo"> 
                   <img src="../../../petshopLogo.img"/>
                </div>   

                <nav>
                    <ul>
                        <li>Login</li>    
                        <li>Agendamento</li> 
                        <li>Cadastro</li> 
                        <li>Produtos</li> 
                    </ul>    
                </nav>    
               
            </div> 
        </AreaHeader>  
    )
}

export default Header;