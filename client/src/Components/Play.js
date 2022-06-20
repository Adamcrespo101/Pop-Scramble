import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Play({words, setWords, currentUser}){
let navigate = useNavigate()
    const [input, setInput] = useState([])
    const [random, setRandom] = useState([])
    const [chances, setChances] = useState(3)
    const randomWord = Math.floor(Math.random() * words.length)
    
    useEffect(() => {
        fetch(`/words/${randomWord}`)
        .then(res => res.json())
        .then(data => setRandom(data))
    }, [])

    useEffect(() => {
        if (chances === 0) {
            navigate('/YouLost')
        }
    }, [])
    const [currentHint, setCurrentHint] = useState('')

    const keyBoardTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keyBoardMiddle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const keyBoardBottom = ["Z", "X", "C", "V", "B", "N", "M"]

    function onPressBackspace() {
      setInput('')
    }
    function addUserInput(e){
        setInput(input + e.target.id)
    }
    console.log(random)
    const letters = random?.answer?.split('')
    
    function submitAnswer(e){
        e.preventDefault()
        let score = chances === 3 ? 1000 : chances === 2 ? 750 : chances === 1 ? 500 : chances > 0 ? 250 : navigate('/YouLost') 
        if (input !== random?.answer){
            setChances(chances => chances - 1)
            setInput('')
        } else {
            fetch(`/users/${currentUser.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(score)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            navigate('/YouWin')
        }
    }

    console.log(currentHint)

    return(
        <div className="play">
            <h2 style={{marginLeft: "10%"}}>Welcome, {currentUser?.username}!</h2>
            <div className="game-board">
                <div className="scores">
                    <h3 style={{marginLeft: "5%"}}>Lifetime Score: {currentUser?.score > 0 ? currentUser?.score : 0}</h3>
                    <h3 style={{marginLeft: "5%"}}>Chances: {chances}</h3>
                </div>
                
                <div className="word">
                     
                {letters?.map((letter) => {
                    return(
                        <h1 className="word-keys" key={letter.id}></h1>
                    )
                })}
                    
                </div>
                <div className='hint'>
                    Hint: {chances === 3 ? random?.initial_hint : chances === 2 ? random?.hint1 : chances === 1 ? random?.hint2 : random?.hint3}
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