import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login ({username, setUsername, password, setPassword,setCurrentUser, setIsAuthenticated, setErrors, errors}){
  
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  

 let navigate = useNavigate()

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const player = {
            username: username,
            password: password
        }
        fetch(`/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(player),
        }).then((res) => {
          res.json().then((user) => {
              if (user.chances === 3) {
                setCurrentUser(user);
                setIsAuthenticated(true)
                navigate('/play')
                console.log(user)
              } else {
                  console.log(errors)
                  setErrors("Invalid Username or Password");
                  setCurrentUser(null);
                  setIsAuthenticated(false)
                  navigate('/login')
              }
            });
        });
      };

    return(
      <>
        <div>
            <h1 style={{textAlign: 'center'}}>Welcome to Pop Word!</h1>
        <div className="login">
           <form className="login-form" onSubmit={handleSubmit}>
                <label for="username" id="username">Username: </label>
                <input type="text" style={{background: 'rgba(250, 250, 250, 0.171)'}} onChange={handleUsername} value={username} required/>
                <br></br>
                <label for="password" id="password" >Password: </label>
                <input type="password" style={{marginTop: "5%", background: 'rgba(250, 250, 250, 0.171)'}} onChange={handlePassword} value={password}/>
                <br></br>
                <button type="submit" style={{border: 'none', background: "rgba(250, 250, 250, 0.171)", marginLeft: "33%",marginTop: "5%", marginBottom: "5%"}}>Login</button>
                <br></br>
                <a href="/register">Need an account? Click here to register!</a>
           </form>
        </div>
        </div>
        <>
        <p className='errors'>{errors}</p>
        </>
      </>
    )
}

export default Login;