import "./Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrap">
        <p className="footer__year">© 2023</p>
        <nav>
          <ul className="footer__links">
          <li><a className="footer__link" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a></li>
          <li><a className="footer__link" href="https://github.com/" target="_blank">Github</a></li>
        </ul>
        </nav>
      </div>
    </footer>
  )
}