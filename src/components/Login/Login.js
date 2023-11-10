import { Forms } from "../Forms/Forms";

export function Login() {
  return (
    <Forms
      path={false}
      heading={"Рады видеть!"}
      buttonText={"Войти"}
      captionText={"Ещё не зарегистрированы?"}
      captionLinkText={"Регистрация"}
    />
  )
}