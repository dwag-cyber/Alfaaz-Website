import React from 'react';
import './Footer.css';
import Logo from './Logo.svg';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return <div>
        <div className='FOOTER'>
            <div className='footer'>
                <div className='footer-content'>
                <div className='leftcontent'>
                    <div className='contact'>
                        <div className='contactus'>CONTACT US</div>
                        <div className='location'>
                            <div className='Location-icon'><LocationOnIcon /></div>
                            <div className='location-content'>
                                <div className='line'>Jaypee university of information technology</div>
                                <div className='line'>Waknaghat, HP-173234</div>
                                <div className='line'>India</div>
                                <div className='line'>Phone: +91-xxxxxxxxxx</div>
                                <div className='line'>Email: xyz@gmail.com</div>
                            </div>
                        </div>
                        <div className='phone'>
                            <div classname='Phone-icon'><PhoneIcon /></div>
                            <div className='phone-content'>
                                <div className='line'>ADITYA SAXENA - President JYC</div>
                                <div className='line'>+91 75990 03687</div>
                                <div className='line'>RAVI SRIVASTAVA - Coordinator</div>
                                <div className='line'>Literary And Debating Club</div>
                                <div className='line'>+91 81748 80411</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mid-content'>
                    <div className='follow'>
                        <div className='follow-content'>
                            <div className='followuson'>FOLLOW US ON</div>

                            <div className='icons'>
                                <FacebookIcon />
                                <InstagramIcon />
                                <LinkedInIcon />
                            </div>
                        </div>


                    </div>

                    <div className='links'>
                        <div className='links-content'>
                            <div className='quicklinks'>QUICK LINKS</div>
                            <br></br>

                            <div className='qlinks'>
                                <div>-JUIT</div>
                                <div>-JYC</div>
                                <div>-LITERARY AND DEBATING CLUB</div>
                            </div>
                        </div>

                    </div>

                </div>
                </div>
                <img src={Logo} className='logo' alt="xoxo" />
            </div>
            <div class="copyright">Copyright @2022 All Rights Reserved   |   Managed by - Technical Sciences, Movies and Photography Club</div>

        </div>
    </div>;
}

export default Footer;
