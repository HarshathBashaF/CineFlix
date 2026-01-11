import React, { useEffect, useState } from 'react'
import { usepopular } from '../ContexAPI/DataContext'
import { useNavigate } from 'react-router-dom'

const Popular = () => {
  const navigate =useNavigate()
  const { popular,loading ,setLoading } = usepopular()

  const [search ,setSearch] =useState('')
  const [filter,setFilter] =useState([])

  const handlechange =(e)=>{
    const value =e.target.value
    setSearch(value)

    if(value.trim() ===""){
      // if empty show all movies 
      setFilter(popular)
    }
    else{
      const filterd = popular.filter((movie)=>
           movie.original_title.toLowerCase().includes(value.toLowerCase())
      )
      setFilter(filterd)
    }

  }

  useEffect(() => {
   setFilter(popular)
  }, [popular])
  
  
 
  return (
    <div className='overflow-x-hidden'>
      <div className='text-center bg-linear-to-r from-violet-600 via-purple-200 to-violet-200 p-5'>
      <input type="text"
      placeholder='Search popular  Movies...'
      value={search}
      onChange={handlechange}
      className='bg-linear-to-r from-purple-500  to-violet-300 py-2 px-3 text-xl rounded-2xl border-3 border-gray-900  '
      />
      </div>
      {
        loading ? <h1 className='text-3xl '>Loading...</h1> : <div>  {
        filter.length > 0 ? <div>
          <div className='grid grid-cols-2 md:grid-cols-4 bg-linear-to-r from-purple-400 via-violet-200 to-purple-300 gap-7'>
            {
              filter.map((popular, i) => {
                return <div key={i} className=' '>

                  <div className=' hover:scale-105 transition-all shadow-2xl py-3 px-3 cursor-pointer' >
                   
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
        </div> :

         <div className="h-[400px] bg-linear-to-r from-violet-300 via-purple-500 to-purple-400 flex items-center justify-center">
  <div className="text-center text-white space-y-4">
    
    <div className="text-6xl">🎬</div>

    <h1 className="text-4xl md:text-5xl font-bold">
      Movies Not Found
    </h1>

    <p className="text-lg opacity-90">
      We couldn’t find any movies right now.
    </p>

    <button className="mt-4 px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-100 transition">
      Try Again
    </button>

  </div>
</div>

      }  </div>
      }
     
    </div>
  )
}

export default Popular