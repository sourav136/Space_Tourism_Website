import React, { useState, useRef } from 'react';
import './Destination.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Moon from '../../images/image-moon.png'
import Mars from '../../images/image-mars.png'
import Europa from '../../images/image-europa.png'
import Titan from '../../images/image-titan.png'

const Destination = () => {
    const destinations = [
        { name: "MOON", 
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            time: "3 days",
            img: Moon 
        },
        { name: "MARS", 
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 MIL. km",
            time: "9 months",
            img: Mars 
        },
        { name: "EUROPA", 
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 MIL. km",
            time: "3 years",
            img: Europa
        },
        { name: "TITAN", 
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 BIL. km",
            time: "7 years",
            img: Titan 
        }
      ];

    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    
    return (
        <div>
            <div className="destination">
                <div className="container">
                    <h2 className='destination-header'>Pick your Destination</h2>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {destinations.map((destination, index) => (
                        <SwiperSlide key={index}>
                            <div className="row">
                                <div className="col-12 col-lg-6 destination-image-container">
                                    <img className='destination-image' src={destination.img} alt={destination.name + " image"} />
                                </div>
                                <div className="col-12 col-lg-6 destination-contents">
                                    <div className="pagination">
                                        {destinations.map((dest, i) => (
                                            <button
                                            key={i}
                                            className={activeIndex === i ? "pagination-active" : ""}
                                            onClick={() => {
                                                setActiveIndex(i);
                                                swiperRef.current?.slideTo(i);
                                            }}
                                            >
                                            {dest.name}
                                            </button>
                                        ))}
                                    </div>
                                    <h3 className='destination-name'>{destination.name}</h3>
                                    <p className='destination-description'>{destination.description}</p>
                                    <hr />
                                    <div className="travel-details">
                                        <div className="average-distance-container">
                                            <p className='travel-p'>avg. distance</p>
                                            <h4 className='travel-h4'>{destination.distance}</h4>
                                        </div>
                                        <div className="travel-time-container">
                                            <p className='travel-p'>est. travel time</p>
                                            <h4 className='travel-h4'>{destination.time}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Destination;