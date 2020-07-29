import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img class="Logo" src = { Logo } alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado com &#10084; por:
        {' '}
        <a href="https://www.instagram.com/edvaldotorres_/?hl=pt-br" target="_blank">Edvaldo Torres</a>
        <a>, </a>
        <a href="https://www.instagram.com/andrezzameloh/?hl=pt-br" target="_blank">Andrezza Melo</a>
        <a> e </a>
        <a href="https://www.instagram.com/andreymeloh/?hl=pt-br" target="_blank">Andrey Melo</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
