

function Leaderboards({userRankings}){
    return(
        <div className="leaderboards">
            <h1 style={{margin: '0 auto', textAlign: 'center'}}>All time rankings</h1>
            <div className='rankings'>
                <div className="rankings-header" >
                <h2>Username</h2>
                <h2 style={{marginLeft: '160px'}}>Score</h2>
                </div>
                {userRankings?.map((ranking) => {
                    return(
                        
                        
                        
                        
                        <ol>
                        <li>
                        <div className="ranking-item">

                        <h3>{ranking?.username}</h3>
                        <h3 style={{marginLeft: '160px'}}>{ranking?.score}</h3>
                        
                        </div>
                        </li>
                        
                        </ol>
                        
                        
                        
                    )
                })}
            </div>
        </div>
    )
}

export default Leaderboards;