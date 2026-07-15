// 
import React from "react";
import { Link } from "react-router-dom";

function Opp() {
  return (
    <div className='opp'>
      <div className='opp-header'>
        <h4>TOP OPPORTUNITIES</h4>
      
        <Link to="/find-a-job" > 
          View all <span className="arrow">→</span> 
        </Link>
      </div>
      
      <h2>Popular jobs are here</h2>
      
      <div className='opp-jobs'>
        <div className='opp-job'>
          <div className='opp-info'>
            
            <div className='opp-job1'>
              <div>
                <h3>Senior Motion Designer</h3>
                <span role="img" aria-label="clock">🕒 Full-time</span>
                <span role="img" aria-label="map pin">📍 san fransisco</span>
              </div>
              <div className='opp-job-info'>
                <div>
                  <b>$120k</b>/yearly <br /> posted 2h ago
                </div>
                <button>Apply</button>
              </div>
            </div>

            <div className='opp-job2'>
              <div>
                <h3>Lead Frontend Developer</h3>
                <span role="img" aria-label="clock">🕒 Hybrid</span>
                <span role="img" aria-label="map pin">📍 london,Uk</span>
              </div>
              <div className='opp-job2-info'>
                <div>
                  <b>$100k</b>/yearly <br /> posted 5h ago
                </div>
                <button>Apply</button>
              </div>
            </div>

            <div className='opp-job3'>
              <div>
                <h3>Junior Marketing Manager</h3>
                <span role="img" aria-label="clock">🕒 Remote</span>
                <span role="img" aria-label="map pin">📍 new york, ny</span>
              </div>
              <div className='opp-job3-info'>
                <div>
                  <b>$85k</b>/yearly <br /> posted 1d ago
                </div>
                <button>Apply</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Opp;
