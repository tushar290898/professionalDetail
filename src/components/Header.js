import React from 'react'
import '../components/Header.css'
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom";
 
function Header() {
    return (
        <div className="Header">
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQEdBVTiWjEi6Q/company-logo_200_200/0/1591024880496?e=2159024400&v=beta&t=kR-rfbShQc93aVPK-1-rbymMOyvrydGEZ24AW2ot3Pw"/>
            <div className="heading"><h1>Alkurn Technologies</h1></div>
            <div className="home">
                <Link to="/">
                    <HomeIcon  color="default" fontSize="large" />
                </Link>
                
            </div>
            
        </div>
    )
}

export default Header
