
import React from 'react';
import { Image } from 'lucide-react';
import headerImage from '../assets/images/laptop.jpeg'
import aleftImage from '../assets/images/nexus.jpeg'
import arightImage from '../assets/images/ess.jpeg'
function Job() {
    return (
        <div className="job">

            <div className="head">
                <h1>Find your dream job today!</h1>
                <p>Take your dream career to the next level at one of the best companies in the world</p>
            </div>


            <div className="search">
                <input type="search" placeholder="Job title or key word" />
                <span role="img" aria-label="map pin">📍</span>
                <input type="search" placeholder="New York, NY" />
                <button type="submit">search</button>
            </div>


            <div className="types">
                <div>UI/UX Design</div>
                <div>Marketing</div>
                <div>Development</div>
                <div>Engineering</div>
                <div>Sales & Admin</div>
            </div>


            <div className="job-des">
                <div className="job-left">
                    <div className="job-leftheader">
                        <h1>Featured Jobs</h1>
                        <div>sort by: <b>Newest Post</b></div>
                    </div>

                    <div className="job-info">

                        <div className="job-card">
                            <div className="job1">
                                <div>
                                    <h2> Senior Motion Graphics Designer</h2>
                                    <span role="img" aria-label="clock">🕒 Full-time</span>
                                    <span role="img" aria-label="map pin">📍 Manio Park, CA</span>
                                </div>
                                <div className="opp-des-info">
                                    <div><b>$120k</b>/yearly</div>
                                    <button>Apply</button>
                                </div>
                            </div>
                            <div className="qualification">
                                <div>3 Years Exp</div>
                                <div>Hybrid</div>
                                <div>After Effects</div>
                            </div>
                        </div>


                        <div className="job-card">
                            <div className="job2">
                                <div>
                                    <h2>Front-End Developer</h2>
                                    <span role="img" aria-label="clock">🕒 Full-time</span>
                                    <span role="img" aria-label="map pin">📍 Manio Park, CA</span>
                                </div>
                                <div className="opp-des-info">
                                    <div><b>$130k</b>/yearly</div>
                                    
                                    <button>Apply</button>
                                </div>
                            </div>
                            <div className="qualification">
                                <div>Senior Level</div>
                                <div>Remote</div>
                                <div>React/Tailwind</div>
                            </div>
                        </div>


                        <div className="job-card">
                            <div className="job3">
                                <div>
                                    <h2>Senior Motion Graphic Designer</h2>
                                    <span role="img" aria-label="clock">🕒 Full-time</span>
                                    <span role="img" aria-label="map pin">📍 Stockholm, SE</span>
                                </div>
                                <div className="opp-des-info">
                                    <div><b>$150k</b>/yearly</div>
                                    <button>Apply</button>
                                </div>
                            </div>
                            <div className="qualification">
                                <div>5 years Exp.</div>
                                <div>On-site</div>
                                <div>Cinema 4D</div>
                            </div>
                        </div>


                        <div className="job-card">
                            <div className="job4">
                                <div>
                                    <h2>Junior Marketing Manager</h2>
                                    <span role="img" aria-label="clock">🕒 Full-time</span>
                                    <span role="img" aria-label="map pin">📍 San Francisco</span>
                                </div>
                                <div className="opp-des-info">
                                    <div><b>$200k</b>/yearly</div>
                                    <button>Apply</button>
                                </div>
                            </div>
                            <div className="qualification">
                                <div>Entry Level</div>
                                <div>Remote</div>
                                <div>SEO/Content</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="job-right">
                    <div className='ab'>
                        <div className='job-rightheader'>
                            <h3>    Latest Insights</h3>
                            <a href="">View all</a>
                        </div>
                        <div className='career'>
                            Career Advice
                        </div>
                        <div>
                            <img src={headerImage} alt="header" className='laptop' />
                            <h4>Navigating a career change:How to  transition into a new industry</h4>
                            sep 15,2024. 5 min read
                        </div>

                        <div className='a-left'>
                            <img src={aleftImage} alt="aleftImage" className='aleft' />
                            <div >
                                <h4>strategies to land your dream job in 2o24</h4>
                                Aug 12,2024

                            </div>
                        </div>
                        <div className='a-left'>
                            <img src={arightImage} alt="arightImage" className='aleft' />
                            <div >
                                <h4>10 essentail & solid interview tips for tech....</h4>
                                Aug 05,2024

                            </div>
                        </div>
                    </div>

                    <div className='download'>
                        <h2>Download The Recroot Mobile App</h2>
                        Get the power of Recroot on the go.
                        Hiring and searching made easy
                        <div className='appd'>
                            
                            <button >  App Store</button>
                            <button >Play Store</button>
                        </div>
                    </div>

                </div>


            </div>
            <div className="pagination">
                <button className="page-arrow">&lt;</button>
                <button className="page-number active">1</button>
                <button className="page-number">2</button>
                <button className="page-number">3</button>
                <button className="page-number">4</button>
                <button className="page-arrow">&gt;</button>
            </div>

            <div className='job-footer'>
                <div className='jfooter-content'>
                    <div>
                        <h1> RECROOT</h1>
                        Recroot is your trusted platform for discovering opportunities that match your skilss , experience and career aspirations
                    </div>

                    <div> <h5> Company</h5>
                        <h3> About Us</h3>
                        <p>Careers</p>
                        <p>Contact</p>
                        <p>Blogy</p>
                    </div>


                    <div> <h5> Support</h5>
                        <h3> Quick links</h3>
                        <p>Find Jobs </p>
                        <p>Post a Job</p>
                        <p>Resources</p>
                    </div>

                    <div>
                        <h3> socail</h3>

                        <p>Facebook</p>
                        <p>Instageam</p>
                        <p>LinkedIn</p>
                        <p>Twitter</p>
                    </div>


                </div>

                <div className="j-end">
                    hello@recroot.com
                    <p className="copyright">© 202 Recroot. All rights reserved.</p>

                </div>
            </div>

        </div>

    );
}

export default Job;
