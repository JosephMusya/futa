import styles from './Matches.module.css'
import {useState,useContext} from 'react';
import { SeasonContext } from '../SeasonProvider/SeasonProvider';
function Matches(){
        const [eplData,,currentSeason,setCurrentSeason ] = useContext(SeasonContext)
        
        // console.log(eplData)  
        
        return (
                <div className={styles.main}>
                    {
                        eplData.map(epl=>{
                            console.log(epl)
                            return (
                                <div key={epl.country.name} className={styles.topDiv}>
                                    <div className={styles.epl}>
                                        <h2>{epl.league.name}</h2>
                                        <img src={epl.league.logo} alt={epl.league.name} />
                                        <article>Seasons available ({epl.seasons.length})</article>
                                        <select  name="season" id="season" onChange={(e)=>setCurrentSeason(e.target.value)}>
                                            {
                                                (epl.seasons).map((season)=>{
                                                    return <option defaultValue={currentSeason} key={season.year} value={season.year}>{season.year}</option>
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
