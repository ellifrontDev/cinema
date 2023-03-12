import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Routes, Route} from 'react-router-dom'
import Popular from "./components/Popular";
import Header from "./components/Header";
import NowPlaying from "./components/NowPlaying";
import TopRated from "./components/TopRated";

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
            <Route path={'/Now playing'} element={<NowPlaying/>}/>
            <Route path={'/popular'} element={<Popular/>}/>
            <Route path={'/Top rated'} element={<TopRated/>}/>
        </Routes>

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