import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export function MoviesCardList(props) {

  return (
    <section className="movies-list">
      <ul className="movies-list__container" >
        <li><MoviesCard
          isSavedMovies={props.isSavedMovies}
        /></li>
        <li><MoviesCard isSaved={true}
          isSavedMovies={props.isSavedMovies}
        /></li>
        <li><MoviesCard
          isSavedMovies={props.isSavedMovies}
        /></li>
        <li><MoviesCard
          isSavedMovies={props.isSavedMovies}
        /></li>

      </ul>

      <button className={`movies-list__more-button ${props.isSavedMovies ? "" : "movies-list__more-button_visidle"}`}
        type="button"
      >Ещё</button>
    </section>
  )
}