import React from 'react';
import heroImage from '../assets/images/he.jpg'


function Hero() {
    return (
        <div className='Container'>
            <div className='container-hero'>
                <div className='left'>
                    <button className='btn-ultimate'>ultimate job finder</button>
                    <h1> Find the perfect job that aligns with your passion</h1>
                    <h5>Recroot brings you closer to your dream job with a platform designed to match your unique talents.</h5>
                    <button className='btn-get-started'> Get Started <span className="arrow">→</span> </button>
                </div>

                <div className='right'>
                    <div className='motion'>
                        Motion designer Active <b>.</b> Remote
                    </div>

                    <img src={heroImage} alt="hero" className='he' />
                    <div className='mark'> Mark Wood Marketing Lead

                    </div>
                </div>
            </div>

            <div className='recruitement'>


                <div className='one'>   <h2> <button> <b>#1</b></button>  Recruitement <br /> Agency </h2> <p>Global #1n HR & Recruitment platform </p></div>
                <div>
                    <b><h1>6.5M+</h1></b> <p> Tech professionals trust us</p>

                </div>
                <div>
                    <b><h1>150K+</h1></b> <p> professionals hired yearly</p>
                </div>

                <div>
                    <b><h1>100K+</h1></b> <p>Top companies hiring</p>
                </div>
            </div>
            <div className='trusted'>

                <div className='emp'>
                    <h3>EMPOWERING BUSINESSES WITH TOP TALENT EVERY DAY</h3>
                </div>
                <div className='emp-one'>
                    <h1>Meta</h1>
                    <h1>YouTube</h1>
                    <h1>Airbnb</h1>
                    <h1>Windows</h1>

                </div>
            </div>




        </div>







    );
}

export default Hero;