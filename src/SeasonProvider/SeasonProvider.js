import { useEffect,useState,createContext } from "react";

export const SeasonContext = createContext()

export const SeasonProvider = props => {
    const apiKey = '8608e2b7a0cdd28b652244462596a009';   
    // const apiKey= 'e626274aa51b9e7d5d31f317c2d01' 
    // const apiKey ='cecdb0e87445150864d079cd5c982aa5'
    const [eplData, setEplData] = useState([])
    const [currentSeason,setCurrentSeason] = useState()    
   
    async function getLeague(){        
        console.log("Loading season")
        const res = await fetch("https://v3.football.api-sports.io/leagues?id=39", {          
            method: "GET",        
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": apiKey
            },
        })

        const data = await res.json()
        const response = await data.response
        return response
    }

    useEffect(()=>{
        getLeague().then(response=>{
        setEplData(response)
        response.map(data=>{
            const seasons =data.seasons
            seasons.map(season=>{              
                if (season.current){
                  setCurrentSeason(season.year)
                  console.log(season.year)
                }
            })
        })
    })
    },[])
    

    return (
        <SeasonContext.Provider value={[eplData,setEplData,currentSeason,setCurrentSeason]}>
            {props.children}
        </SeasonContext.Provider>
    )
}
