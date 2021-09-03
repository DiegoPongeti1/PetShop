import React from 'react' 
import { Link } from 'react-router-dom'
import { AreaHeader } from './styled'
import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import PersonIcon from '@material-ui/icons/Person';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

function Header() { 
    return (
        <AreaHeader>
           <div className="container">
                <div className="logo"> 
                   <img src="../../../petshopLogo.img"/>
                </div>   

                <nav>
                    <ul>
                        <li><Link to="/"> <HomeIcon />Inicio</Link></li>   
                        <li><Link to="/login"> <PersonIcon /> Login</Link></li>    
                        <li><Link to="Agendamento"> <TodayIcon />Agendamento</Link></li> 
                        <li><Link to="Cadastro"><PermIdentityIcon /> Cadastro</Link></li> 
                        <li><Link to="Produtos"><LocalGroceryStoreIcon /> Produtos</Link></li> 
                    </ul>    
                </nav>    
               
            </div> 
        </AreaHeader>  
    )
}

export default Header;