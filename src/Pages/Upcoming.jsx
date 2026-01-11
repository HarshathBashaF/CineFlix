import React, { useEffect, useState } from 'react'
import { usepopular } from '../ContexAPI/DataContext'
import { useNavigate } from 'react-router-dom'

const Upcoming = () => {
  const [search,setSearch] =useState('')
  const [filter,setfilter]=useState([])
  const navigate=useNavigate()

  const {upcoming}=usepopular()

  const handlechange = (e)=>{
    const value = e.target.value
    setSearch(value)
    if (value.trim()===''){
      setfilter(upcoming)
    }
    else{
      const filterd = upcoming.filter((m)=>{
        return m.original_title.toLowerCase().includes(value.toLowerCase())
      })
      setfilter(filterd)
    }
  }
  useEffect(() => {
   setfilter(upcoming)
  }, [upcoming])
  
  
  return (
   <div className="min-h-screen bg-linear-to-r from-black via-purple-900 to-black p-8">
    <div> 
      <input type="text" 
      placeholder='search Upcoming Movies'
      value={search}
      onChange={handlechange}
      className='text-2xl bg-gray-300 py-3 px-2 rounded-2xl shadow-2xl '
      />
    </div>
      
      {/* Title */}
      <h1 className="text-5xl text-white font-bold text-center mb-10">
        🎬 Upcoming Movies
      </h1>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filter.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/popular/${movie.id}`)}
            className="bg-black/70 rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {/* Poster */}
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-[400px] object-cover"
            />

            {/* Info */}
            <div className="p-4 text-white space-y-2">
              <h2 className="text-xl font-semibold truncate">
                {movie.original_title}
              </h2>

              <p className="text-sm opacity-80">
                📅 Release: {movie.release_date}
              </p>

              <p className="text-sm">
                ⭐ Rating: {movie.vote_average}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Upcoming