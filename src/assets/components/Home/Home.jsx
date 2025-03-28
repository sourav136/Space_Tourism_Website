import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="container home-container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h4 className='home-h4'>SO, YOU WANT TO TRAVEL TO</h4>
                            <h1 className='home-h1'>SPACE</h1>
                            <p className='home-p'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                            <Link to="/destination" className='explore-button' tabIndex={0}>Explore</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;