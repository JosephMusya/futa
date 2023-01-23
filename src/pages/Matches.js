import styles from './Matches.module.css'
// import Table from './Table';
import {useState,useContext} from 'react';
import { SeasonContext } from '../SeasonProvider/SeasonProvider';
function Matches(){
        const [eplData,,currentSeason,setCurrentSeason ] = useContext(SeasonContext)
        console.log(eplData)
        const rawData = {
            "get": "leagues",
            "parameters": {
            "id": "39"
            },
            "errors": [ ],
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
            "type": "League",
            "logo": "https://media.api-sports.io/football/leagues/2.png"
            },
            "country": {
            "name": "England",
            "code": "GB",
            "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "seasons": [
            {
            "year": 2010,
            "start": "2010-08-14",
            "end": "2011-05-17",
            "current": false,
            "coverage": {
            "fixtures": {
            "events": true,
            "lineups": true,
            "statistics_fixtures": false,
            "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": true,
            "predictions": true,
            "odds": false
            }
            },
            {
            "year": 2011,
            "start": "2011-08-13",
            "end": "2012-05-13",
            "current": false,
            "coverage": {
            "fixtures": {
            "events": true,
            "lineups": true,
            "statistics_fixtures": false,
            "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": true,
            "predictions": true,
            "odds": false
            }
            }
            ]
            }
            ]
            }        
        
        return (
                <div className={styles.main}>
                    {
                        eplData.map(epl=>{
                            return (
                                <div key={epl.country.name} className={styles.topDiv}>
                                    <div className={styles.epl}>
                                        <h1>{epl.league.name}</h1>
                                        <img src={epl.league.logo} alt={epl.league.name} />
                                        <article>Seasons available ({epl.seasons.length})</article>
                                        <select  name="season" id="season" >
                                            {
                                                (epl.seasons).map((season)=>{
                                                    return <option defaultValue={currentSeason} key={season.year} value={season.year} onChange={(e)=>setCurrentSeason(e.target.value)}>{season.year}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className={styles.country}>
                                        <h5>{epl.country.name}</h5>
                                        <img src={epl.country.flag} alt={epl.country.name} />
                                    </div>                                    
                                </div>
                            )
                        })                            
                    }                    

                </div>
        )
}

export default Matches;
