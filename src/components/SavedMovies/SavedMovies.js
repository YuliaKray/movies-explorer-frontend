import "./SavedMovies.css"
import { SearchForm } from "../SearchForm/SearchForm"
// import Preloader from "../Preloader/Preloader"
import { MoviesCardList } from "../MoviesCardList/MoviesCardList"
import { useState, useEffect } from "react";

export function SavedMovies(props) {
  const [findedMovies, setFindedMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [inputValues, setInputValues] = useState('');
  // const [savedFilms, setSavedFilms] = useState(props.savedMovies)

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

    // localStorage.setItem('searchMovies', JSON.stringify({
    //   inputValues: inputValues,
    //   isShort: isShort,
    //   findedMovies: findedItem,
    // }))
    setFindedMovies(findedItem);
    console.log(findedItem)
    console.log(findedMovies)
    // return findedItem // findedMovies
    // }

  }

  useEffect(() => {
    setInputValues(inputValues);
    setIsShort(isShort);
    setFindedMovies(findedMovies);
    handleInputFilter();
  }, [isShort, inputValues])

  // useEffect(() => {
  //   setFindedMovies(findedMovies);
  // }, [props.savedMovies])


  return (
    <div className="movies saved-movies" >
      <SearchForm
        filter={handleInputFilter}
        isShort={isShort}
        inputValues={inputValues}
        setInputValues={setInputValues}
        setIsShort={setIsShort}
      />
      {/* <Preloader/> */}
      <MoviesCardList
        isPathSavedMovies={true}
        findedMovies={findedMovies}
        deleteFilm={props.deleteFilm}
      />
    </div>
  )
}