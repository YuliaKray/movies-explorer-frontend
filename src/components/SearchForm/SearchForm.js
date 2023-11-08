import "./SearchForm.css";
import searchPic from "../../images/search.svg"
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";

export function SearchForm() {
  return (
    <section className="search-form">
      <img className="search-form__img" src={searchPic} alt="Лупа" />
      <form className="search-form__form">
        <input className="search-form__input"
          placeholder="Фильм" />
        <button className="search-form__button">Найти</button>
      </form>
      {/* здесь будут короткометражки */}
      <div className="search-form__wrap">
        <FilterCheckbox />
        <p className="search-form__short-film">Короткометражки</p>
      </div>
    </section>
  )
}