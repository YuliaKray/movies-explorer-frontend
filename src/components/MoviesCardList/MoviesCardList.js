import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export function MoviesCardList(props) {

  function getMovies() {
    // props.setFindedMovies(props.findedMovies)
    const filmsFromSearch = props.findedMovies.map((film) => (
      <li key={film.id}>
        <MoviesCard
          saveFilm={props.saveFilm}
          key={film.id}
          isPathSavedMovies={props.isPathSavedMovies}
          film={film} />
      </li>
    ))
    console.log(props.findedMovies)
    // console.log(filmsFromSearch)
    return filmsFromSearch;
  }

  function findNothing() {
    return (
      <li><p className="movies-list__error-message">Ничего не найдено.</p></li>
    )
  }

  return (
    <section className="movies-list">
      <ul className="movies-list__container" >
        {(props.findedMovies.length === 0) ? findNothing() : getMovies()}
      </ul>

      <button className={`movies-list__more-button 
      ${(props.isSavedMovies || props.findedMovies.length === 0) ? "" : "movies-list__more-button_visidle"}`}
        type="button"
      >Ещё</button>
    </section>
  )
}