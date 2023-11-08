import React from "react";
import "./Profile.css";

export function Profile() {
  const [isRedact, setIsRedact] = React.useState(false)


  function handleClick() {
    setIsRedact(!isRedact);
  }

  function redaction() {
    if (isRedact) {
      return (
        <>
         <span id="error-profile" className="profile__error-message">Что-то пошло не так...</span>
          <button className="profile__button-save" onClick={handleClick}>Сохранить</button>
        </>
      )
    } else {
      return (
        <>
          <button className="profile__button" onClick={handleClick}>Редактировать</button>
          <a className="profile__exit" href="/">Выйти из аккаунта</a>
        </>
      )
    };
  }


  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Юлия!</h2>
      <form className="profile__form">
        <div className="profile__wrap">
          <p className="profile__input-name">Имя</p>
          <input
            className="profile__input profile__input_name"
            value={'Юлия'}
            placeholder="Имя"
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="40"
          />
          <p className="profile__input-name">Почта</p>
          <input
            className="profile__input profile__input_email"
            value={'pochta@yandex.ru'}
            placeholder="Почта"
            type="email"
            name="email"
            required
            minLength="2"
            maxLength="40"
          />
        </div>
        {redaction()}
      </form>
    </section>
  )
}