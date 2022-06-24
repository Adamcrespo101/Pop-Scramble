import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



function Register({username, setUsername, password, setPassword}){

  const [errors, setErrors] = useState([])

    let navigate = useNavigate()
    
    function handleName(e){
        setUsername(e.target.value)
    }

    function handlePass(e){
        setPassword(e.target.value)
    }


    function register(e){
        e.preventDefault()
        let user = {
            username: username,
            password: password,
            chances: 3
        }
        fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then((res) => {
            if (res.ok) {
              res.json().then((user) => {
                console.log(user)
               // setCurrentUser(user);
                navigate('/login')
              });
            } else {
              res.json().then((errors) => {
                setErrors(errors);
              });
            }
          });
    }
    console.log(username)
    console.log(password)

    return(
        <>
        <div className="register">
            <form className="register-form" onSubmit={register}>
                <h2>Sign Up</h2>
                <label for="username" id="username">Username: </label>
                <input type="text" style={{background: 'rgba(250, 250, 250, 0.171)'}} name="username" onChange={handleName} value={username} required/>
                <br></br>
                <label for="password" id="password" style={{marginTop: "5%"}}>Password: </label>
                <input type="password" style={{background: 'rgba(250, 250, 250, 0.171)'}} name="password" onChange={handlePass} value={password} required/>
                <br></br>
                <label for="password-confirmation" style={{marginTop: "5%" }}>Confirm Password: </label>
                <input type="password" style={{background: 'rgba(250, 250, 250, 0.171)'}} required/>
                <br></br>
                <button type="submit" style={{border: 'none', background: "rgba(250, 250, 250, 0.171)", marginLeft: "33%",marginTop: "5%", marginBottom: "5%"}}>Register</button>
                <br></br>
           </form>
        </div>
        <>
           <p className='errors'>{errors.exception.slice(50, errors.exception.length - 1)}</p>
        </>
        </>
    )
}

export default Register;