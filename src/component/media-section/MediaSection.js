import React from 'react';
import mediaSectionOneBg from '../../assets/bg-videos/media-section-one.mp4';
const MediaSection = ()=>{
    return (
    <>
        <section className='media-section video-section'>
            <video loop autoPlay>
                <source src={mediaSectionOneBg} type="video/mp4" />
            </video>
            <div className='container'>
                <div className='content'>
                    <div className='media-details' style={{    position: 'absolute', bottom: '5%'}}>
                        <h3 className='section-details-h3'>Do you want to be a hero brand?</h3>
                        <a className='section-details-btn' href='#home' target='_blank'>Here is a brief</a>
                    </div>
                </div>
            </div>
        </section>
    </>
)
}

export default MediaSection;