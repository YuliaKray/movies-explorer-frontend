import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useEffect, useState, useLayoutEffect } from "react";

// Хук для отслеживания ширины окна и смены отображаемых фильмов
function useWindowWidth() {
  const [size, setSize] = useState([0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


export function MoviesCardList(props) {
  const [isSaved, setIsSaved] = useState(false);
  const [visibleFilm, setVisibleFilm] = useState(0)
  const width = useWindowWidth();


  useEffect(() => {
    if (width > 1279) {
      setVisibleFilm(12)
    }
    if (width <= 1279) {
      setVisibleFilm(8)
    }
    if (width < 760) {
      setVisibleFilm(5)
    }
  }, [props.findedMovies, props.savedMovies, width])

  function getMovies() {
    if (props.isPathSavedMovies) {
      return getSavedMovies()
    } else {
      return getMoviesForFilter()
    }
  }

  function getMoviesForFilter() {
    const filmsFromSearch = props.findedMovies.slice(0, visibleFilm).map((film) => {
      const itemSavedMovie = props.savedMovies.map(item => {
        return item.movieId
      })

      if (itemSavedMovie.includes(film.id)) {
        const savedMovieItem = props.savedMovies.filter(item => {
          if (film.id === item.movieId) {
            return item
          }
        })
        return savedMovieItem.map(item => (
          // <li key={film.id}>
          <MoviesCard
            saveFilm={props.saveFilm}
            deleteFilm={props.deleteFilm}
            key={item.movieId}
            isPathSavedMovies={props.isPathSavedMovies}
            film={item}
            url={item.image}
            isSaved={true}
          />
          // </li>
        ))
      } else {
        return (
          // <li key={film.id}>
          <MoviesCard
            saveFilm={props.saveFilm}
            deleteFilm={props.deleteFilm}
            key={film.id}
            isPathSavedMovies={props.isPathSavedMovies}
            film={film}
            url={`https://api.nomoreparties.co/${film.image.url}`}
            isSaved={false}
          />
          // </li>
        )
      }
    })
    return filmsFromSearch;
  }

  function getSavedMovies() {
    const filmsFromSearch = props.findedMovies.map((film) => {
      return (
        // <li key={props.isPathSavedMovies ? film.movieId : film.id}>
        <MoviesCard
          saveFilm={props.saveFilm}
          deleteFilm={props.deleteFilm}
          key={film.movieId}
          isPathSavedMovies={props.isPathSavedMovies}
          film={film}
          url={film.image}
          isSaved={true}
        />
        // </li>
      )
    })
    return filmsFromSearch;

  }

  function showMoreFilms() {
    if (width > 1279) {
      setVisibleFilm(preValue => preValue + 3);
    }
    if (width <= 1279) {
      setVisibleFilm(preValue => preValue + 2);
    }
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
      {(visibleFilm < props.findedMovies.length) ?// ||(props.isPathSavedMovies === false) ?

        (<button className={`movies-list__more-button 
      ${(props.isPathSavedMovies || props.findedMovies.length === 0) ? "" : "movies-list__more-button_visidle"}`}
          type="button"
          onClick={showMoreFilms}
        >Ещё</button>)
        : ''}
    </section>
  )
}