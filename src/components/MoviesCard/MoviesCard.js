import "./MoviesCard.css";
import savedButton from "../../images/saved.svg";
import deleteButton from "../../images/delete-icon.svg";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function MoviesCard(props) {
  // const currentUser = React.useContext(CurrentUserContext);

  function countDuration(duration) {
    const hours = Math.trunc(duration/60);
    const minutes = duration - hours*60;
    const finalDuration = `${hours}ч ${minutes}м`
    return finalDuration
  }

  function handleDelete() {
    props.deleteFilm(props.film)
  }
  
  function isPathSavedMovies() {
    if (props.isPathSavedMovies) {
      return (
        <img className="movie__delete" src={deleteButton} alt="Удалить" onClick={handleDelete}/>
      )
    } else {
      return isSaved()
    }
  }
  
  function isSaved() {
    if (props.isSaved) {
      return (
        <img className="movie__saved" src={savedButton} alt="Сохраненный" onClick={handleDelete}/>
      )
    } else {
      return (
        <button className="movie__add" onClick={handleSaveFilm}>Сохранить</button>
      )
    };
  }

  function handleClick() {
    window.location.assign(props.film.trailerLink)
  }

  function handleSaveFilm() {
    const movieItem = {
      country: props.film.country,
      director: props.film.director,
      duration: props.film.duration,
      year: props.film.year,
      description: props.film.description,
      image: `https://api.nomoreparties.co/${props.film.image.url}`,
      trailerLink: props.film.trailerLink,
      nameRU: props.film.nameRU,
      nameEN: props.film.nameEN,
      thumbnail: `https://api.nomoreparties.co/${props.film.image.formats.thumbnail.url}`,
      movieId: props.film.id,
    }
    props.saveFilm(movieItem)
    // .then(() => {
      // if (res) {
        // здесь как будто можно пропс setIsSaved прокинуть
        // props.isSaved=true
        // isSaved()
      // }
    // });
  }




  return (
    <article className="movie" key={props.film.id}>
      {isPathSavedMovies()}
      <img className="movie__img" 
      src={props.isPathSavedMovies ? props.film.image : `https://api.nomoreparties.co/${props.film.image.url}`} 
      alt={props.film.nameRU} 
      onClick={handleClick}/>
      <h2 className="movie__title">{props.film.nameRU}</h2>
      <p className="movie__duration">{countDuration(props.film.duration)}</p>
    </article>
  )
}