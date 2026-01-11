import React from 'react'
import { usepopular } from '../ContexAPI/DataContext'
import { useNavigate } from 'react-router-dom'
import Silder from '../Component/Silder'

const Home = () => {
   const navigate= useNavigate()

    const { popular, upcoming, top,nowplaying } = usepopular()
    // console.log(upcoming)
    return (
        <div className='overflow-x-hidden'> 
        <Silder />
        
      
        <div >
            <div className=' bg-linear-to-r from-violet-900 via-violet-400 to-violet-300 py-5' >
                <h1 className='text-3xl font-semibold text-white px-6 hover:text-violet-400 cursor-pointer '>Upcoming Movies</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4  bg-linear-to-r from-violet-100 via-violet-300 to-violet-600 min-h-screen md:h-170 px-7  py-10 '>
                 {
                    upcoming.slice(0,4).map((popular, index) => {
                            return <div key={index} className=''> 
                            
                            <div className=' hover:scale-105 transition-all shadow-2xl py-3 px-3 cursor-pointer'>
                                <img src={`https://image.tmdb.org/t/p/w300/${popular.poster_path}`} alt="" className='rounded-2xl py-2 px-3  ' onClick={()=>navigate(`/popular/${popular.id}`)} />
                               <h1 className='text-xl px-2  '>Title: {popular.original_title}</h1>
                               <p className='text-xl px-2 '> Original Language: {popular.original_language}</p>
                               <p className='text-xl px-2 '> Release Date: {popular.release_date}</p>
                               <p className='text-xl px-2  '>vote_Average: {popular.vote_average} </p>
                            </div>
                                
                            </div>
                        })
                    }
           
            </div>
                 
        </div>
        <div >
            <div className=' bg-linear-to-r from-violet-900 via-violet-400 to-violet-300 py-5' >
                <h1 className='text-3xl font-semibold text-white px-6 hover:text-violet-400 cursor-pointer '>Top_Rated Movies</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4  bg-linear-to-r from-violet-100 via-violet-300 to-violet-600 min-h-screen md:h-170 px-7  py-10 '>
                 {
                    top.slice(0,4).map((popular, index) => {
                            return <div key={index} className=''> 
                            
                            <div className=' hover:scale-105 transition-all shadow-2xl py-3 px-3 cursor-pointer'>
                                <img src={`https://image.tmdb.org/t/p/w300/${popular.poster_path}`} alt="" className='rounded-2xl py-2 px-3  ' onClick={()=>navigate(`/popular/${popular.id}`)} />
                               <h1 className='text-xl px-2  '>Title: {popular.original_title}</h1>
                               <p className='text-xl px-2 '> Original Language: {popular.original_language}</p>
                               <p className='text-xl px-2 '> Release Date: {popular.release_date}</p>
                               <p className='text-xl px-2  '>vote_Average: {popular.vote_average} </p>
                            </div>
                                
                            </div>
                        })
                    }
           
            </div>
                 
        </div>
        <div >
            <div className=' bg-linear-to-r from-violet-900 via-violet-400 to-violet-300 py-5' >
                <h1 className='text-3xl font-semibold text-white px-6 hover:text-violet-400 cursor-pointer '>Now_Playing</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4  bg-linear-to-r from-violet-100 via-violet-300 to-violet-600 min-h-screen md:h-170 px-7  py-10 '>
                 {
                    nowplaying.slice(0,4).map((popular, index) => {
                            return <div key={index} className=''> 
                            
                            <div className=' hover:scale-105 transition-all shadow-2xl py-3 px-3 cursor-pointer'>
                                <img src={`https://image.tmdb.org/t/p/w300/${popular.poster_path}`} alt="" className='rounded-2xl py-2 px-3  ' />
                               <h1 className='text-xl px-2  '>Title: {popular.original_title}</h1>
                               <p className='text-xl px-2 '> Original Language: {popular.original_language}</p>
                               <p className='text-xl px-2 '> Release Date: {popular.release_date}</p>
                               <p className='text-xl px-2  '>vote_Average: {popular.vote_average} </p>
                            </div>
                                
                            </div>
                        })
                    }
           
            </div>
                 
        </div>
        </div>
    )
}

export default Home