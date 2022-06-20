import { useNavigate } from 'react-router-dom'

function YouLost() {
    return(
      <div className="sorry">
        <h1>You used up all of your chances! You can give it another shot by clicking <a href="/play">here!</a></h1>
        <br></br>
        <h1>Or if your done playing click <a href='/'>here</a> to return home.</h1>
      </div>  
    )
}

export default YouLost;