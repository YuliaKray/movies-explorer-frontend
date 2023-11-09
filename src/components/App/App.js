import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Profile } from "../Profile/Profile";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import React from "react";



function App() {

  return (
    <div className="App">
      {window.location.pathname === "/" && <Header backgroundColor={true}/>}
      {window.location.pathname === "/profile" && <Header />}
      {window.location.pathname === "/movies" && <Header />}
      {window.location.pathname === "/saved-movies" && <Header />}
      <main>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/signin" element={ <Login/>} />
        <Route path="/profile" element={ <Profile />} />
        <Route path="/movies" element={ <Movies />} />
        <Route path="/saved-movies" element={ <SavedMovies />} />
        <Route path="/" element={<Main />} />
      </Routes>
      </main>
      {window.location.pathname === "/" && <Footer />}
      {window.location.pathname === "/movies" && <Footer />}
      {window.location.pathname === "/saved-movies" && <Footer />}
    </div>
  );
}

export default App;
