import styles from './Matches.module.css'
import Table from './Table';
import {useState} from 'react';
    function Matches(){
        // const apiKey = '89a5bb67ca02563cd394a66791f47168';
        // const leaqueId = 39;
        const [season,setSeason] = useState()

        function seasonHandler(event){  
            console.log("Selected season")
            // console.log(event.target)
            // setSeason(event.target.value)

        }

        const res = {
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
        // console.log(data.response)

        const eplData = res.response
   
        
        // fetch("https://v3.football.api-sports.io/leagues?id=39", {          
        //     method: "GET",        
        //     headers: {
        //         "x-rapidapi-host": "v3.football.api-sports.io",
        //         "x-rapidapi-key": apiKey
        //     },

        // })
        // .then(response => response.text())
        // .then(result => {
        //     console.log("Got Something...")
        //     console.log(JSON.parse(result))
        // })
        // .catch(error => console.error('error', error));
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
                                        <select name="season" id="season" onChange={(e)=>setSeason(e.target.value)}>
                                            {
                                                (epl.seasons).map((season)=>{
                                                    return <option key={season.year} value={season.year}>{season.year}</option>
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
                    <Table season={season}/>
                </div>
        )
}

export default Matches;
