import React from 'react'
import { Link } from 'react-router-dom'

const Responsive = ({ openNav, setOpenNav }) => {
    return (
        <div className={`${openNav ? "left-0" : "-left-full"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-purple-300 px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all `} >

            <nav className=''>
                <ul className='flex flex-col gap-7 text-2xl'>
                    <Link to={'/'} ><li className='text-3xl text-purple-800 underline font-semibold' onClick={()=>setOpenNav(false)} >Home</li> </Link>
                    <Link to={'/popular'}><li className='text-3xl font-semibold  ' onClick={()=>setOpenNav(false)}>Popular</li></Link>
                    <Link to={"/upcoming"}><li className='text-3xl font-semibold ' onClick={()=>setOpenNav(false)}>Upcomping</li></Link>
                    <Link to={"/toprated"}> <li className='text-3xl font-semibold ' onClick={()=>setOpenNav(false)}>TopRated</li></Link>
                </ul>
            </nav>

        </div>
    )
}

export default Responsive