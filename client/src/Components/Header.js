


function Header(){
    return (
        
        <div className="header">
            <a href="/" style={{color: 'rgb(0, 236, 205)'}} className="nav">Home</a>
            <a href="/login" style={{color: 'rgb(0, 236, 205)'}} id="login" className="nav">Login</a>
            <a href="/play" style={{color: 'rgb(0, 236, 205)', marginLeft: "20%"}} className="nav" >Play</a>
        </div>
            
        
    )
}

export default Header;