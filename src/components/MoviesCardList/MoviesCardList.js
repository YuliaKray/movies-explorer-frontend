import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useEffect, useState } from "react";

export function MoviesCardList(props) {
  const [isSaved, setIsSaved] = useState(false);

  
  

  // useEffect(() => {
  //   getMovies()
  // }, [props.findedMovies, props.savedMovies])

  function getMovies() {
    const filmsFromSearch = props.findedMovies.map((film) => {

      if (props.isPathSavedMovies) {
        return (
          // <li key={props.isPathSavedMovies ? film.movieId : film.id}>
            <MoviesCard
              saveFilm={props.saveFilm}
              deleteFilm={props.deleteFilm}
              key={props.isPathSavedMovies ? film.movieId : film.id}
              isPathSavedMovies={props.isPathSavedMovies}
              film={film}
              isSaved={true}
            />
          // </li>
        )

      } else {
        const itemSavedMovie = props.savedMovies.map(item => {
          return item.movieId
        })

        if (itemSavedMovie.includes(film.id)) {
          return (
            // <li key={film.id}>
              <MoviesCard
                saveFilm={props.saveFilm}
                deleteFilm={props.deleteFilm}
                key={film.id}
                isPathSavedMovies={props.isPathSavedMovies}
                film={film}
                isSaved={true}
              />
            // </li>
          )
        } else {
          return (
            // <li key={film.id}>
              <MoviesCard
                saveFilm={props.saveFilm}
                deleteFilm={props.deleteFilm}
                key={film.id}
                isPathSavedMovies={props.isPathSavedMovies}
                film={film}
                isSaved={false}
              />
            // </li>
          )
        }

      }
    })
    // console.log(filmsFromSearch)
    return filmsFromSearch;
  }


  function findNothing() {
    return (
      <li><p className="movies-list__error-message">Ничего не найдено.</p></li>
    )
  }

  // function handleClickMore (filmsArray, button) {

  //   filmsArray.forEach((item) => {
  //     item.classList.remove('movie_hidden')
  //     button.classList.remove('movies-list__more-button_visidle')
  //   })
  // }

  // function showFilms() {
  //   if (props.isPathSavedMovies) {} else {
  //     const button = document.querySelector('.movies-list__more-button');
  //     const filmsArray = Array.from(document.querySelectorAll('.movie'))

  //     // const filmsArray = getMovies();
  //     console.log(filmsArray)
  //     console.log(button)


  //     if (window.innerWidth > 1279 && (filmsArray !== (null || undefined || 0))) {
  //       button.classList.remove('movies-list__more-button_visidle')
  //       filmsArray.forEach((item, index) => {
  //         item.classList.add('movie_hidden')
  //         if (index <= 11) {
  //           item.classList.remove('movie_hidden')
  //         } else if (index > 11) {
  //           button.classList.add('movies-list__more-button_visidle')
  //         }
  //         handleClickMore(filmsArray, button)
  //         // filmsArray.forEach((item) => {
  //         //   item.classList.remove('movie_hidden')
  //         //   button.classList.remove('movies-list__more-button_visidle')
  //         // })
  //       })
  //     }
  //   }
  // }

  return (
    <section className="movies-list">
      <ul className="movies-list__container" >
        {(props.findedMovies.length === 0) ? findNothing() : getMovies()}
      </ul>
      {/* {showFilms()} */}

      <button className={`movies-list__more-button 
      ${(props.isPathSavedMovies || props.findedMovies.length === 0) ? "" : "movies-list__more-button_visidle"}`}
        type="button"
        // onClick={showFilms}
      >Ещё</button>
      {/* {showFilms()} */}
    </section>
  )
}