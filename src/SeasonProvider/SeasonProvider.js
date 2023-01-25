import { useEffect,useState,createContext } from "react";

export const SeasonContext = createContext()

export const SeasonProvider = props => {
    // const apiKey = 'f8422dea87f3917ea0746070d48e623e';   
    const apiKey= 'e626274aa51b9e7d5d31ff1b317c2d01' 
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
        console.log(data)
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
    }).catch((error)=>{
        console.error(error)
    })
    },[])
    

    return (
        <SeasonContext.Provider value={[eplData,setEplData,currentSeason,setCurrentSeason]}>
            {props.children}
        </SeasonContext.Provider>
    )
}
