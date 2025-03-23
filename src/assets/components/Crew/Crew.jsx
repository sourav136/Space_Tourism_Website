import React from 'react';
import './Crew.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Crew1 from '../../images/image-douglas-hurley.png'
import Crew2 from '../../images/image-mark-shuttleworth.png'
import Crew3 from '../../images/image-victor-glover.png'
import Crew4 from '../../images/image-anousheh-ansari.png'

const Crew = () => {
    return (
        <div>
            <div className="crew">
                <div className="container">
                    <Swiper 
                    pagination={true} 
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[Pagination, Autoplay]} 
                    className="mySwiper crew-swiper">
                        <SwiperSlide>
                            <div className="row crew-row">
                                <div className="col-12 col-lg-6 crew-text-container">
                                    <h5 className='crew-h5'>MEET YOUR CREW</h5>
                                    <h4 className='crew-h4'>Commander</h4>
                                    <h2 className='crew-h2'>Douglas Hurley</h2>
                                    <p className='crew-p'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                                </div>
                                <div className="col-12 col-lg-6 crew-image-container">
                                    <img className='crew-image' src={Crew1} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row crew-row">
                                <div className="col-12 col-lg-6 crew-text-container">
                                    <h5 className='crew-h5'>MEET YOUR CREW</h5>
                                    <h4 className='crew-h4'>Mission Specialist</h4>
                                    <h2 className='crew-h2'>MARK SHUTTLEWORTH</h2>
                                    <p className='crew-p'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                                </div>
                                <div className="col-12 col-lg-6 crew-image-container">
                                    <img className='crew-image' src={Crew2} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row crew-row">
                                <div className="col-12 col-lg-6 crew-text-container">
                                    <h5 className='crew-h5'>MEET YOUR CREW</h5>
                                    <h4 className='crew-h4'>PILOT</h4>
                                    <h2 className='crew-h2'>Victor Glover</h2>
                                    <p className='crew-p'>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                                </div>
                                <div className="col-12 col-lg-6 crew-image-container">
                                    <img className='crew-image' src={Crew3} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row crew-row">
                                <div className="col-12 col-lg-6 crew-text-container">
                                    <h5 className='crew-h5'>MEET YOUR CREW</h5>
                                    <h4 className='crew-h4'>Flight Engineer</h4>
                                    <h2 className='crew-h2'>Anousheh Ansari</h2>
                                    <p className='crew-p'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
                                </div>
                                <div className="col-12 col-lg-6 crew-image-container">
                                    <img className='crew-image' src={Crew4} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Crew;