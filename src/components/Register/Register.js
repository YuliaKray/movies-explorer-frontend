import { Forms } from "../Forms/Forms";

export function Register(props) {

  return (
    <Forms
      onRegister={props.onRegister}
      showError={props.showError}
      path={true}
      heading={"Добро пожаловать!"}
      buttonText={"Зарегистрироваться"}
      captionText={"Уже зарегистрированы?"}
      captionLinkText={"Войти"}
    />
  )
}