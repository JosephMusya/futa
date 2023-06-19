import styles from './Table.module.css'
import {useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import { SeasonContext } from '../SeasonProvider/SeasonProvider';
import win from '../media/win.webp';
import lost from '../media/lost.webp';
import draw from '../media/draw.png';
import Statistics from './Statistics';

function Table() {    
    const apiKey = '8608e2b7a0cdd28b652244462596a009';
    // const apiKey = 'e626274aa51b9e7d5d31ff1b317c2d01'
    // const apiKey = 'cecdb0e87445150864d079cd5c982aa5'

    const [,,currentSeason,]= useContext(SeasonContext)
    const [loading,setLoading] = useState(true)
    const [loadedData, setLoadedData] = useState([])
    const [trancated, setTrancated] = useState(true)

    function trancateHandler(){
      setTrancated(!trancated)
      console.log(trancated)
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
      console.log(data)
      const response = await data.response
      console.log(response)
      return response
    }    
    
    useEffect(()=>{
      if(currentSeason){
        console.log("Getting standings...")
        getSeason().then(
        response=>{
          setLoadedData(response)
          setLoading(false)
          console.log("Fetched data...")
          console.log(response)
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
                          const trancatedTeams = team.slice(0,5)
                                                   
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
                                  team.form?((team.form).split('')).map((form)=>{
                                    if (form==='W'){
                                      return <div>
                                          <img className={styles.win} src={win} alt="Winning Icon" />
                                        </div>
                                    }

                                    else if (form==='D'){
                                      return <div>
                                          <img className={styles.win} src={draw} alt="Winning Icon" />
                                        </div>
                                    }

                                    else if (form=='L'){
                                      return <div>
                                          <img className={styles.lost} src={lost} alt="Lost Icon" />
                                        </div>
                                    }
                                  }):null
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
