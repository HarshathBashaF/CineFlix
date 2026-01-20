import React, { useEffect, useState } from 'react'
import { usepopular } from '../ContexAPI/DataContext'
import { useNavigate } from 'react-router-dom'

const Popular = () => {
  const navigate = useNavigate()
  const { popular, loading } = usepopular()

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])

  const handleChange = (e) => {
    const value = e.target.value
    setSearch(value)

    if (value.trim() === "") {
      setFilter(popular)
    } else {
      const filtered = popular.filter((movie) =>
        movie.original_title.toLowerCase().includes(value.toLowerCase())
      )
      setFilter(filtered)
    }
  }

  useEffect(() => {
    setFilter(popular)
  }, [popular])

  return (
    <div className="overflow-x-hidden">
      {/* Search Bar */}
      <div className="text-center bg-gradient-to-r from-violet-600 via-purple-200 to-violet-200 p-5">
        <input
          type="text"
          placeholder="Search popular Movies..."
          value={search}
          onChange={handleChange}
          className="w-full max-w-md mx-auto bg-gradient-to-r from-purple-500 to-violet-300 py-2 px-4 text-lg md:text-xl rounded-2xl border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />
      </div>

      {/* Loading */}
      {loading ? (
        <h1 className="text-3xl text-center mt-10">Loading...</h1>
      ) : (
        <div>
          {/* Movies Grid */}
          {filter.length > 0 ? (
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filter.map((movie, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg hover:scale-105 transform transition-all cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/popular/${movie.id}`)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.original_title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-1">
                      {movie.original_title}
                    </h2>
                    <p className="text-sm text-gray-600">Language: {movie.original_language}</p>
                    <p className="text-sm text-gray-600">Release: {movie.release_date}</p>
                    <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // No Movies Found
            <div className="h-[400px] bg-gradient-to-r from-violet-300 via-purple-500 to-purple-400 flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <div className="text-6xl md:text-7xl">🎬</div>
                <h1 className="text-4xl md:text-5xl font-bold">Movies Not Found</h1>
                <p className="text-lg md:text-xl opacity-90">
                  We couldn’t find any movies right now.
                </p>
                <button
                  className="mt-4 px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-100 transition"
                  onClick={() => setSearch('')}
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Popular
