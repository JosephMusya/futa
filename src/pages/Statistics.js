import {useState,useEffect} from 'react';
import styles from './Statistics.module.css';
import ball from '../media/soccer-ball.webp';
function Statistics(props){
    const apiKey = props.apiKey
    const season = props.season
    const [loadedPlayers, setLoadedPlayers] = useState([])
    const rawData = {
  "get": "players/topscorers",
  "parameters": {
    "league": "61",
    "season": "2018"
  },
  "errors": [],
  "results": 20,
  "paging": {
    "current": 1,
    "total": 1
  },
  "response": [
    {
      "player": {
        "id": 278,
        "name": "K. Mbappé",
        "firstname": "Kylian",
        "lastname": "Mbappé Lottin",
        "age": 22,
        "birth": {
          "date": "1998-12-20",
          "place": "Paris",
          "country": "France"
        },
        "nationality": "France",
        "height": "178 cm",
        "weight": "73 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/278.png"
      },
      "statistics": [
        {
          "team": {
            "id": 85,
            "name": "Paris Saint Germain",
            "logo": "https://media.api-sports.io/football/teams/85.png"
          },
          "league": {
            "id": 61,
            "name": "Ligue 1",
            "country": "France",
            "logo": "https://media.api-sports.io/football/leagues/61.png",
            "flag": "https://media.api-sports.io/flags/fr.svg",
            "season": 2018
          },
          "games": {
            "appearences": 29,
            "lineups": 24,
            "minutes": 2340,
            "number": null,
            "position": "Attacker",
            "rating": "7.871428",
            "captain": false
          },
          "substitutes": {
            "in": 5,
            "out": 1,
            "bench": 5
          },
          "shots": {
            "total": 122,
            "on": 68
          },
          "goals": {
            "total": 33,
            "conceded": null,
            "assists": 7,
            "saves": 0
          },
          "passes": {
            "total": 591,
            "key": 48,
            "accuracy": 78
          },
          "tackles": {
            "total": 4,
            "blocks": 0,
            "interceptions": 4
          },
          "duels": {
            "total": 232,
            "won": 112
          },
          "dribbles": {
            "attempts": 115,
            "success": 64,
            "past": null
          },
          "fouls": {
            "drawn": 39,
            "committed": 19
          },
          "cards": {
            "yellow": 5,
            "yellowred": 0,
            "red": 1
          },
          "penalty": {
            "won": 3,
            "commited": null,
            "scored": 1,
            "missed": 0,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 3246,
        "name": "N. Pépé",
        "firstname": "Nicolas",
        "lastname": "Pépé",
        "age": 25,
        "birth": {
          "date": "1995-05-29",
          "place": "Mantes-la-Jolie",
          "country": "France"
        },
        "nationality": "Côte d'Ivoire",
        "height": "178 cm",
        "weight": "68 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/3246.png"
      },
      "statistics": [
        {
          "team": {
            "id": 79,
            "name": "Lille",
            "logo": "https://media.api-sports.io/football/teams/79.png"
          },
          "league": {
            "id": 61,
            "name": "Ligue 1",
            "country": "France",
            "logo": "https://media.api-sports.io/football/leagues/61.png",
            "flag": "https://media.api-sports.io/flags/fr.svg",
            "season": 2018
          },
          "games": {
            "appearences": 38,
            "lineups": 37,
            "minutes": 3332,
            "number": null,
            "position": "Attacker",
            "rating": "7.281578",
            "captain": false
          },
          "substitutes": {
            "in": 1,
            "out": 9,
            "bench": 1
          },
          "shots": {
            "total": 118,
            "on": 61
          },
          "goals": {
            "total": 22,
            "conceded": null,
            "assists": 11,
            "saves": 0
          },
          "passes": {
            "total": 946,
            "key": 70,
            "accuracy": 78
          },
          "tackles": {
            "total": 9,
            "blocks": 0,
            "interceptions": 12
          },
          "duels": {
            "total": 556,
            "won": 279
          },
          "dribbles": {
            "attempts": 182,
            "success": 102,
            "past": null
          },
          "fouls": {
            "drawn": 108,
            "committed": 24
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 5,
            "commited": null,
            "scored": 9,
            "missed": 1,
            "saved": null
          }
        }
      ]
    }
  ]
}
    const topScorers = rawData.response
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
            setLoadedPlayers(response)
            console.log("Fetched Players...")
            console.log(loadedPlayers)
        }
      )
    },[])

    return (
        <div className={styles.main}>
            <h3>{season} &nbsp; Top Scorers</h3>
            <div className={styles.topScorers}>
                {
                topScorers.map((player,index)=>{
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
