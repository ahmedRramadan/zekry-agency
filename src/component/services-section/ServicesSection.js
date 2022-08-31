import React from "react";
import './ServicesSection.css';
import { ServicesData } from "../../data/Data";

const ServicesSection = ()=>{
    return(
        <>
            <section className="services-section">
                <div className="container">
                    <div className="content">
                        <h2 className="section-tittle-h2">our services</h2>
                        <div className="services-box">

                            {
                                ServicesData.map(({tittle,description},idx)=>{
                                    return(
                                        <div className="item">
                                        <div className={`shape-${idx}`}>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <h3>{tittle}</h3>
                                        <p>{description}</p>
                                    </div>
                                    )
                                
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ServicesSection;