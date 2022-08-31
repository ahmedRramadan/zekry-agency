import React, { useRef, useState } from 'react';
import './MethodsSection.css'
import  methosSectionBg from '../../assets/bg-videos/methods-section.mp4'
const MethodsSection = ()=>{
    const [otherSide,setOtherSide] = useState(false);
    const clickHandler = ()=>{
        setOtherSide(!otherSide)
    }
    return (
    <>
        <section className='methods-section'>
        <video loop autoPlay style={{transform: otherSide? 'translate(-50%)' : 'translate(0)'}}>
                <source src={methosSectionBg} type="video/mp4" />
            </video>
            <div className='container'>
                <div className='content'> 
                    <div className='methods-details' style={{transform: otherSide? 'translateX(-100vw)' : 'translateX(0)'}}>
                    <h3 className='section-details-h3'>Do you want to watch </h3>
                    <button className='section-details-btn' onClick={clickHandler}>our methods</button>
                </div>
                <span className='prev-side' style={{display: otherSide? 'block' : 'none'}} onClick={clickHandler}>🚀</span>
                <div className='right-side-methods'style={{transform: otherSide? 'translateX(0)' : 'translateX(150%)'} }>
                    <h3>our <br/> <span>Methods</span></h3>
                    <ul>
                        <li>Visual identity design</li>
                        <li>Illustration</li>
                        <li>Market analysis</li>
                        <li>Strategy</li>
                        <li>Marketing management</li>
                        <li>Brand systems design</li>
                    </ul>
                </div>
                </div>
            </div>
        </section>

    </>
)
}

export default MethodsSection;