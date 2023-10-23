import './NavTab.css';

export function NavTab() {
  return (
    <nav className='navtab'>
      <ul className='navtab_links'>
        <li className='navtab_link'>О проекте</li>
        <li className='navtab_link'>Технологии</li>
        <li className='navtab_link'>Студент</li>
      </ul>
    </nav>
  )
}