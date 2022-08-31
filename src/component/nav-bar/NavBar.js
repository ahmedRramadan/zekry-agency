import React, { useState } from 'react';
import './NavBar.css';
import fbIcon from '../../assets/icons/facebook-icon.png';
import igIcon from '../../assets/icons/instagram-icon.png';
import logo from '../../assets/icons/logo-icon.png'
const NavBar = ()=>{
        const [hiddenSideNav, setHiddenSideNav] = useState(true);

return (

        <>                    
        <header>
                <div className='container'>
                <nav>
                        <a href='#home'><h1>Zekry Agency</h1></a>
                        <button onClick={()=>setHiddenSideNav(!hiddenSideNav)}>hello</button> 
                </nav>
                </div>
        </header>
        <div className={!hiddenSideNav ? 'side-nav' : 'side-nav hidden'}>
                <button className='close-btn' onClick={()=>setHiddenSideNav(!hiddenSideNav)}>close</button>
                <form>
                        <label className='form-tittle'>to say hello</label>
                        <input type='text' placeholder='say hello' required />
                        <input type="email" placeholder='email' required />
                        <textarea placeholder='your message' required/>
                        <input type='submit' value='send'  />
                </form>
                <div className='conact-details'>
                        <div className='social-media'>
                                <a href='facebook.com' target='_blank'><img src={fbIcon} alt='facebook'/></a>
                                <a href='instagram.com' target='_blank'><img src={igIcon} alt='instagram'/></a>
                        </div>
                        <div className='phone-and-emails'>
                                <a href='tel:+201118623766' >+201060003934</a>
                                <a href='mailto:zekry@gmail.com' target='_blank'>info@zekry.net</a>
                                <span>address: <br/> Egypt-Fayoum</span>
                        </div>
                </div>
        </div>

</>
)
}

export default NavBar;