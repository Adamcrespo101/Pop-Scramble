


function Play(){


    const keyBoardTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keyBoardMiddle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const keyBoardBottom = ["Z", "X", "C", "V", "B", "N", "M"]

    function onPressBackspace() {
      //  myTextarea.value = myTextarea.value.substring(0, myTextarea.value.length - 1);
    }


    return(
        <div className="play">
            <h2 style={{marginLeft: "10%"}}>Welcome, User!</h2>
            <div className="game-board">
                <div className="scores">
                    <h3 style={{marginLeft: "5%"}}>Lifetime Score:</h3>
                    <h3 style={{marginLeft: "5%"}}>Current Score:</h3>
                </div>
                <div className="word">
                    
                        <h1 className="word-keys">A</h1>
                        <h1 className="word-keys">A</h1>
                        <h1 className="word-keys">A</h1>
                        <h1 className="word-keys">A</h1>
                    
                </div>
                <h2 className="user-input">Your Answer:</h2>
                <div className="user-answer">
                    <h1 className="user-input-keys">A</h1>
                    <h1 className="user-input-keys">A</h1>
                    <h1 className="user-input-keys">A</h1>
                    <h1 className="user-input-keys">A</h1>
                </div>
                <div className="keyboard">
                    <div className="top">
                    {keyBoardTop.map((key) => {
                        return(
                            <h2 className="key" value={key}>{key}</h2>
                            )
                        })}
                    </div>
                    <div className="mid">
                    {keyBoardMiddle.map((key) => {
                        return(
                            <h2 className="key" value={key}>{key}</h2>
                            )
                        })}
                    </div>
                    <div className="bottom">
                    {keyBoardBottom.map((key) => {
                        return(
                            <h2 className="key" value={key} >{key}</h2>
                            )
                        })}
                    </div>
                    <div className="backspace">
                            <h2 className="key">⬅</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Play;