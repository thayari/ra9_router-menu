import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="menu">
      <NavLink exact activeClassName="menu__item-active" className="menu__item" to="/">Главная</NavLink>
      <NavLink activeClassName="menu__item-active" className="menu__item" to="/drift">Дрифт-такси</NavLink>
      <NavLink activeClassName="menu__item-active" className="menu__item" to="/timeattack">Time Attack</NavLink>
      <NavLink activeClassName="menu__item-active" className="menu__item" to="/forza">Forza Karting</NavLink>
    </nav>
  );
}