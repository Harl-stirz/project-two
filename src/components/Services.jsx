import React, { useState } from "react";
import { User, CircleCheck } from "lucide-react";
import coreImage from "../assets/images/core.jpg";



function Services() {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (!email) {
            alert('Please enter an email address.');
            return;
        }

        console.log(`Subscribed with: ${email}`);
        alert(`Thank you for subscribing with ${email}!`);
        setEmail('');
    };
    return (
        <div className="service">
            <div className='s-left'>
                <div className='s-header'>
                    <div>GLOBAL SOLUTION</div>

                    <h1> Our Recruitement Solutions</h1>
                    <p> At  recroot we redefine how companies find and retain elite talent. Our tech-first methedology combines global reach with precision data to deliver tailored talent acquisition strategies.
                    </p>

                </div>
            </div>

            <div className='c-services'>


                <div className='score-header'>
                    <h1> Core Services</h1>

                </div>

                <div className='score-grid'>


                    <div className='score-block a'> <div className='bb'>
                        <span className="star">⭐</span>
                        <h3>Executive Search</h3>
                    </div>
                        <p>  Strategic headhunting for C-suite and senior leadership roles. We leverage deep market intelligence and a global network to identify visionaries who can steer your organization toward long-term sucess</p>
                        <div className='sa-core'>
                            <div>
                                <div >
                                    <CircleCheck className='check-icon' size={24} /> Leadership Mapping </div>
                                <div><CircleCheck className='check-icon' size={24} /> Confidential Search
                                </div>
                            </div>
                            <div>
                                <div>
                                    <CircleCheck className='check-icon' size={24} /> Successor Planning </div>

                                <div> <CircleCheck className='check-icon' size={24} /> Board Advisory

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='score-block b'>
                        <User className='process-icon' size={32} />
                        <h3>Permanent Placement</h3>
                        <p>Build your legacy with permanent hires who align with your culture and future goals. We find the perfect fit for your long-term growth</p>
                        <a href="#more">Learn More  <span className="arrow">→</span></a>
                    </div>

                </div>
                <div className='score-right'>
                    <div className='score-block c'>
                        <span className="clock">🕒 </span>
                        <h3>Contract Staffing</h3>
                        <p>Agile workforce solutions for project-based needs,seasonal peaks , or specialized interim roles. Get the talent you need, when you need</p>
                        <div className='sc-core'>
                            <div>flexible</div> <div>Project-Based</div>
                        </div>
                    </div>

                    <div className='score-block d'>

                        <div>  <h3>RPO Solutions</h3> <span className="pentagon">⬟</span> </div>

                        <p>Our Recruitment Process Outsourcing (RPO) services integrate seamissly with your internal teams to manage part or all of your recruitment life cycle. We act as an extension of your brand.</p>
                        <div className='s-core'>
                            <div><h4>30%</h4> <p>Lower Cost/hire</p></div>
                            <div><h4>45%</h4> <p>Faster time-to-Fill</p></div>
                            <div><h4>98%</h4> <p>Client Satisfaction</p></div>
                        </div>

                    </div>
                </div>

            </div>


            <div className='app'>
                <div className='app-left'>
                    <div className='app-header'>
                        <h3>  Our Tailored Approach  </h3>
                        <p>A standardized process doesnt work for unique talent needs. we combine human empathy with data precision through afour-stage methodology</p>


                    </div>
                    <div className='app-left-content'>
                        <div className='appc1'>

                            <div className="number-circle">1</div>  <h3>Discovery</h3>
                        </div>
                        <p>Deep-diving into your company culture ,technical requirements, and strategic vision to build aprecise candidate profile</p>
                        <div className='appc1'>

                            <div className="number-circle">2</div>  <h3>Sourcing</h3>
                        </div>
                        <p>Leveraging our global database and Ai-driving sourcing tools to uncover both active and passive high-caliber talent</p>
                        <div className='appc1'>

                            <div className="number-circle">3</div>  <h3>Screening</h3>
                        </div>
                        <p>Multi-stage technical assessments and behavioral interviews to ensure technical proficiency and cultural allignment</p>
                        <div className='appc1'>

                            <div className="number-circle">4</div>  <h3>Selection</h3>
                        </div>
                        <p>Facilitating interviewa,nicer management, andonboarding support to ensure a seamless intergration for your new hire</p>


                    </div>

                </div>

                <div className='app-right-content'>
                    <img src={coreImage} alt="core" className='core' />
                    <div className='apps'><h3>95%</h3>
                        <p>Retention Rate after 12months</p>
                    </div>

                </div>

            </div>


             <div className='why'>
                <div className='why-header'>
                    <div>
                        <br /><br />
                        <h3>Why Recroot</h3>
                        <p>The intersection of human intelligence an technological advancement.</p>
                    </div>
                </div>
                <div className='why-content'>
                    <div>
                        <span className="bolt-icon">⚡</span>

                        <h3> Tech-First Methodology</h3>
                        <p>
                            We utilize proprietary AI matching algorithms and automated screening to remove bais and accelerate placement speed
                        </p></div>
                    <div>
                        <span className='worl'>🌐</span>

                        <h3>Global talent Network</h3>
                        <p>Access a curated database of over 2M+ active and passive professional across North America ,Europe,and Asia-Pacific.</p>
                    </div>
                    <div>
                        <span className='f'>📈</span>

                        <h3>Data-Driven Insights</h3>
                        Receive real-time market data , salary benchmarks, and competitor analysis to make informed hiring decisions every time
                    </div>
                </div>
            </div>

            <div className='team'>
                <h1>Ready to scale your team?</h1>
                <p>Join hundreds of high-growth companies that trust recroot to build in their world-class engineering ,desing, and leadership teams.</p>
                <button className='btn-p'>Book a Demo</button > <button className='btn-s'>Talk to an Expert</button>

            </div>

            <div className="service-footer">
                <div className="sfooter-content">
                    <div className='recr'>
                        <h1>RECROOT</h1>

                        <p>Empowering the next generation of talent through technology-first recruitement solutions </p>
                        <div className='w'>
                            <div>
                                <span role="img" aria-label="share">📤</span>

                            </div>
                            <div>
                                <span className='world'>🌐</span>
                            </div>
                            <div>
                                <span role="img" aria-label="camera">📸</span>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>PLATFORM</h3>
                        <p>Find Jobs</p>
                        <p>Post a Job</p>
                        <p>Talent Pool</p>
                        <p>Case Studies</p>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                    <div>
                        <h3>NEWSLETTER</h3>
                        <p>Stay updated with the latest talent trends and platform updates</p>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="submit" onClick={handleSubscribe}>
                            send
                        </button>
                    </div>
                </div>
                <div className="service-end">
                    <p className="copyright">© 2026 Recroot  recruitement solutions. All rights reserved.</p>
                    <div className='other'>
                        <div>Help Center</div>
                        <div> Contact Support</div>
                        <div>Diversity & Inclusions</div>
                    </div>
                </div>
            </div>

            
           
        </div>



    );
}
export default Services