import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
import {Link} from 'react-router-dom';
import Button from '../Button';

function Menu() {
    return ( 
    <nav className='Menu'>
        <Link to='/'>
            <img className="Logo" src={Logo} alt="LigaFlix logo"/>
        </Link>
        <Button as={Link} className='ButtonLink' to='/cadastro/video'>
            Novo Vídeo
        </Button>
    </nav>
    );
}

export default Menu;