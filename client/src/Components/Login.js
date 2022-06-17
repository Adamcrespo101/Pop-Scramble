

function Login (){
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>Welcome to Pop Word!</h1>
        <div className="login">
           <form className="login-form">
                <label for="username" id="username">Username: </label>
                <input type="text" />
                <br></br>
                <label for="password" id="password" >Password: </label>
                <input type="password" style={{marginTop: "5%"}}/>
                <br></br>
                <button type="submit" style={{border: 'none', background: "rgba(250, 250, 250, 0.171)", marginLeft: "30%",marginTop: "5%", marginBottom: "5%"}}>Login</button>
                <br></br>
                <a href="/">Need an account? Click here to register!</a>
           </form>
        </div>
        </div>
    )
}

export default Login;