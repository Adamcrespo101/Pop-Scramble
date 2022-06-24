import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Play({currentUser, music}){
let navigate = useNavigate()
    const [input, setInput] = useState([])
    const [words, setWords] = useState([])
   const [random, setRandom] = useState({})
    const [chances, setChances] = useState(3)
    const [streak, setStreak] = useState(0)
    const [response, setResponse] = useState('')
    const [gameClock, setGameClock] = useState(60)
    const [audio] = useState(new Audio(music));
    const [playing, setPlaying] = useState(false);
    useEffect(() => {
        fetch('/words')
        .then(res => res.json())
        .then(data => setWords(data))
      },[])
    
       console.log(words)
    useEffect(() => {
        setRandom(words[Math.floor(Math.random() * words.length)])
    }, [words])

    useEffect(() => {
        playing ? audio.play() : audio.pause()
      }, [playing])

    useEffect(() => {
        const gameTimer = setTimeout(() => {
            if (gameClock > 0 ){
                setGameClock(gameClock => gameClock - 1)
            } else if (gameClock === 0 && chances > 0){
                setChances(chances => chances - 1)
                setGameClock(60)
            } else if (chances == 0 && gameClock === 0) {
                navigate('/YouLost')
            }
           
        }, 1000)
        return () => clearTimeout(gameTimer)
    }, )


    useEffect(() => {
  const timer = setTimeout(() => {
    return setResponse('')
  }, 3000);
  return () => clearTimeout(timer);
}, [submitAnswer]);


    useEffect(() => {
        if (chances < 0){
            navigate('/YouLost')
        }
    }, [chances])

    
    const keyBoardTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keyBoardMiddle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const keyBoardBottom = ["Z", "X", "C", "V", "B", "N", "M"]

    function onPressBackspace() {
      setInput('')
    }
    function addUserInput(e){
        setInput(input + e.target.id)
    }
    
    
    function submitAnswer(e){
        e.preventDefault()
        let score = gameClock > 45 && chances === 3 ? 1000 : gameClock > 30 && chances > 1 ? 750 : gameClock > 15 && chances > 0 ? 500 : gameClock > 0 && chances === 0 ? 250 : navigate('/YouLost') 
        if (input !== random?.answer){
            setChances(chances => chances - 1)
            setInput('')
            setStreak(0)
            setResponse("Incorrect answer try again!")
        } else if(chances < 0){
            navigate('/YouLost')
        } else {
            fetch(`/scores/${currentUser.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    score: currentUser.score += score,
                    streak: streak > currentUser.streak ? streak : currentUser.streak
                })
            })
            .then(res => res.json())
            .then(data => console.log('nice'))
            setStreak(streak => streak + 1)
            setRandom(words[Math.floor(Math.random() * words.length)])
            setInput('')
            setResponse("That was the correct answer, well done!")
            setGameClock(60)
        }
    }

    
    return(
        <div className="play">
            <h2 style={{marginLeft: "10%"}}>Welcome, {currentUser?.username}!</h2>
            <div className="game-board">
                <div className="scores">
                    <h3 style={{marginLeft: "5%"}}>Lifetime Score: {currentUser?.score}</h3>
                    <h3 style={{marginLeft: "5%"}}>Chances: {chances}</h3>
                    <h3 style={{marginLeft: "5%"}}>Streak: {streak}</h3>
                    <h3 style={{marginLeft: "5%"}}>Longest Streak: {currentUser?.streak}</h3>
                    <h3 style={{marginLeft: "5%"}}>Time Remaining: {gameClock}</h3>
                </div>
                
                <div className="word">
                     
                {random?.scrambled?.split('').map((letter) => {
                    return(
                        <h2 className="word-keys" key={letter.id}>{letter}</h2>
                    )
                })}
                    
                </div>
                <div className='hint'>
                    Hint: {chances === 3 ? random?.initial_hint : chances === 2 ? random?.hint1 : chances === 1 ? random?.hint2 : random?.hint3}
                    <br></br>
                    <p style={{color: "white"}}>{response}</p>
                </div>
                <div className="user-answer">
                <form onSubmit={submitAnswer}>
                
                    <input type="text" style={{border: 'none', background: "rgba(250, 250, 250, 0.171)", cursor: 'default', height: "50px", width: "200px"}} value={input} readOnly/>
                
                <button type="submit" style={{border: 'none', background: "rgba(250, 250, 250, 0.171)", height: "50px", width: "200px", marginLeft: '20px'}}>Check your Answer!</button>
                </form>
                </div>
                <div className="keyboard">
                    <div className="top" >
                    {keyBoardTop.map((key) => {
                        return(
                            <h2 className="key" onClick={addUserInput} value={key} id={key}>{key}</h2>
                            )
                        })}
                    </div>
                    <div className="mid">
                    {keyBoardMiddle.map((key) => {
                        return(
                            <h2 className="key" onClick={addUserInput} value={key} id={key}>{key}</h2>
                            )
                        })}
                    </div>
                    <div className="bottom">
                    {keyBoardBottom.map((key) => {
                        return(
                            <h2 className="key" onClick={addUserInput} value={key} id={key}>{key}</h2>
                            )
                        })}
                    </div>
                    <div className="backspace">
                            <h2 className="key" onClick={onPressBackspace}>⬅</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Play;