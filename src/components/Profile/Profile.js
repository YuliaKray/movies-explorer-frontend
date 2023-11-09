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
          <button className="profile__button"
            type="button"
            onClick={handleClick}>Редактировать</button>
          <a className="profile__exit" href="/">Выйти из аккаунта</a>
        </>
      )
    };
  }


  return (
    <section className="profile"> {/*Вот тег section */}
      <h1 className="profile__title">Привет, Юлия!</h1>
      <form className="profile__form">
        <div className="profile__wrap">
          <label className="profile__input-name" for="profile-name">Имя</label>
          <input
            className="profile__input profile__input_name"
            id="profile-name"
            value={'Юлия'}
            placeholder="Имя"
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="40"
          />
          <label className="profile__input-name" for="profile-email">Почта</label>
          <input
            className="profile__input profile__input_email"
            id="profile-email"
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