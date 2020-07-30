import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButoonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/" >
                <img class="Logo" src = { Logo } alt = "LegendsFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;