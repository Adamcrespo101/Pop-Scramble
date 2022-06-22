import { useNavigate } from 'react-router-dom'


function Header({isAuthenticated, setCurrentUser, setIsAuthenticated}){
let navigate = useNavigate()
    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                  navigate('/login')
                }
                setCurrentUser(null)
                setIsAuthenticated(false)
            })
      }

    return (
        
        <div className="header">
            <a href="/" style={{color: 'rgb(0, 236, 205)'}} className="nav">Home</a>
            { !isAuthenticated ? 
            
            <a href="/login" style={{color: 'rgb(0, 236, 205)'}} id="login" className="nav">Login</a> 
            
            : 
            
            <a href="/login" style={{color: 'rgb(0, 236, 205)'}} id="login" className="nav" onClick={handleLogout}>Logout</a>

            }
            <a href="/play" style={{color: 'rgb(0, 236, 205)', marginLeft: "20%"}} className="nav" >{isAuthenticated ? "Play" : null }</a>
            <a href="/leaderboards" style={{color: 'rgb(0, 236, 205)'}} id="login" className="nav">Leaderboards</a> 
            <a href="/how_to_play" style={{color: 'rgb(0, 236, 205)'}} id="login" className="nav">How to play</a> 
        </div>
            
        
    )
}

export default Header;