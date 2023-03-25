import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Routes, Route} from 'react-router-dom'
import Popular from "./components/Popular";
import Header from "./components/Header";
import DetailPage from "./components/detail/DetailPage";
import MovieActors from "./components/detail/Actors/MovieActors";
import Footer from "./components/detail/Footer";
import SearchResult from "./components/SearchResult";

function App() {
  // const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState([])
    console.log(users)

  useEffect(()=>{
      axios(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
              setUsers(res.data)
          })
    // alert('useEffect сработал')
  },[])


  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'}/>
            <Route path={'/popular'} element={<Popular/>}/>
            <Route path={'/movie/:id'} element={<DetailPage/>}/>
            <Route path={'/movie/movie-results/:movieId'} element={<MovieActors/>}/>
            <Route path={'/movie/movie-results/:movieName'} element={<SearchResult/>}/>
        </Routes>
        <Footer/>
        {/*{*/}
        {/*    users.map(el => (*/}
        {/*        <div>*/}
        {/*            <h1>{el.name}</h1>*/}
        {/*            <p>{el.email}</p>*/}
        {/*        </div>*/}
        {/*    ))*/}
        {/*}*/}

      {/*<h1>{counter}</h1>*/}
      {/*<button onClick={()=> setCounter(counter + 1)}>inc</button>*/}

    </div>
  );
}

export default App;