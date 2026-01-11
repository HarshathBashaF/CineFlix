import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Tmdbapi from "../Api/Tmbdapi";

export const Datacontext = createContext()

export const DataProvider = ({ children }) => {

    const [popular, setPopular] = useState([])
    const [top, setTop] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [nowplaying, setNowplaying] = useState([])
    const [loading,setLoading]=useState(false)

    // const API_KEY  = import.meta.env.VITE_API_KEY
    // const url= `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`







    //  Fetching all data from api key 


    const getpopularmovies = async () => {
        try {
            setLoading(true) 
            const res = await Tmdbapi.get("/movie/popular")
            const popdata = res.data.results
            setPopular(popdata)
            // console.log(popdata)
            setLoading(false)

        } catch (error) {

        }
    }

    //  Top rated 

    const Toprated = async () => {
        try {

            const res = await Tmdbapi.get("/movie/top_rated")
            const toprate = res.data.results
            // console.log(toprate)
            setTop(toprate)
        }
        catch {
            console.log(error)
        }
    }

    // nowplaying 

    const getnowplaying = async () => {
        try {
            const res = await Tmdbapi.get("/movie/now_playing")
            const now = res.data.results
            setNowplaying(now)
        } catch (error) {

        }
    }


    //Upcoming 

    const getupcoming = async () => {
        try {

            const res = await Tmdbapi.get("./movie/upcoming")
            const upcome= res.data.results
            // console.log(upcome)
            setUpcoming(upcome)


        }
        catch {
            console.log(error)
        }
    }

    useEffect(() => {
        getpopularmovies()
        Toprated()
        getnowplaying()
        getupcoming()
    }, [])



    return <Datacontext.Provider value={{ popular, setPopular,upcoming,setUpcoming, top,setTop,nowplaying,setNowplaying,loading,setLoading }}>
        {children}
    </Datacontext.Provider>
}

export const usepopular = () => useContext(Datacontext)