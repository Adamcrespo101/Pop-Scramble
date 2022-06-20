import { useNavigate } from 'react-router-dom'

function Login ({username, setUsername, password, setPassword,setCurrentUser, setIsAuthenticated, setErrors}){
 let navigate = useNavigate()
    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password
        }
        fetch(`/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
                setCurrentUser(user);
                setIsAuthenticated(true)
                navigate('/')
                console.log(user)
            });
          } else {
            res.json().then((errors) => {
              setErrors(errors);
            });
          }
        });
      };

    return(
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
    )
}

export default Login;