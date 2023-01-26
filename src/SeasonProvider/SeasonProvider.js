import { useEffect,useState,createContext } from "react";

export const SeasonContext = createContext()

export const SeasonProvider = props => {
    const apiKey = 'f8422dea87f3917ea0746070d48e623e';   
    // const apiKey= 'e626274aa51b9e7d5d31ff1b317c2d01' 
    // const apiKey ='cecdb0e87445150864d079cd5c982aa5'
    const [eplData, setEplData] = useState([])
    const [currentSeason,setCurrentSeason] = useState()    
    const rawData = {
  "get": "leagues",
  "parameters": {
    "id": "39"
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
        // return response
        return rawData.response
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
