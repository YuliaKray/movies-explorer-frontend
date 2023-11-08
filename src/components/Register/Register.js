import { Forms } from "../Forms/Forms";

export function Register() {
  return (
    <Forms
      path={true}
      heading={"Добро пожаловать!"}
      buttonText={"Зарегистрироваться"}
      captionText={"Уже зарегистрированы?"}
      captionLinkText={"Войти"}
    />
  )
}