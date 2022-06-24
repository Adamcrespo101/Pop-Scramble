import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home'
import Register from './Components/Register';
import Play from './Components/Play';
import YouLost from './Components/YouLost';
import YouWin from './Components/YouWin';
import HowTo from './Components/HowTo';
import Leaderboards from './Components/Leaderboards';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'
import music from './audio/lofi-study-112191.mp3'

function App() {

  // const [words, setWords] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const [userRankings, setUserRankings] = useState([])
  

  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setCurrentUser(user);
          console.log(user)
        });
      }
    });
  }, []);
  
    useEffect(() => {
      fetch('/users')
      .then(res => res.json())
      .then(data => setUserRankings(data))
      console.log(userRankings)
    }, [])

   

  return (
    <div className="App">
      <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} setCurrentUser={setCurrentUser} setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login errors={errors} username={username} setUsername={setUsername} password={password} setPassword={setPassword} setCurrentUser={setCurrentUser} setIsAuthenticated={setIsAuthenticated} setErrors={setErrors}/>} />
        <Route path="/register" element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>} />
        <Route path="/play" element={<Play  currentUser={currentUser} music={music}/>} />
        <Route path="/YouLost" element={<YouLost />} />
        <Route path="/YouWin" element={<YouWin />} />
        <Route path="/leaderboards" element={<Leaderboards userRankings={userRankings}/>} />
        <Route path="/how_to_play" element={<HowTo />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
