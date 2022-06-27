import { useState, useEffect } from 'react'

function Leaderboards({currentUser}){
    const [userRankings, setUserRankings] = useState([])
    useEffect(() => {
        fetch('/users')
        .then(res => res.json())
        .then(data => setUserRankings(data))
       
      }, [currentUser])
  
    return(
        <div className="leaderboards">
            <h1 style={{margin: '0 auto', textAlign: 'center'}}>All time rankings</h1>
            <div className='rankings'>

                {userRankings.map((ranking) => {
                    return(

                    <div className="ranking-item">
                        
                            <ul>
                                <h3>{ranking.username}</h3>
                                 <h3>Total points: {ranking.score}</h3>
                            </ul>
                        
                    </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Leaderboards;