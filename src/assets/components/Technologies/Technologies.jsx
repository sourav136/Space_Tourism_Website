import React, { useState, useEffect, useRef } from 'react';
import './Technologies.css';
import LaunchVehicle from '../../images/image-launch-vehicle-portrait.jpg';
import LaunchVehicleL from '../../images/image-launch-vehicle-landscape.jpg';
import SpacePort from '../../images/image-spaceport-portrait.jpg';
import SpacePortL from '../../images/image-spaceport-landscape.jpg';
import SpaceCapsule from '../../images/image-space-capsule-portrait.jpg';
import SpaceCapsuleL from '../../images/image-space-capsule-landscape.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const Technologies = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 992);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const technologies = [
        {
            name: "LAUNCH VEHICLE",
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            number: "1",
            imagePortrait: LaunchVehicle,
            imageLandscape: LaunchVehicleL
        },
        {
            name: "SPACEPORT",
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            number: "2",
            imagePortrait: SpacePort,
            imageLandscape: SpacePortL
        },
        {
            name: "SPACE CAPSULE",
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            number: "3",
            imagePortrait: SpaceCapsule,
            imageLandscape: SpaceCapsuleL
        },
    ];

    return (
        <div>
            <div className="technologies">
                <div className="container technologies-container">
                    <h2 className='technologies-header'>SPACE LAUNCH 101</h2>
                    <Swiper
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        loop={true}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="mySwiper technologies-swiper"
                    >
                        {technologies.map((technology, index) => (
                            <SwiperSlide key={index}>
                                <div className="row">
                                    <div className="col-12 col-lg-7 order-2 order-lg-1 technologies-text-container">
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
                                    <div className="col-12 col-lg-5 order-1 order-lg-2 technologies-image-container">
                                        <img
                                            className='technologies-image'
                                            src={isMobile ? technology.imageLandscape : technology.imagePortrait}
                                            alt={`${technology.name} image`}
                                        />
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

export default Technologies;
