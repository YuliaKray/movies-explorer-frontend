import "./Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrap">
        <p className="footer__year">© 2023</p>
        <nav className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/" target="_blank">Github</a>
        </nav>
      </div>
    </footer>
  )
}