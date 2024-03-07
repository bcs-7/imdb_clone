import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css"
import "./index.css"
import Header from "./components/header/header";
import Home from "./components/home/home";
import Movielist from "./components/movielist/movielist";
import Movie from "./components/movie/movie";

function App(){
  return <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route index element = {<Home />}></Route>
        <Route path="/movie/:id" element = {<Movie />}></Route>
        <Route path="/movies/:type" element = {<Movielist />}></Route>
        <Route path="/*" element = {<h2>error</h2>}></Route>
      </Routes>
    </Router>
  </div>
}
export default App;