import "./Movies.css"
import { SearchForm } from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import { MoviesCardList } from "../MoviesCardList/MoviesCardList"
import { useEffect, useState } from "react";

//Хук для сохранения данных в лс
function isDefined(storedValue) {
  return storedValue !== null && storedValue !== 'undefined'
}

function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key)

    return isDefined(storedValue) ? JSON.parse(storedValue) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}


export function Movies(props) {
  const [findedMovies, setFindedMovies] = useLocalStorage('findedMovies', []);
  const [isShort, setIsShort] = useLocalStorage('isShort', false);
  const [inputValues, setInputValues] = useLocalStorage('inputValues', '');
  const [allMovies, setAllMovies] = useState([]);


  useEffect(() => {
    if (localStorage.getItem('movies')) {
      setAllMovies(JSON.parse(localStorage.getItem('movies')));
    }
    else {
      setAllMovies(props.allMovies)
    }
  }, [])

  useEffect(() => {
    setInputValues(inputValues);
    setIsShort(isShort);
    handleInputFilter()
  }, [isShort, inputValues, props.allMovies, allMovies])

  function handleInputFilter() {
    console.log(isShort, inputValues)

    const findedItem = (allMovies.length === 0 ? props.allMovies : allMovies).filter(item => {

      const filmName = item.nameRU + " " + item.nameEN;
      if (filmName.toLowerCase().includes(inputValues.toLowerCase())) {

        return isShort ? (item.duration < 41 && item) : item
      }
    });

    setFindedMovies(findedItem);
  }

  return (
    <div className="movies" >
      <SearchForm
        getAllMovies={props.getAllMovies}
        filter={handleInputFilter}
        isShort={isShort}
        inputValues={inputValues}
        setInputValues={setInputValues}
        setIsShort={setIsShort}
        isPathSavedMovies={false}
      />
      {props.isPreloader ? <Preloader /> :
        <MoviesCardList
          isPathSavedMovies={false}
          findedMovies={findedMovies}
          saveFilm={props.saveFilm}
          savedMovies={props.savedMovies}
          deleteFilm={props.deleteFilm}
        />}
    </div>
  )
}