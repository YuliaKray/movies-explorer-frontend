import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export function MoviesCardList(props) {

  return (
    <section className="movies-list">
      <div className="movies-list__container" >
        <MoviesCard
          isSavedMovies={props.isSavedMovies}
        />
        <MoviesCard isSaved={true}
          isSavedMovies={props.isSavedMovies}
        />
        <MoviesCard
          isSavedMovies={props.isSavedMovies}
        />
        <MoviesCard
          isSavedMovies={props.isSavedMovies}
        />

      </div>

      <button className={`movies-list__more-button ${props.isSavedMovies ? "" : "movies-list__more-button_visidle"}`} >Ещё</button>
    </section>
  )
}