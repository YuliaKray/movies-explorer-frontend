import React, { useCallback } from "react";
import "./Profile.css";
import { useFormWithValidation } from "../../utils/Validation";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function Profile(props) {
  const [isRedact, setIsRedact] = React.useState(false);
  const [a, setA] = React.useState(true);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function checkUserData() {
    if ((props.userName === values.name) && (props.userEmail === values.email)) {
      console.log(props.userName, values.name, props.userEmail, values.email)
      setA(false)
    } else {
      setA(true)
    }
  }

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
          {/* <span id="error-profile" className={`profile__error-message ${props.showError ? "profile__error-message_visible" : ""}`}>{props.showError}</span> */}
          <button
            className={`profile__button-save ${(isValid && a) ? "" : "profile__button-save_disabled"}`}
            type="submit"
            onSubmit={handleSubmit}
            // onClick={props.haveError ? handleClick : ""}
            disabled={(isValid && a) ? null : "disabled"}
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
      <h1 className="profile__title">Привет, {props.userName}!</h1>
      <form
        className="profile__form"
        onSubmit={handleSubmit}
        name="profile-form"
        noValidate>
        <div className="profile__wrap">
          <label className="profile__input-name" for="profile-name">Имя</label>
          <input
            className={`profile__input profile__input_name ${errors.name ? "profile__input_error" : ""}`}
            id="profile-name"
            value={isRedact ? values.name : props.userName}
            onChange={e => handleChange(e)}
            // placeholder={props.userName}
            placeholder="Имя"
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="40"
          />
          {/* 
          <span
            id="profile-error-name"
            className={`profile__error-message ${(name.isEmpty || name.minLengthError) ? "forms__error-message_visible" : ""}`}
          >{showInputError("error-name", findInput("forms-name"))}</span> */}


          <label className="profile__input-name" for="profile-email">Почта</label>
          <input
            className={`profile__input profile__input_email ${errors.email ? "profile__input_error" : ""}`}
            id="profile-email"
            // value={props.userEmail || ''}
            value={isRedact ? (values.email || props.username) : props.userEmail}
            onChange={e => handleChange(e)}
            placeholder="Почта"
            // placeholder={props.userEmail}

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
        ${props.showError ? "profile__error-message_visible" : ""} 
        ${props.showSuccess ? "profile__error-message_success" : ""}`}
        >{props.showError ? props.showError : props.showSuccess}</span>

        {redaction()}
      </form>
    </section>
  )
}