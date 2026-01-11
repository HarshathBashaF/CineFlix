import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { usepopular } from '../ContexAPI/DataContext';
import { useNavigate } from 'react-router-dom';


const Silder = () => {
   const navigate= useNavigate()
    const { popular } = usepopular()
   var settings = {
        dots: false,
        autoplay:true,
        autoplaySpeed:1500,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
    <Slider {...settings}>
      {popular.slice(0, 5).map((m, i) => {
        return (
          <div key={i}>
            {/* Background Wrapper */}
            <div
              className="relative h- bg-cover bg-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${m.poster_path})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Content */}
              <div className="relative z-10 flex  flex-col pt-5  md:flex-row  justify-center items-center h-full gap-10 px-10">
                <div className="space-y-6 max-w-xl">
                  <h1 className="text-3xl font-bold text-white">
                    <span className="text-red-500">Movies World, CineFlix</span>{" "}
                    helps you discover movies easily.
                  </h1>

                  <h3 className="text-2xl text-gray-200 uppercase line-clamp-2">
                    Movie: {m.original_title}
                  </h3>

                  <p className="text-xl text-gray-300">
                    <span className="text-red-300">Original Language:</span>{" "}
                    {m.original_language}
                  </p>

                  <p className="text-xl text-red-300">
                    Release Date: {m.release_date}
                  </p>

                  <button
                    onClick={() => navigate(`/popular/${m.id}`)}
                    className="text-xl rounded-md bg-linear-to-r from-purple-500 to-violet-700 py-2 px-5 hover:scale-105 transition hidden md:block "
                  >
                    Show Details
                  </button>
                </div>

                {/* Poster Image */}
                <img
                  src={`https://image.tmdb.org/t/p/w300/${m.poster_path}`}
                  alt={m.original_title}
                  className="rounded-2xl w-[300px] shadow-2xl hover:scale-105 transition"
                />
                 <button
                    onClick={() => navigate(`/popular/${m.id}`)}
                    className="text-xl rounded-md m-5 bg-linear-to-r from-purple-500 to-violet-700 py-2 px-5 hover:scale-105 transition  md:hidden "
                  >
                    Show Details
                  </button>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  </div>
    );
}

export default Silder