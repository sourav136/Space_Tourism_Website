import React, { useState, useRef } from 'react';
import './Technologies.css';
import LaunchVehicle from '../../images/image-launch-vehicle-portrait.jpg';
import SpacePort from '../../images/image-spaceport-portrait.jpg';
import SpaceCapsule from '../../images/image-space-capsule-portrait.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Technologies = () => {
    const technologies=[
        {
            name: "LAUNCH VEHICLE",
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            number: "1",
            image: LaunchVehicle,
        },
        {
            name: "SPACEPORT",
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            number: "2",
            image: SpacePort,
        },
        {
            name: "SPACE CAPSULE",
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            number: "3",
            image: SpaceCapsule,
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    return (
        <div>
            <div className="technologies">
                <div className="container">
                    <Swiper
                        direction={'vertical'}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="mySwiper technologies-swiper"
                    >
                        {technologies.map((technology, index) =>{
                            return(
                                <SwiperSlide key={index}>
                                    <div className="row">
                                        <div className="col-12 col-lg-6 technologies-text-container">
                                            <div className="technologies-pagination">
                                                {technologies.map((tech, i) => (
                                                    <button
                                                    key={i}
                                                    className={activeIndex === i ? "technologies-active" : ""}
                                                    onClick={() => {
                                                        setActiveIndex(i);
                                                        swiperRef.current?.slideTo(i);
                                                    }}
                                                    >
                                                    {tech.number}
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="technologies-contents">
                                                <h3 className='terminolgy'>THE TERMINOLOGY…</h3>
                                                <h4 className='technology-h4'>{technology.name}</h4>
                                                <p className='technology-p'>{technology.description}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 technolies-image-container">
                                            <img src={technology.image} alt={`${technology.name} image`} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Technologies;