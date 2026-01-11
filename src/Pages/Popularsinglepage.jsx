import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Tmdbapi from '../Api/Tmbdapi'

const Popularsinglepage = () => {
const navigate =useNavigate()
  const params = useParams()
  const [single, setSingle] = useState('')


  const populardetails = async () => {
    try {
      const res = await Tmdbapi.get(`/movie/${params.id}`)
      const data = res.data
      setSingle(data)
      console.log(single)

    } catch (error) {

    }
  }
  useEffect(() => {
    populardetails()
  }, [])

  return (
      <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${single.backdrop_path})`
      }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/75 flex items-center">
        <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">

          {/* Poster */}
          <div className="flex justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w500/${single.poster_path}`}
              className="rounded-2xl shadow-2xl"
              alt={single.original_title}
            />
          </div>

          {/* Movie Details */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">
              {single.original_title}
            </h1>

            <p className="text-lg opacity-90">
              {single.overview}
            </p>

            <p className="text-xl">⭐ Rating: {single.vote_average}</p>
            <p className="text-xl">📅 Release: {single.release_date}</p>
            <p className="text-xl">🌍 Language: {single.original_language}</p>

            <button
              className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl text-xl"
              onClick={()=>navigate('/popular')}
            >
              ← Back
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Popularsinglepage