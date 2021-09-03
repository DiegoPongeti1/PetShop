import React from 'react' 
import { Link } from 'react-router-dom'
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
                        <li><Link to="/">Inicio</Link></li>   
                        <li><Link to="/login">Login</Link></li>    
                        <li><Link to="Agendamento">Agendamento</Link></li> 
                        <li><Link to="Cadastro">Cadastro</Link></li> 
                        <li><Link to="Produtos">Produtos</Link></li> 
                    </ul>    
                </nav>    
               
            </div> 
        </AreaHeader>  
    )
}

export default Header;