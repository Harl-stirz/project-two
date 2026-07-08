
import React, { useState } from 'react';

function Footer() {
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
        <div className='footer'>
            <div className='footer-content'>
                <div>
                    <h1>RECROOT</h1>
                    Connection world-class talent with the industry's most innovative companies
                </div>
                <div>
                    <h3>Quick links</h3>
                    <p>Find Jobs</p>
                    <p>Post a Job</p>
                    <p>Resources</p>
                </div>
                <div>
                    <h3>Support</h3>
                    <p>Contact Us</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h3>Newsletter</h3>
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
            <div className="end">
                <p className="copyright">© 202 Recroot. All rights reserved.</p>
                <div className='lin'>
                    <p>Linkedin</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
