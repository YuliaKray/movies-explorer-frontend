import "./SavedMovies.css"
import { SearchForm } from "../SearchForm/SearchForm"
import { MoviesCardList } from "../MoviesCardList/MoviesCardList"
import { useState, useEffect } from "react";

export function SavedMovies(props) {
  const [findedMovies, setFindedMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [inputValues, setInputValues] = useState('');

  useEffect(() => {
    setFindedMovies(props.savedMovies)
  }, [props.savedMovies])


  function handleInputFilter() {
    const findedItem = props.savedMovies.filter(item => {
      const filmName = item.nameRU + " " + item.nameEN;
      if (filmName.toLowerCase().includes(inputValues)) {
        return isShort ? (item.duration < 41 && item) : item
      }
    });

    setFindedMovies(findedItem);
  }

  useEffect(() => {
    setInputValues(inputValues);
    setIsShort(isShort);
    handleInputFilter();
  }, [isShort, inputValues, props.savedMovies])


  return (
    <div className="movies saved-movies" >
      <SearchForm
        filter={handleInputFilter}
        isShort={isShort}
        inputValues={inputValues}
        setInputValues={setInputValues}
        setIsShort={setIsShort}
      />
      <MoviesCardList
        isPathSavedMovies={true}
        findedMovies={findedMovies}
        deleteFilm={props.deleteFilm}
      />
    </div>
  )
}