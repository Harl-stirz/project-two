
import React from 'react';
import { FileUser, User, CircleCheck, Upload, Calendar } from 'lucide-react';

function Recruit() {
    return (
        <div className='recruit'>
            <div className='recruit-header'>
                <h5>RECRUITMENT PROCESS</h5>
                <h2>Our Efficient Recruitment Process, outstanding achievements</h2>
                <p>Smooth process, outstanding achievements. Highlighting the smooth and efficient process from job search to landing a role.</p>
            </div>

            <div className='recruitment-process'>

                <div className='info'>

                    <div className='process-item'>
                        <div className='icon-group'>
                            <FileUser className='process-icon' size={32} />
                            <span className='step-title'>Curriculum Vitae</span>
                            <CircleCheck className='check-icon' size={24} />
                        </div>
                        <div className='icon-group'>
                            <User className='process-icon' size={32} />
                            <span className='step-title'>Personal Data</span>
                            <CircleCheck className='check-icon' size={24} />
                        </div>
                    </div>
                    <div className='r-info'>
                        <h4>Complete your profile</h4>
                        <p>Build a standout professional profile to attract top recruiters instantly.</p>
                    </div>
                </div>


                <div className='info'>
                    <div className='upload'>
                        
                        <div className='process-item'>
                            <div>
                            <Upload className='process-icon' size={48} /> <div className='info-a'> Upload complete</div>
                        </div>
                        </div>
                        <div className='r-info'>
                            <h4>Directly portfolio upload</h4>
                            <p>Showcase your best work through an integrated portfolio system.</p>
                        </div>
                    </div>
                </div>

                <div className='info'>
                    <div className='calendar'>
                        <div className='process-item'>
                            <Calendar className='process-icon' size={48} />
                        </div>
                        <div className='r-info'>
                            <h4>Scheduling & selection</h4>
                            <p>Coordinate interviews seamlessly with our built-in scheduler.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recruit;
