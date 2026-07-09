
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import techImage from '../assets/images/tech.jpeg';
import nexusImage from '../assets/images/nexus.jpeg';

function Case() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');

  const handleViewServices = () => {
    navigate('/services'); 
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Submitting newsletter email:', email);
    alert(`Thank you for subscribing with: ${email}`);
    
    setEmail('');
  };

  return (
    <div className="case-page">
      <div className="case-head">
        <h4>SUCCESS STORIES</h4>
        <h2>Empowering teams through strategic talent acquisition.</h2>
        <p>
          Explore how the world's leading companies leverage Recroot to build high-performing teams and navigate the complex modern job market.
        </p>
      </div>

      <div className="studies">
        <div className="studies-left">
          <div className="studies-a">
            <div className="studies-a-header">
              <div>
                <h3>Global Health Corp</h3>
                <p>ENTERPRISE SOLUTIONS</p>
              </div>
              <div className="studies-meta-container">
                <div className="meta-box one">
                  <span className="metric-tag light-grey">150+ Hires</span>
                </div>
                <div className="meta-box two">
                  <span className="metric-tag">Remote-First</span>
                </div>
              </div>
            </div>
            <div className="studies-anote">
              <div className="studies-atext">
                <h3>Scaling a global engineering team by 40% in just 6 months</h3>
                <p>
                  How one of the world's largest software providers streamlined their niche tech hiring using Recroot's AI-driven matching engineering.
                </p>
                <a href="/"> Read Success Story <span className="arrow">→</span> </a>
              </div>
              <img src={techImage} alt="techimage" className="techimage" />
            </div>
          </div>

          <div className="studies-b">
            <div className="studies-b1">
              <h3>GreanPath Eco</h3>
              <p>Transitioning to a sustainability-first hiring model that reduced turnover by 65%.</p>
              <a href="/">Read More</a>
            </div>
            <div className="studies-b2" style={{ backgroundImage: `url(${nexusImage})` }}>
              <div className="studies-b2note">
                <h3>Nexus Design Lab</h3>
                <p>Curating a world-class UX department for a Fortune 500 company.</p>
                <a href="/">Discover Case Study</a>
              </div>
            </div>
          </div>
        </div>

        <div className="studies-right">
          <div className="studies-c">
            <span role="img" aria-label="rocket">🚀</span>
            <h3>ScaleUp AI</h3>
            <p>Building the functional AI research team from zero to hero in the heart of Silicon Valley.</p>
            <div className="metrics-tag">2.4x Faster Time-to-Hire</div>
            <button>View Metrics</button>
          </div>
          <div className="studies-d">
            <span className="bank">🏦</span>
            <h3>Trust Finance</h3>
            <p>Securing high-compliance talent for digital banking transformations across Europe.</p>
            <div className="tags-container">
              <span className="tag">FINTECH</span> <span className="tag">COMPLIANCE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ready">
        <h1>Ready to write your own success story?</h1>
        <p>Join 50k+ companies that trust Recroot to find their most valuable asset: People</p>
        <button className="btn-primary">Start Hiring</button>
        <button className="btn-secondary" onClick={handleViewServices}>
          View All Services
        </button>
      </div>

      <footer className="case-footer">
        <div className="footer-content">
          <div>
            <h1>RECROOT</h1>
            <p>The generation of professional talent acquisition and workplace management</p>
          </div>
          <div>
            <h3>PLATFORM</h3>
            <p>Find Jobs</p>
            <p>Post a Job</p>
            <p>Resources</p>
          </div>
          <div>
            <h3>SUPPORT</h3>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <h3>STAY UPDATED</h3>
            <p>Get the latest updates</p>
            
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /> 
              <button type="submit" className='send'>&gt;</button>
            </form>

            <div className='ws'>
              <div>
                <span role="img" aria-label="at">@</span>
              </div>
              <div>
                <span className='world'>🌐</span>
              </div>
              <div>
                <span role="img" aria-label="people">👥</span>
              </div>
            </div>
          </div>
        </div>
        <div className="case-end">
          <p className="copyright">© 2026 Recroot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Case;
