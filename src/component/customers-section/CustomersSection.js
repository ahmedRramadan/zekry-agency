import React, { useRef, useState } from 'react';
import './CustomersSection.css'
import { clientsData } from '../../data/Data';
const CustomersSection = ()=>{
    const apparentElementBtn = useRef();
    const [displayDetails,setDisplayDetails] = useState(true);
    const [selectedElement,setSelectedElement] = useState(0);
     
    return (
    <>
        <section className='customers-section'>
            <div className='container'>
                <div className='content'>
                    <h2 className='section-tittle-h2'>our clients</h2>
                    <ul className='clients-box'>
                    {
                        clientsData.map(({tittle,work,country,image,desc},idx)=>{
                            return(
                                <li key={idx}>
                                    <div className='details'>
                                    <h4 className='company-name'>{tittle}</h4>
                                    <div className='type-of-work'>
                                    <p className='ask'>what we do</p>
                                    <p className='question'>{work}</p>
                                    </div>
                                    <div className='country'>
                                    <p className='ask'>country</p>
                                    <p className='question'>{country}</p>
                                    </div>
                                    <span className='show-details' 
                                    ref={apparentElementBtn}
                                    onClick={()=>{
                                        setDisplayDetails(displayDetails);
                                        setSelectedElement(idx)
                                    }}
                                    style={{visibility : idx === selectedElement && displayDetails? 'hidden' : ''}}
                                    >

                                        <span className='arrow'></span>
                                    </span>
                                </div>
                                <span className='apparent-element' style={{display : idx === selectedElement && displayDetails? 'block' : 'none'}}>
                                    <img src={image} className='client-image' alt={tittle} />
                                    <p className='client-description'>{desc}</p>
                                </span>
                            </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </section>
    </>
)
}

export default CustomersSection;