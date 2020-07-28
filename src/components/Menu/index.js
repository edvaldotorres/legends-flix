import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButoonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/" >
            <img class="Logo" src = { Logo } alt = "TorresFlix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;