import { useEffect,useState,createContext } from "react";

export const SeasonContext = createContext()

export const SeasonProvider = props => {
    const apiKey = '89a5bb67ca02563cd394a66791f47168';    
    const [eplData, setEplData] = useState([])
    const [currentSeason,setCurrentSeason] = useState(2022)

    async function getLeague(){
        const res = await fetch("https://v3.football.api-sports.io/leagues?id=39", {          
            method: "GET",        
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": apiKey
            },
        })

        const data = await res.json()
        const response = await data.response
        // console.log(response)
        return response
        // return rawData.response
    }

    useEffect(()=>{
        getLeague().then(response=>{
        setEplData(response)
        response.map(data=>{
            const seasons =data.seasons
            seasons.map(season=>{
                if (season.current){
                        setCurrentSeason(season.year)
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
