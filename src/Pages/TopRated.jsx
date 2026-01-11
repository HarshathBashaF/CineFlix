import React, { useEffect, useState } from 'react'
import { usepopular } from '../ContexAPI/DataContext'
import { useNavigate } from 'react-router-dom'

const TopRated = () => {

  const [search,setSearch]=useState('')
  const [filter,setFilter]=useState([])
  const {top}=usepopular()

  const navigate=useNavigate()
  
  const handlechange = (e)=>{
    const value=e.target.value
    setSearch(value)

    if (value.trim()===''){
      setFilter(top)
    }
    else{
      const filterd =top.filter((m)=>{
        return m.original_title.toLowerCase().includes(value.toLowerCase())
      })
      setFilter(filterd)
    }
  }
  useEffect(() => {
   setFilter(top)
  }, [top])
  


  return (
     <div className="min-h-screen bg-linear-to-r from-black via-gray-900 to-black p-8">

      <div>
        <input type="text"
        placeholder='Search TopRated..' 
        value={search}
        onChange={handlechange}
         onKeyDown={(e) => e.key === "Enter" && handlechange()}
        className='text-xl bg-gray-300 py-3 px-2 rounded-2xl shadow-2xl'
        />
      </div>
      
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center text-yellow-400 mb-10">
        ⭐ Top Rated Movies
      </h1>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filter.map((movie) => (
          <div
            key={movie.id}
            onClick={()=>navigate(`/popular/${movie.id}`)}
            className="bg-black/80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {/* Poster */}
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-[420px] object-cover"
            />

            {/* Info */}
            <div className="p-4 text-white space-y-2">
              <h2 className="text-xl font-semibold truncate">
                {movie.original_title}
              </h2>

              <p className="text-sm opacity-80">
                📅 {movie.release_date}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-yellow-400 font-bold text-lg">
                  ⭐ {movie.vote_average}
                </span>
                <span className="text-sm opacity-70">
                  Votes: {movie.vote_count}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
  

export default TopRated