import React from 'react';
import './Footer.css';
import fbBg from '../../assets/icons/facebook-icon.png'
import igBg from '../../assets/icons/instagram-icon.png'
const Footer = ()=>{
    return (
    <>
        <footer>
            <div className='container'>
                <div className='content'>
                    <div className='contact-details'>
                        <div className='mobile-and-email'>
                            <a href='tel:+201060003934'>+201060003934</a>
                            <a href='mailto:zekry@gmail.com'>zekry@gmail.com</a>
                            <span>or</span>
                            <a href='#home' className='section-details-btn'>here is a brief </a>
                        </div>
                        <div className='address-and-social'>
                            <p>Egypt-Fayoum</p>
                            <span>Follow US</span>
                            <br />
                            <a href='facebook.com' target='_blank'><img src={fbBg} alt='facebook' /></a> 
                            <a href='instagram.com' target='_blank'><img src={igBg} alt='instagram' /></a> 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
)
}

export default Footer;