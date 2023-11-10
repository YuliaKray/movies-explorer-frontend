import "./SearchForm.css";
import searchPic from "../../images/search.svg"
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";

export function SearchForm() {
  return (
    <section className="search-form" aria-label="Поиск фильмов">
      <img className="search-form__img" src={searchPic} alt="Лупа" />
      <form className="search-form__form">
        <div className="search-form__form-wrap">
        <input className="search-form__input"
          placeholder="Фильм"
          type="text"
          name="movie"
          required/>
        <button className="search-form__button">Найти</button>
        </div>
      {/* </form> */}
      {/* здесь будут короткометражки */}
      <div className="search-form__wrap">
        <FilterCheckbox />
        <p className="search-form__short-film">Короткометражки</p>
      </div>
      </form>
    </section>
  )
}