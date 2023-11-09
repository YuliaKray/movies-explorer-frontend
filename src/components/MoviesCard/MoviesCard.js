import "./MoviesCard.css";
import moviePic from "../../images/movie.png";
import savedButton from "../../images/saved.svg";
import deleteButton from "../../images/delete-icon.svg";

export function MoviesCard(props) {

  function isPathSavedMovies() {
    if (props.isSavedMovies) {
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


  return (
    <article className="movie" >
      {isPathSavedMovies()}
      <img className="movie__img" src={moviePic} alt={props.nameRU}/>
      <h2 className="movie__title">33 слова о дизайне</h2>
      <p className="movie__duration">1ч 17м</p>
    </article>
  )
}