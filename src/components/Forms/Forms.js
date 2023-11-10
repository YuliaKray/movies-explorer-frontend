import "./Forms.css";

export function Forms(props) {

  function isSignup(){
    if (props.path) {
      return(
        <>
        <label className="forms__input-title" for="forms-name">Имя</label>
        <input
          // value={email || ''}
          id="forms-name"
          placeholder="Имя"
          className="forms__input forms__input_type_name "
          type="text"
          name="name"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="error-name" className="forms__error-message"></span>
      </>)
    }
  }

  return (
    <section className="forms" aria-label="Зарегистрироваться">
      <a href="/" className="forms__logo" title="На главную"></a>
      <h1 className="forms__heading">{props.heading}</h1>
      <form
        className="forms__form"
        // name="form" 
        noValidate>
        {isSignup()}
        <label className="forms__input-title" for="forms-email">E-mail</label>
        <input
          // value={email || ''}
          id="forms-email"
          placeholder="E-mail"
          className="forms__input forms__input_type_email"
          type="email"
          name="email"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="error-email" className="forms__error-message">Что-то пошло не так...</span>

        <label className="forms__input-title" for="forms-password">Пароль</label>
        <input
          // value={password || ''}
          id="forms-password"
          placeholder="Пароль"
          className="forms__input forms__input_type_password"
          type="password"
          name="password"
          required
          minLength="2"
          maxLength="200" />
        <span id="error-password" className="forms__error-message">Что-то пошло не так...</span>
        {/* <span id="error-button" className={`forms__error-button ${props.path ? "" : "forms__error-button_signin"}`}>При обновлении профиля произошла ошибка.</span> */}
        <button
          type="submit"
          className={`forms__submit-button ${props.path ? "" : "forms__submit-button_signin"}`}>{props.buttonText}</button>
      </form>
      <div className="forms__container">
        <p className="forms__caption">{props.captionText}</p>
        <a className="forms__caption-link" href={`${props.path ? '/signin' : '/signup'} `}>{props.captionLinkText}</a>
      </div>
    </section>
  )
}