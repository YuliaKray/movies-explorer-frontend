import { useFormWithValidation } from "../../utils/Validation";
import "./Forms.css";

export function Forms(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    if (props.path) {
      console.log(values);
      props.onRegister(values).then(() => {
        resetForm()
      })
    } else {
      console.log(values);
      props.onLogin(values)
        .then(() => {
          resetForm()
        })
    }
  }

  const showInputError = (spanId, errorMessage) => {
    const spanElement = document.getElementById(spanId)
    if (spanElement !== null) {
      return spanElement.textContent = errorMessage;
    }

  };

  const findInput = (inputId) => {
    const inputElement = document.getElementById(inputId);
    if (inputElement !== null) {
      return inputElement.validationMessage;
    }
  };



  function isSignup() {
    if (props.path) {
      return (
        <>
          <label className="forms__input-title" for="forms-name">Имя</label>
          <input
            value={values.name}
            onChange={e => handleChange(e)}
            id="forms-name"
            placeholder="Имя"
            className={`forms__input forms__input_type_name ${(errors.name) ? "forms__input-error" : ""}`}
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="40"
          />
          <span
            id="error-name"
            className={`forms__error-message ${(errors) ? "forms__error-message_visible" : ""}`}
          >{showInputError("error-name", findInput("forms-name"))}</span>
        </>)
    }
  }

  return (
    <section className="forms" aria-label="Зарегистрироваться">
      <a href="/" className="forms__logo" title="На главную"></a>
      <h1 className="forms__heading">{props.heading}</h1>
      <form
        onSubmit={handleSubmit}
        className="forms__form"
        name="form"
        noValidate
      >
        {isSignup()}
        <label className="forms__input-title" for="forms-email">E-mail</label>
        <input
          value={values.email}
          onChange={e => handleChange(e)}
          id="forms-email"
          placeholder="E-mail"
          className={`forms__input forms__input_type_email ${(errors.email) ? "forms__input-error" : ""}`}
          type="email"
          name="email"
          required
          minLength="2"
          maxLength="40"
        />
        <span
          id="error-email"
          className={`forms__error-message ${(errors) ? "forms__error-message_visible" : ""}`}

        >{showInputError("error-email", findInput("forms-email"))}</span>

        <label className="forms__input-title" for="forms-password">Пароль</label>
        <input
          value={values.password}
          onChange={e => handleChange(e)}
          id="forms-password"
          placeholder="Пароль"
          className={`forms__input forms__input_type_password ${errors.password ? "forms__input-error" : ""}`}
          type="password"
          name="password"
          required
          minLength="2"
          maxLength="200" />
        <span
          id="error-password"
          className={`forms__error-message ${errors ? "forms__error-message_visible" : ""}`}
        >{showInputError("error-password", findInput("forms-password"))}</span>

        <span id="error-submit" className={`forms__error-button ${props.path ?  "" : "forms__error-button_signin"} ${props.showError ? "forms__error-button_visible" : ""}`}>{props.showError}</span>

        <button
          onSubmit={handleSubmit}
          type="submit"
          disabled={(isValid) ? null : "disabled"}
          className={`forms__submit-button 
          ${(isValid) ? "" : "forms__submit-button_disabled"} 
          ${props.path ? "" : "forms__submit-button_signin"}`}
        >{props.buttonText}</button>
      </form>
      <div className="forms__container">
        <p className="forms__caption">{props.captionText}</p>
        <a className="forms__caption-link" href={`${props.path ? '/signin' : '/signup'} `}>{props.captionLinkText}</a>
      </div>
    </section>
  )
}