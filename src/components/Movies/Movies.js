import "./Movies.css"
import { SearchForm } from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import { MoviesCardList } from "../MoviesCardList/MoviesCardList"
import { useEffect, useState } from "react";
// import { deleteFilm } from "../../utils/MainApi";

export function Movies(props) {
  const [findedMovies, setFindedMovies] = useState([]);
  // const [findedMovies, setFindedMovies] = useState(props.allMovies);
  const [isShort, setIsShort] = useState(false);
  const [inputValues, setInputValues] = useState('');
  // const [isSaved, setIsSaved] = useState(false);

  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   // при монтировании компонента надо вытаскивать предыдущие результаты поиска
  //   // const lastSearch = JSON.parse(localStorage.getItem('searchMoviesUtils'));
  //   const lastSearchMovies = JSON.parse(localStorage.getItem('searchMovies'));
  //   // console.log(lastSearch)
  //   console.log(Boolean(lastSearchMovies))
  //   console.log('сработал первый эффект')
  //   if ( lastSearchMovies) {
  //     setFindedMovies(lastSearchMovies.findedMovies);
  //     setIsShort(lastSearchMovies.isShort);
  //     setInputValues(lastSearchMovies.inputValues);

  //   }
  //   // handleInputFilter();
  // }, [])

  // useEffect(() => {
  //   setFindedMovies(findedMovies)
  // }, [props.findedMovies])

  function handleInputFilter() {
    props.getAllMovies();
    // if (isShort) {
    //   console.log('работает с чекбоксом')
    //   const findedItem = props.allMovies.filter(item => {
    //     if (filmName.toLowerCase().includes(inputValues) && item.duration < 41) {
    //       return item
    //     }
    //   });
    //   setFindedMovies(findedItem);
    // } else {
    // console.log('работает без чекбокса')
    const findedItem = props.allMovies.filter(item => {
      const filmName = item.nameRU + " " + item.nameEN;
      if (filmName.toLowerCase().includes(inputValues)) {
        return isShort ? (item.duration < 41 && item) : item
      }
    });

    localStorage.setItem('searchMovies', JSON.stringify({
      inputValues: inputValues,
      isShort: isShort,
      findedMovies: findedItem,
    }))
    setFindedMovies(findedItem);
    console.log(findedItem)
    console.log(findedMovies)
    // return findedItem // findedMovies
    // }

  }
  
  // function findSavedMovies() {
    
  // }

  // хочу чтобы здесь обнавлялись фильмы
  useEffect(() => {
    // setFindedMovies(findedMovies);
    // const lastSearchMovies = JSON.parse(localStorage.getItem('searchMovies'));
    // if (lastSearchMovies && findedMovies.length === 0) {
    //   // console.log(findedMovies)
    //   setFindedMovies(lastSearchMovies.findedMovies);
    //   setIsShort(lastSearchMovies.isShort);
    //   setInputValues(lastSearchMovies.inputValues);
    //   handleInputFilter()
    //   console.log('первая часть эффукиа')
    // } else {


      setInputValues(inputValues);
      setFindedMovies(findedMovies)
      setIsShort(isShort);
      handleInputFilter();
      // console.log(findedMovies)
      // localStorage.setItem('searchMovies', JSON.stringify({
      //   inputValues: inputValues,
      //   findedMovies: handleInputFilter(),
      //   isShort: isShort,
      // }));
      // console.log(findedMovies)

      console.log('сработал второй эффект')

    // }


  }, [isShort, // findedMovies, 
    inputValues])



  // useEffect(() => {
  //   localStorage.setItem('searchMovies', JSON.stringify({
  //     findedMovies: findedMovies,
  //     inputValue: inputValues,
  //     isShort: isShort
  //   }));

  //   setFindedMovies(findedMovies);
  //   setIsShort(isShort)
  //   setInputValues(inputValues)
  //   console.log(isShort, findedMovies, inputValues)

  // }, [isShort, findedMovies, inputValues])

  // function handleInputFilter(inputValue) {
  //   setInputValues(inputValue);
  //   if (isShort) {
  //     console.log('работает с чекбоксом')
  //     const findedItem = props.allMovies.filter(item => {
  //       // const findedItem = findedMovies.filter(item => {

  //       const filmName = item.nameRU + " " + item.nameEN;
  //       if (filmName.toLowerCase().includes(inputValue) && item.duration < 41) {
  //         return item
  //       }
  //     }
  //     );
  //     // findedItem;
  //     return setFindedMovies(findedItem);

  //   } else {
  //     console.log('работает без чекбокса')
  //     const findedItem = props.allMovies.filter(item => {
  //       // const findedItem = findedMovies.filter(item => {

  //       const filmName = item.nameRU + " " + item.nameEN;
  //       if (filmName.toLowerCase().includes(inputValue)) {
  //         return item
  //       }
  //     }
  //     );
  //     // findedItem;
  //     return setFindedMovies(findedItem);

  //   }

  // }

  // function isCheckboxActive(checkboxState) {
  //   setIsShort(checkboxState)
  // }




  return (
    <div className="movies" >
      <SearchForm
        // getAllMovies={props.getAllMovies}
        filter={handleInputFilter}
        // checkboxState={isCheckboxActive} 
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
        // setFindedMovies={setFindedMovies}
        // isShort={isShort}
        />}
    </div>
  )
}