import './NavTab.css';

export function NavTab() {
  return (
    <nav className='navtab'>
      <ul className='navtab__links'>
        <li><a className='navtab__link' href='#project'>О проекте</a></li>
        <li><a className='navtab__link' href='#techs'>Технологии</a></li>
        <li><a className='navtab__link' href='#student'>Студент</a></li>
      </ul>
    </nav>
  )
}