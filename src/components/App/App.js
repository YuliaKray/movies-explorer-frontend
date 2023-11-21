import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Profile } from "../Profile/Profile";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as mainApi from "../../utils/MainApi.js"
import { handleErrors } from "../../utils/errors.js";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute.js";
import * as moviesApi from "../../utils/MoviesApi.js";
import React from "react";



function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isPreloader, setIsPreloader] = React.useState(false)
  const [allMovies, setAllMovies] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsLoading(true)
    checkToken();
    mainApi.getMe().then((user) => {
      setCurrentUser(user);
      setLoggedIn(true);
      setIsLoading(false)
    }).catch((err) => {
      setIsLoading(false);
    })
  }, [])

  // React.useEffect(() => {
  //   const moviesFromStorage = localStorage.getItem('movies');

  //   if (moviesFromStorage) {
  //   moviesApi.getAllMovies()
  //   .then((movies) => {
  //     setAllMovies(movies)
  //     // console.log(movies)
  //   })
  //   .catch((err) => {console.log(err)})
  // }
  // }, [])

  function getAllMovies() {
    const moviesFromStorage = localStorage.getItem('movies');
    if (!moviesFromStorage) {
      setIsPreloader(true);
      moviesApi.getAllMovies()
        .then((movies) => {
          setAllMovies(movies)
          // console.log(movies)
          setIsPreloader(false)
        })
        .catch((err) => {
          console.log(err)
          setIsPreloader(false)
        })
    } else {
      setAllMovies(JSON.parse(moviesFromStorage))
      // setIsLoading(false)
    }
  }

  function handleSaveMovie(film) {
    mainApi.saveFilm(film)
      //.then((film) => {})
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateProfile(userInfo) {
    mainApi.editProfile(userInfo).then((res) => {
      setCurrentUser(res);
      setErrMessage('');
      setSuccessMessage('Данные успешно обновлены.');
    })
      .catch((err) => {
        const wedplace = "обновлении профиля";
        setErrMessage(handleErrors(err, wedplace));
        setSuccessMessage('');
        console.log(err);
      })
  }

  function handleRegister({ name, email, password }) {
    return mainApi.register(name, email, password).then((res) => {
      setLoggedIn(true);
      setCurrentUser(res);
      navigate('/movies', { replace: true });
    }).catch((err) => {
      const wedplace = "регистрации пользователя";
      setErrMessage(handleErrors(err, wedplace));

      console.log(err)
    })
  }

  function handleLogin({ email, password }) {
    return mainApi.login(email, password).then((data) => {
      if (data.token) {
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      };
      mainApi.getMe().then((user) => {
        setCurrentUser(user);

      })
        .catch((err) => {
          console.log(err)
          setErrMessage(handleErrors(err));
        })
    }).catch((err) => {
      const wedplace = "авторизации";
      setErrMessage(handleErrors(err, wedplace));
      console.log(err)
    })
  }

  function checkToken() {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.checkToken(token).then((res) => {
        if (res) {
          setLoggedIn(true);
          setIsLoading(false);
        }

      }).catch((err) => {
        setErrMessage(handleErrors(err, ''));
        console.log(err);
        setIsLoading(false);
      })
    }
  }

  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    localStorage.removeItem('searchMovies');
  }

  function handleTokenCheck() {
    return (<Main />)
  }


  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        {window.location.pathname === "/" && <Header backgroundColor={true} loggedIn={loggedIn} />}
        {window.location.pathname === "/profile" && <Header loggedIn={loggedIn} />}
        {window.location.pathname === "/movies" && <Header loggedIn={loggedIn} />}
        {window.location.pathname === "/saved-movies" && <Header loggedIn={loggedIn} />}
        <main>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/signup" element={<Register
              onRegister={handleRegister}
              showError={errMessage} />} />
            <Route path="/signin" element={<Login
              onLogin={handleLogin}
              showError={errMessage} />} />
            <Route path="/" element={<Main />} />
            {isLoading ? handleTokenCheck : <Route path="/profile" element={<ProtectedRoute
              component={Profile}
              loggedIn={loggedIn}
              userName={currentUser.name}
              userEmail={currentUser.email}
              onEditProfile={handleUpdateProfile}
              onSignOut={signOut}
              showError={errMessage}
              showSuccess={successMessage}
            />} />}
            {isLoading ? handleTokenCheck : <Route path="/movies" element={<ProtectedRoute
              component={Movies}
              loggedIn={loggedIn}
              allMovies={allMovies}
              getAllMovies={getAllMovies}
              isPreloader={isPreloader}
              saveFilm={handleSaveMovie}
            />} />}
            {isLoading ? handleTokenCheck : <Route path="/saved-movies" element={<ProtectedRoute
              component={SavedMovies}
              loggedIn={loggedIn} />} />}

          </Routes>
        </main>
        {window.location.pathname === "/" && <Footer />}
        {window.location.pathname === "/movies" && <Footer />}
        {window.location.pathname === "/saved-movies" && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
