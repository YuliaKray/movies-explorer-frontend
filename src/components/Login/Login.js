import { Forms } from "../Forms/Forms";

export function Login(props) {
  return (
    <Forms
      onLogin={props.onLogin}
      showError={props.showError}
      path={false}
      heading={"Рады видеть!"}
      buttonText={"Войти"}
      captionText={"Ещё не зарегистрированы?"}
      captionLinkText={"Регистрация"}
    />
  )
}