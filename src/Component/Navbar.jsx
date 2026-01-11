import { CameraIcon, Play } from 'lucide-react'
import React, { useState } from 'react'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import { MdMovie, MdMovieCreation, MdMovieFilter, MdPlaylistAdd } from 'react-icons/md'
import { SiCinema4D } from 'react-icons/si'
import { Link, Links } from 'react-router-dom'
import Responsive from './Responsive'

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    return (

        <div className='bg-white p-3 py-5 shadow-2xl bg-linear-to-r from-purple-200 via-purple-300 to-purple-500 '>
            <div className='max-w-7xl mx-auto flex justify-between items-center '>
                <div className='flex items-center text-purple-600'>
                    <MdMovie className='w-7 h-7' />
                    <h1 className='text-3xl font-bold  text-purple-500 '> <span className='text-3xl font-serif text-purple-900 '>C</span >ine<span className='text-3xl font-serif text-purple-900'>F</span>lix</h1>
                </div>
                <nav className='flex items-center gap-2 '>
                    <ul className='md:flex gap-5 items-center hidden'>
                        <Link to={'/'} ><li className='text-2xl'>Home</li> </Link>
                        <Link to={'/popular'}><li className='text-2xl'>Popular</li></Link>
                        <Link to={"/upcoming"}><li className='text-2xl'>Upcomping</li></Link>
                        <Link to={"/toprated"}> <li className='text-2xl'>TopRated</li></Link>
                        <  MdMovieFilter className='w-7 h-7' />
                    </ul>

                    {
                        openNav ? <HiMenuAlt3 onClick={() => setOpenNav(false)} className='h-7 w-7  md:hidden ' /> :

                            <HiMenuAlt1 onClick={() => setOpenNav(true)} className='h-7 w-7  md:hidden ' />
                    }

                </nav>
            </div>
            <Responsive openNav={openNav} setOpenNav={setOpenNav}/>
        </div>

    )
}

export default Navbar