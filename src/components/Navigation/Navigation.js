import './Navigation.css'
import profilePink from '../../images/profile-pink.svg';
import profileBlack from '../../images/profile-black.svg';
import burgerMenu from '../../images/burger-menu.svg';
import closeButton from '../../images/Cross.svg';
import React from 'react';
import { NavLink } from 'react-router-dom';


export function Navigation(props) {
  const [nav, setNav] = React.useState(false);

  function handleNavigation() {
    setNav(!nav);
  }


  function login() {
    return (
      <>
        <ul className={`navigation__links ${nav ? "navigation__links_active" : ""}`}>
          <li><NavLink className={({isActive}) => ` navigation__link navigation__link_hidden ${isActive ? "navigation__link_focus" : ""}`} to='/' reloadDocument>Главная</NavLink></li>
          <li><NavLink className={({isActive}) => ` navigation__link ${isActive ? "navigation__link_focus" : ""}`} to='/movies' reloadDocument>Фильмы</NavLink></li>
          <li><NavLink className={({isActive}) => ` navigation__link ${isActive ? "navigation__link_focus" : ""}`} to='/saved-movies' reloadDocument>Сохранённые фильмы</NavLink></li>
          <li><NavLink className={({isActive}) => ` navigation__link navigation__link_profile ${nav ? "navigation__link_profile-active" : ""} ${isActive ? "navigation__link_focus" : ""}`}
           to='/profile' reloadDocument>
            <p className={`navigation__profile-link ${nav ? "navigation__profile-link_active" : ""}`}>Аккаунт</p>
            <div className={`navigation__button ${props.backgroundColor&&(!nav) ? '' : 'navigation__button_grey'}`}>
              <img className='navigation__profile-img' src={props.backgroundColor&&(!nav) ? profilePink : profileBlack} alt='Профиль' />
            </div>
          </NavLink></li>
        </ul>
        <img className='navigation__burger-menu'
          alt='Меню'
          src={burgerMenu}
          onClick={handleNavigation}
        />
      </>
    )
  }

  function guest() {
    return (
      <ul className="navigation__links-guest">
        <li><a className='navigation__link-guest' href='/signup'>Регистрация</a></li>
        <li><a className='navigation__link-guest' href='/signin'>
          <button className='navigation__button-login '>Войти</button>
        </a></li>
      </ul>
    )
  }

  return (
    <nav className="navigation"> {/*вот тег nav */}
      <img
        className={`navigation__close ${nav ? "navigation__close_active" : ""}`}
        src={closeButton}
        alt="Закрыть"
        onClick={handleNavigation}
      />
      <div className={`navigation__background ${nav ? "navigation__background_active" : ""}`} />
      {props.loggedIn ? login() : guest()} {/*здесь отрабатывают функции выбора между логина и guest*/}
    </nav>
  )
}