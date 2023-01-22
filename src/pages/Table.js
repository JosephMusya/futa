import styles from './Table.module.css'
function Table(props) {
    const apiKey = '89a5bb67ca02563cd394a66791f47168';
    // fetch(
    //     'https://v3.football.api-sports.io/standings?league=39&season='+props.season,
    //     {
    //         method: "GET",        
    //         headers: {
    //             "x-rapidapi-host": "v3.football.api-sports.io",
    //             "x-rapidapi-key": apiKey
    //         },
    // })
    // .then(res=>res.text())
    // .then(results=>console.log(JSON.parse(results)))
    // .catch(error=>console.error(error))

    const data = {
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
                }
              ]
            ]
          }
        }
      ]
    }

    const standings = data.response


    return (
        <div>
            {
              standings.map((data)=>{
                const teams = (data.league.standings)
                console.log(teams)
                return (
                  <div className={styles.tableDiv}>
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
                          return (
                            team.map(team=>{
                              return (
                              <tr>
                                <td className={styles.teamName}>
                                  <div>
                                    <img src={team.team.logo} alt={team.team.name} />
                                    {team.team.name} 
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
                                <td className={styles.teamForm}>{team.form}</td>
                              </tr>
                              )
                            })
                          )
                        })                                         
                        
                        }                                        
                    </table>
                  </div>
                  )
              })
            }
        </div>
    )
}

export default Table;
