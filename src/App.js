import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import MovieView from "./components/MovieView";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/SearchView";
import Action from "./components/action";
import Adventure from "./components/adventure";
import Family from "./components/family";
import Drama from "./components/drama";
import Crime from "./components/crime";
import Animation from "./components/animation";
import Documentary from "./components/documentary";
import Comedy from "./components/comedy";
import History from "./components/history";
import Fantasy from "./components/fantasy";
import Horror from "./components/horror";
import Music from "./components/music";
import Mystery from "./components/mystery";
import Romance from "./components/romance";
import SciFi from "./components/scifi";
import Thriller from "./components/thriller";
import War from "./components/war";
import Western from "./components/western";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [trendingResults, setTrendingResults] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=87872052d5a1309cb9f01b635a167d6b"
    )
      .then((response)=>response.json())
      .then((data)=>{
        setTrendingResults(data.results)
      })
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=87872052d5a1309cb9f01b635a167d6b&query=${searchText}&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home searchResults={trendingResults} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        ></Route>
        <Route path="/movies/:id" element={<MovieView />}></Route>
        <Route path="/action" element={<Action />}></Route>
        <Route path="/adventure" element={<Adventure />}></Route>
        <Route path="/family" element={<Family />}></Route>
        <Route path="/drama" element={<Drama />}></Route>
        <Route path="/crime" element={<Crime></Crime>}></Route>
        <Route path="/animation" element={<Animation />}></Route>
        <Route path="/documentary" element={<Documentary />}></Route>
        <Route path="/comedy" element={<Comedy />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/fantasy" element={<Fantasy />}></Route>
        <Route path="/horror" element={<Horror />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/mystery" element={<Mystery />}></Route>
        <Route path="/romance" element={<Romance />}></Route>
        <Route path="/scifi" element={<SciFi />}></Route>
        <Route path="/thriller" element={<Thriller />}></Route>
        <Route path="/war" element={<War />}></Route>
        <Route path="/western" element={<Western />}></Route>
      </Routes>
    </div>
  );
}

export default App;
