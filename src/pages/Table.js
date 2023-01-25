import styles from './Table.module.css'
import {useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import { SeasonContext } from '../SeasonProvider/SeasonProvider';
import win from '../media/win.webp';
import lost from '../media/lost.webp';
import Statistics from './Statistics';

function Table() {    
    const apiKey = 'f8422dea87f3917ea0746070d48e623e';
    // const apiKey = 'e626274aa51b9e7d5d31ff1b317c2d01'
    // const apiKey = 'cecdb0e87445150864d079cd5c982aa5'

    const [,,currentSeason,] = useContext(SeasonContext)
    const [loading,setLoading] = useState(true)
    const [loadedData, setLoadedData] = useState([])
    const [trancated, setTrancated] = useState(true)

    function trancateHandler(){
      setTrancated(!trancated)
      console.log(trancated)
    }

    const rawData = {
      "get": "standings",
      "parameters": {
        "league": "39",
        "season": "2019"
      },
      "errors": [],
      "results": 1,
      "paging": {
        "current": 1,
        "total": 1
      },
      "response": [
        {
          "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2019,
            "standings": [
              [
                {
                  "rank": 1,
                  "team": {
                    "id": 40,
                    "name": "Liverpool",
                    "logo": "https://media.api-sports.io/football/teams/40.png"
                  },
                  "points": 70,
                  "goalsDiff": 41,
                  "group": "Premier League",
                  "form": "WWWWW",
                  "status": "same",
                  "description": "Promotion - Champions League (Group Stage)",
                  "all": {
                    "played": 24,
                    "win": 23,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 56,
                      "against": 15
                    }
                  },
                  "home": {
                    "played": 12,
                    "win": 12,
                    "draw": 0,
                    "lose": 0,
                    "goals": {
                      "for": 31,
                      "against": 9
                    }
                  },
                  "away": {
                    "played": 12,
                    "win": 11,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 25,
                      "against": 6
                    }
                  },
                  "update": "2020-01-29T00:00:00+00:00"
                },
                {
                  "rank": 1,
                  "team": {
                    "id": 40,
                    "name": "Liverpool",
                    "logo": "https://media.api-sports.io/football/teams/40.png"
                  },
                  "points": 70,
                  "goalsDiff": 41,
                  "group": "Premier League",
                  "form": "WWWWW",
                  "status": "same",
                  "description": "Promotion - Champions League (Group Stage)",
                  "all": {
                    "played": 24,
                    "win": 23,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 56,
                      "against": 15
                    }
                  },
                  "home": {
                    "played": 12,
                    "win": 12,
                    "draw": 0,
                    "lose": 0,
                    "goals": {
                      "for": 31,
                      "against": 9
                    }
                  },
                  "away": {
                    "played": 12,
                    "win": 11,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 25,
                      "against": 6
                    }
                  },
                  "update": "2020-01-29T00:00:00+00:00"
                },
                {
                  "rank": 1,
                  "team": {
                    "id": 40,
                    "name": "Liverpool",
                    "logo": "https://media.api-sports.io/football/teams/40.png"
                  },
                  "points": 70,
                  "goalsDiff": 41,
                  "group": "Premier League",
                  "form": "WWWWW",
                  "status": "same",
                  "description": "Promotion - Champions League (Group Stage)",
                  "all": {
                    "played": 24,
                    "win": 23,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 56,
                      "against": 15
                    }
                  },
                  "home": {
                    "played": 12,
                    "win": 12,
                    "draw": 0,
                    "lose": 0,
                    "goals": {
                      "for": 31,
                      "against": 9
                    }
                  },
                  "away": {
                    "played": 12,
                    "win": 11,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 25,
                      "against": 6
                    }
                  },
                  "update": "2020-01-29T00:00:00+00:00"
                },
                {
                  "rank": 1,
                  "team": {
                    "id": 40,
                    "name": "Liverpool",
                    "logo": "https://media.api-sports.io/football/teams/40.png"
                  },
                  "points": 70,
                  "goalsDiff": 41,
                  "group": "Premier League",
                  "form": "WWWWW",
                  "status": "same",
                  "description": "Promotion - Champions League (Group Stage)",
                  "all": {
                    "played": 24,
                    "win": 23,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 56,
                      "against": 15
                    }
                  },
                  "home": {
                    "played": 12,
                    "win": 12,
                    "draw": 0,
                    "lose": 0,
                    "goals": {
                      "for": 31,
                      "against": 9
                    }
                  },
                  "away": {
                    "played": 12,
                    "win": 11,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 25,
                      "against": 6
                    }
                  },
                  "update": "2020-01-29T00:00:00+00:00"
                },
                {
                  "rank": 1,
                  "team": {
                    "id": 40,
                    "name": "Liverpool",
                    "logo": "https://media.api-sports.io/football/teams/40.png"
                  },
                  "points": 70,
                  "goalsDiff": 41,
                  "group": "Premier League",
                  "form": "WWWWW",
                  "status": "same",
                  "description": "Promotion - Champions League (Group Stage)",
                  "all": {
                    "played": 24,
                    "win": 23,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 56,
                      "against": 15
                    }
                  },
                  "home": {
                    "played": 12,
                    "win": 12,
                    "draw": 0,
                    "lose": 0,
                    "goals": {
                      "for": 31,
                      "against": 9
                    }
                  },
                  "away": {
                    "played": 12,
                    "win": 11,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 25,
                      "against": 6
                    }
                  },
                  "update": "2020-01-29T00:00:00+00:00"
                },
                {
                  "rank": 1,
                  "team": {
                    "id": 40,
                    "name": "Liverpool",
                    "logo": "https://media.api-sports.io/football/teams/40.png"
                  },
                  "points": 70,
                  "goalsDiff": 41,
                  "group": "Premier League",
                  "form": "WWWWW",
                  "status": "same",
                  "description": "Promotion - Champions League (Group Stage)",
                  "all": {
                    "played": 24,
                    "win": 23,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 56,
                      "against": 15
                    }
                  },
                  "home": {
                    "played": 12,
                    "win": 12,
                    "draw": 0,
                    "lose": 0,
                    "goals": {
                      "for": 31,
                      "against": 9
                    }
                  },
                  "away": {
                    "played": 12,
                    "win": 11,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 25,
                      "against": 6
                    }
                  },
                  "update": "2020-01-29T00:00:00+00:00"
                },
                {
                  "rank": 1,
                  "team": {
                    "id": 40,
                    "name": "Liverpool",
                    "logo": "https://media.api-sports.io/football/teams/40.png"
                  },
                  "points": 70,
                  "goalsDiff": 41,
                  "group": "Premier League",
                  "form": "WWWWW",
                  "status": "same",
                  "description": "Promotion - Champions League (Group Stage)",
                  "all": {
                    "played": 24,
                    "win": 23,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 56,
                      "against": 15
                    }
                  },
                  "home": {
                    "played": 12,
                    "win": 12,
                    "draw": 0,
                    "lose": 0,
                    "goals": {
                      "for": 31,
                      "against": 9
                    }
                  },
                  "away": {
                    "played": 12,
                    "win": 11,
                    "draw": 1,
                    "lose": 0,
                    "goals": {
                      "for": 25,
                      "against": 6
                    }
                  },
                  "update": "2020-01-29T00:00:00+00:00"
                },
              ]
            ]
          }
        }
      ]
    }

    async function getSeason(){
      const res = await fetch(
        'https://v3.football.api-sports.io/standings?league=39&season='+String(currentSeason),
        {
            method: "GET",        
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": apiKey
            },
      })

      const data = await res.json()
      const response = await data.response
      // return response
      return rawData.response
    }    
    
    useEffect(()=>{
      if(!currentSeason){
        console.log("Getting standings...")
        getSeason().then(
        response=>{
          setLoadedData(response)
          setLoading(false)
          console.log("Fetched data...")
          console.log(loadedData)
        }
      )
      }
    },[currentSeason])      

    const standings = loadedData    

    return (
        loading ? <div className={styles.loading}>Loading...</div>:
        <div>
            {
              standings.map((data,index)=>{
                const teams = (data.league.standings);  
                return (
                  <div key={index} className={styles.tableDiv}>
                    <table>
                      <tr>
                        <th>Team</th>
                        <th>PTS</th>
                        <th>P</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>Form</th>
                      </tr>    
                        {
                        teams.map(team=>{  
                          const trancatedTeams = team.slice(0,3)
                                                   
                          return (                       
                            (trancated?trancatedTeams:team).map((team,index)=>{
                              return (
                              <tr key={index}>
                                <td className={styles.teamName}>
                                  <div>
                                    <article className={styles.teamRank}>{team.rank}</article>
                                    <img src={team.team.logo} alt={team.team.name} />
                                    <Link to='/team-staticstics'>{team.team.name}</Link>                                     
                                  </div>                                  
                                </td>
                                <td>{team.points}</td>
                                <td>{team.all.played}</td>
                                <td>{team.all.win}</td>
                                <td>{team.all.draw}</td>
                                <td>{team.all.lose}</td>
                                <td>{team.all.goals.for}</td>
                                <td>{team.all.goals.against}</td>
                                <td>{team.goalsDiff}</td>  
                                <td className={styles.form}>                            
                                {
                                  (team.form.split('')).map((form)=>{
                                    if (form==='W'){
                                      return <div>
                                          <img className={styles.win} src={win} alt="Winning Icon" />
                                        </div>
                                    }

                                    else if (form==='D'){
                                      return <div>
                                          <img className={styles.win} src={win} alt="Winning Icon" />
                                        </div>
                                    }

                                    else if (form=='L'){
                                      return <div>
                                          <img className={styles.lost} src={lost} alt="Lost Icon" />
                                        </div>
                                    }
                                  })
                                }
                                </td>
                              </tr>
                              )
                            })
                          )
                        })                                                                 
                      }                                        
                    </table>
                    {
                      trancated ? <button onClick={trancateHandler}>More</button> : 
                      <button onClick={trancateHandler}>Less</button>
                    }
                    <Statistics apiKey={apiKey} season={currentSeason}/>
                  </div>
                  )
              })
            }
        </div>
    )
}

export default Table;
