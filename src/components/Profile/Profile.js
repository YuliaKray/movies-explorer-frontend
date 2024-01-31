import React, { useEffect } from "react";
import "./Profile.css";
import { useFormWithValidation } from "../../utils/Validation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function Profile(props) {
  const [isRedact, setIsRedact] = React.useState(false);
  const [userData, setUserData] = React.useState(true);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    if ((currentUser.name === values.name) || (currentUser.email === values.email)) {
      console.log(currentUser.name, values.name, currentUser.email, values.email)
      setUserData(false)
    } else {
      console.log(currentUser.name, values.name, currentUser.email, values.email)

      setUserData(true)
    }
  }, [values, currentUser])


  function handleClick() {
    setIsRedact(!isRedact);
  }


  function handleSubmit(e) {
    e.preventDefault();

    props.onEditProfile(values)
    resetForm();
    handleClick()
  }

  function redaction() {
    if (isRedact) {
      return (
        <>
          <button
            className={`profile__button-save ${(isValid && userData) ? "" : "profile__button-save_disabled"}`}
            type="submit"
            onSubmit={handleSubmit}
            disabled={(isValid && userData) ? null : "disabled"}
          >Сохранить</button>
        </>
      )
    } else {
      return (
        <>
          <button className="profile__button"
            type="button"
            onClick={handleClick}>Редактировать</button>
          <a className="profile__exit" href="/" onClick={props.onSignOut}>Выйти из аккаунта</a>
        </>
      )
    };
  }


  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form
        className="profile__form"
        onSubmit={handleSubmit}
        name="profile-form"
        noValidate>
        <div className="profile__wrap">
          <label className="profile__input-name" for="profile-name">Имя</label>
          <input
            readOnly={isRedact ? '' : 'readOnly'}
            className={`profile__input profile__input_name ${errors.name ? "profile__input_error" : ""}`}
            id="profile-name"
            value={isRedact ? values.name : currentUser.name}
            onChange={e => handleChange(e)}
            placeholder="Имя"
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="40"
          />

          <label className="profile__input-name" for="profile-email">Почта</label>
          <input
            readOnly={isRedact ? '' : 'readOnly'}
            className={`profile__input profile__input_email ${errors.email ? "profile__input_error" : ""}`}
            id="profile-email"
            value={isRedact ? values.email : currentUser.email}
            onChange={e => handleChange(e)}
            placeholder="Почта"
            pattern="^\S+@\S+\.\S+$"
            type="email"
            name="email"
            required
            minLength="2"
            maxLength="40"
          />
        </div>
        <span
          id="error-profile"
          className={`profile__error-message 
        ${props.showError && !isRedact ? "profile__error-message_visible" : ""} 
        ${props.showSuccess && !isRedact ? "profile__error-message_success" : ""}`}
        >{props.showError ? props.showError : props.showSuccess}</span>

        {redaction()}
      </form>
    </section>
  )
}