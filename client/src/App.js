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

    useEffect(() => {
      fetch('/words')
      .then(res => res.json())
      .then(data => setWords(data))
    },[])

    console.log(words)

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/play" element={<Play words={words} setWords={setWords}/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
