import "./MoviesCard.css";
import savedButton from "../../images/saved.svg";
import deleteButton from "../../images/delete-icon.svg";

export function MoviesCard(props) {

  function countDuration(duration) {
    const hours = Math.trunc(duration/60);
    const minutes = duration - hours*60;
    const finalDuration = `${hours}ч ${minutes}м`
    return finalDuration
  }

  function isPathSavedMovies() {
    if (props.isPathSavedMovies) {
      return (
        <img className="movie__delete" src={deleteButton} alt="Удалить"/>
      )
    } else {
      return isSaved()
    }
  }
  
  function isSaved() {
    if (props.isSaved) {
      return (
        <img className="movie__saved" src={savedButton} alt="Сохраненный"/>
      )
    } else {
      return (
        <button className="movie__add" >Сохранить</button>
      )
    };
  }

  function handleClick() {
    window.location.assign(props.film.trailerLink)
  }


  return (
    <article className="movie" key={props.film.id}>
      {isPathSavedMovies()}
      <img className="movie__img" 
      src={`https://api.nomoreparties.co/${props.film.image.url}`} 
      alt={props.film.nameRU} 
      onClick={handleClick}/>
      <h2 className="movie__title">{props.film.nameRU}</h2>
      <p className="movie__duration">{countDuration(props.film.duration)}</p>
    </article>
  )
}