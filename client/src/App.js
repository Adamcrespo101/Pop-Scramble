import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home'
import Register from './Components/Register';
import Play from './Components/Play';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'


function App() {

  const [words, setWords] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  
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
      fetch('/words')
      .then(res => res.json())
      .then(data => setWords(data))
    },[])

    

  return (
    <div className="App">
      <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} setCurrentUser={setCurrentUser} setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} setCurrentUser={setCurrentUser} setIsAuthenticated={setIsAuthenticated} setErrors={setErrors}/>} />
        <Route path="/register" element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>} />
        <Route path="/play" element={<Play words={words} setWords={setWords}/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
