import React from 'react';
import './MainSection.css';
import mainSectionBg from '../../assets/bg-videos/main-section.mp4';

const MainSection = ()=>{
    return(
        <>
            <section className='main-section'>
                <video loop autoPlay>
                    <source src={mainSectionBg} type="video/mp4" />
                </video>
                <div className='container'>
                    <div className='content'>
                    <h2>we are <br /> zekry agency<sub>®</sub></h2>
                    </div>
                </div>
            </section>
    </>
    )
}

export default MainSection;