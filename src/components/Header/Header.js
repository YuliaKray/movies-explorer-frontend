import "./Header.css"
import { Navigation } from "../Navigation/Navigation"

export function Header(props) {
  return (
    <header className={`header ${props.backgroundColor ? "header_pink" : ""}`}>
      <a href="/" className="header__logo" title="На главную"></a>
      <Navigation backgroundColor={props.backgroundColor}
        loggedIn={props.loggedIn}
      />
    </header>
  )
}