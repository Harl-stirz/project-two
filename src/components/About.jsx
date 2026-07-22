import React from 'react';

import { CircleCheck } from 'lucide-react';

import abheroImage from '../assets/images/reimage.jpeg';
import cImage from '../assets/images/hands.jpeg';
import f1Image from '../assets/images/f1.jpeg';
import f2Image from '../assets/images/f2.jpeg';
import f3Image from '../assets/images/f3.jpeg';
import f4Image from '../assets/images/f4.jpeg';

function About() {
    return (
        <div className="about">
            <div className="ab-hero">
                <div className="ab-left">
                    <b> <h5>OUR STORY</h5></b>
                    <h1>Reimagining how the world connects with talent.</h1>
                    <p>
                        Recroot was born from a simple observation; the traditional recruitment
                        process was broken. We built a platform that prioritizes human potential
                        over paper work.
                    </p>
                    <button>Join Our Team <span className="arrow">→</span></button>
                </div>
                <div className="ab-right">
                    <img src={abheroImage} alt="reimage" className="reimage" />
                    <div className='note'>
                        <div> <b> 500+ </b> <p>Team members</p></div>
                        <div> <b> 24</b><p>Global offices</p> </div>
                        <div><b> 98%</b> <p> client Sucess</p> </div>
                    </div>
                </div>


            </div>
            <div className='core'>
                <div className='core-header'>
                    <h3> Our Core Mission</h3>
                    <p> We are driven by the belief that everyone observes a career they love and every company deserve the right talent to grow
                    </p>
                </div>

                <div className='core-grid'>



                    <div className='core-block a'>
                        <h3>Bridging the Gap</h3>
                        <p>  We utilize advanced AI and human intuition to create meaningful connections between aspirational talents and visionary orinizations.Our goal is to elimate friction in the hiring process.</p>
                        <a href="#more">Learn more about our tech <span className="arrow">→</span></a>

                    </div>
                    <div className='core-block b'>
                        <span className="people">👥</span>
                        <h3>Culture First</h3>
                        <p>we believe in skills can be taught ,but value are inname, we focus on the cultural alignement to ensure long-term success</p>

                    </div>

                </div>
                <div className='core-right'>
                    <div className='core-block c'>
                        <span className='world'>🌐</span>
                        <h3>Global Impact</h3>
                        <p>Working across 4 continents to demoncratize across to high-qaulity employment opportunities</p>

                    </div>

                    <div className='core-block d'>

                        <img src={cImage} alt="cimage" className="hands" />


                        <div className="d-content">
                            <h3>Constant Innovation</h3>
                            <p>Were nevr satisfied with satue quo. Our R&D team works tirelessly to refine our matchine algorithm daily.</p>
                        </div>

                    </div>

                </div>


            </div>
            <div className='explore'>
                <div className='ex'>
                    <div>
                        <h5> Why Recroot</h5>
                        A recruitment Partner that works as hard as you do
                    </div>
                    <button> Explore Our Service</button>
                </div>
                <div className='explore-card'>

                    <div >

                        <CircleCheck className='check-icon' size={24} />

                        <h4> Verified Talent</h4>
                        <p>Strict vetting progress to ensure  only the top 3% of talent makes it to your desk</p>
                    </div>
                    <div>
                        <span role="img" aria-label="support">💬</span>

                        <h4>Expert Support</h4>
                        <p>Dedicated account managers availablen  24/7 to guide your hiring strategy</p>
                    </div>
                    <div>
                        <span role="img" aria-label="speedometer">🚀</span>
                        <h4>Rapid Delivery</h4>
                        <p>Reduce your time-to-hire by 40% with our automated machine pipelines.</p>
                    </div>
                    <div>
                        <span role="img" aria-label="dashboard">📊</span>


                        <h4>Data Insights</h4>
                        <p>Advanced analytics to track your recruitments ACk and talent retention.</p>
                    </div>

                </div>
            </div>
            <div className='leader'>
                <div className='le'>
                    <h3>Meet our Leadership</h3>
                    <p>A team of industry vets and technological innovation dedicated to changing the future of work</p>

                </div>
                <div className='leader-grid'>
                    <div>
                        <img src={f1Image} alt="f1" className="f1" />
                        <h4>  Alex Chenh5</h4>
                        <p>Chief Executive Officer</p>
                    </div>
                    <div>
                        <img src={f2Image} alt="f2" className="f2" />
                        <h4>  Alex Chenh5</h4>
                        <p>Head Of Project</p>
                    </div>
                    <div>
                        <img src={f3Image} alt="f3" className="f3" />
                        <h4>  Marcus Thorne</h4>
                        <p>Chief Technology Officer</p>
                    </div>
                    <div>
                        <img src={f4Image} alt="f4" className="f4" />
                        <h4>  Elena Rodriguez</h4>
                        <p>VP of People & Culture</p>
                    </div>
                </div>

                <div className='baw'>

                    <div className='lan'>
                        <h2> Ready to take the next step?</h2>
                        <p>Whether youre hiring for your next unicorn or looking for your dream role. Recroot is here to guide you </p>
                        <button>Find a Job</button> <button>Post a Job</button>
                    </div>
                </div>

            </div>

            <div className='about-footer'>
                <div className='afooter-content'>
                    <div>
                        <h1>RECROOT</h1>
                        <p>Empowering the global workforce through intelligent connections and seamless recruitment experiences.</p>
                    </div>
                    <div>
                        <h5>Platform</h5>
                        <p>Find Jobs</p>
                        <p>Post a Job</p>
                        <p>Talent Pool</p>
                        <p>Case Studies</p>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <p><b>About Us</b></p>
                        <p>Careers</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                    <div>
                        <h5>Connect</h5>
                        <p>Contact Us</p>
                        <p>LinkedIn</p>
                        <p>Twitter</p>
                        <p>Resources</p>
                    </div>
                </div>
                <div className="about-end">
                    <p className="copyright">© 2026 Recroot. All rights reserved.</p>
                </div>
            </div>
        </div >

    );
}

export default About;
