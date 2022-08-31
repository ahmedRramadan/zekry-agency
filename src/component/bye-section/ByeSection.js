import React from 'react';
import byeBg from '../../assets/bg-videos/bye-section.mp4'
const ByeSection = ()=>{
    return (
    <>
        <section className='bye-section video-section '>
            <video loop autoPlay>
                <source src={byeBg} type="video/mp4" />
            </video>
        </section>
    </>
)
}

export default ByeSection;