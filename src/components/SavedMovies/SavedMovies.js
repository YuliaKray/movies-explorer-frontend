import "./SavedMovies.css"
import { SearchForm } from "../SearchForm/SearchForm"
// import Preloader from "../Preloader/Preloader"
import { MoviesCardList } from "../MoviesCardList/MoviesCardList"

export function SavedMovies() {
  return (
    <div className="movies saved-movies" >
      <SearchForm />
      {/* <Preloader/> */}
      <MoviesCardList 
        isPathSavedMovies={true} 
      />
    </div>
  )
}