import "./SearchForm.css";
import searchPic from "../../images/search.svg"
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import { useFormWithValidation } from "../../utils/Validation";
import { useState, useEffect } from "react";

export function SearchForm(props) {
  const { values, handleChange, isValid, resetForm } = useFormWithValidation();
  const [input, setInput] = useState(props.inputValues)

  useEffect(() => {
    if (props.isPathSavedMovies === false) {
    const lastSearchMovies = JSON.parse(localStorage.getItem('inputValues'));
    setInput(lastSearchMovies)
    }
  }, [props.isPathSavedMovies])

  useEffect(() => {
    setInput(values.movie)
  }, [values.movie])

  function handleSubmit (e) {
    e.preventDefault();

    console.log(values)
    
    props.setInputValues(values.movie);
    setInput(values.movie)
    props.filter();
    resetForm()
  }

  return (
    <section className="search-form" aria-label="Поиск фильмов">
      <img className="search-form__img" src={searchPic} alt="Лупа" />
      <form className="search-form__form" onSubmit={handleSubmit} noValidate>
        <div className="search-form__form-wrap">
        <input 
          value={input}
          className={`search-form__input {/*isValid ? "" : "search-form__input_error"*/}`}
          onChange={(e) => handleChange(e)}
          placeholder="Фильм"
          type="text"
          name="movie"
          required
          formNoValidate/>
        <button 
        className={`search-form__button 
        ${isValid ? "" : "search-form__button_disabled"}`}
        onSubmit={handleSubmit}
        disabled={(isValid) ? null : "disabled"}
        >Найти</button>
        </div>
      <div className="search-form__wrap">
        <FilterCheckbox 
        // filter={props.filter}
        setIsShort={props.setIsShort}
        isPathSavedMovies={props.isPathSavedMovies}
        />
        <p className="search-form__short-film">Короткометражки</p>
      </div>
      </form>
    </section>
  )
}