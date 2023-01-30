import {useState,useEffect} from 'react';
import styles from './Statistics.module.css';
import ball from '../media/soccer-ball.webp';
function Statistics(props){
    const apiKey = props.apiKey
    const season = props.season
    const [loadedPlayers, setLoadedPlayers] = useState([])
   
    async function getStatistics(){
        const res = await fetch(
        'https://v3.football.api-sports.io/players/topscorers?season='+ String(season)+'&league=39',
        {
            method: "GET",        
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": apiKey
            },
        })

      const data = await res.json()
      const topScorers = await data.response
      return topScorers
    }   

    useEffect(()=>{
        getStatistics().then(
        response=>{
          setLoadedPlayers(response.slice(0,3))
          console.log(loadedPlayers)
        }
      )
    },[])

    return (
        <div className={styles.main}>
            <h3>{season} &nbsp; Top Scorers</h3>
            <div className={styles.topScorers}>
                {
                loadedPlayers.map((player,index)=>{
                    return (
                        <div className={styles.main}>
                            <div className={styles.player} key={index}>
                                <div className={styles.head}>
                                    <p>{player.player.name}</p>
                                    <p>({player.player.nationality})</p>
                                </div>
                                <div className={styles.playerInfo}>
                                    <div>
                                        <img src={player.player.photo} alt="player.player.name" />                                
                                    </div>
                                    <div>
                                        {
                                    (player.statistics).map(stats=>{
                                        return (
                                            <div className=''>
                                                {/* <p>Team {stats.team.name}</p> */}
                                                <div className={styles.teamLogo}>
                                                    <img src={stats.team.logo} alt={stats.team.name} />
                                                </div>
                                                
                                                {/* <div>
                                                    <img src={stats.team.logo} alt={stats.team.name} />
                                                </div>                                                 */}
                                                <div className={styles.playerMenu}>
                                                    <div className={styles.soccerBall}>
                                                        <img src={ball} alt="Soccer Ball" />                                                        
                                                    </div>   
                                                    <div>
                                                        <p>{stats.goals.total}</p>
                                                    </div>                                                 
                                                </div>
                                                <div className={styles.playerMenu}>
                                                    <p>Rating {parseFloat(stats.games.rating).toFixed(1)}</p>   
                                                </div>                                                                                                                                             
                                            </div>
                                        )
                                    })
                                } 
                                    </div>
                                </div>                                                               
                            </div>
                        </div>                        
                    )
                })
            }
            </div>            
            <br /><br />
        </div>
    )
}

export default Statistics;
