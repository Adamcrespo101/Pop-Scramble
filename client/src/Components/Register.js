



function Register(){
    return(
        <div className="register">
            <form className="register-form">
                <h2>Sign Up</h2>
                <label for="username" id="username">Username: </label>
                <input type="text" style={{background: 'rgba(250, 250, 250, 0.171)'}}/>
                <br></br>
                <label for="password" id="password" style={{marginTop: "5%"}}>Password: </label>
                <input type="password" style={{background: 'rgba(250, 250, 250, 0.171)'}}/>
                <br></br>
                <label for="password-confirmation" style={{marginTop: "5%" }}>Confirm Password: </label>
                <input type="password" style={{background: 'rgba(250, 250, 250, 0.171)'}}/>
                <br></br>
                <button type="submit" style={{border: 'none', background: "rgba(250, 250, 250, 0.171)", marginLeft: "33%",marginTop: "5%", marginBottom: "5%"}}>Register</button>
                <br></br>
           </form>
        </div>
    )
}

export default Register;