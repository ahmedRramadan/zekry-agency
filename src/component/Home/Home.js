import React from 'react';
import MainSection from '../main-section/MainSection';
import MediaSection from '../media-section/MediaSection';
import NavBar from '../nav-bar/NavBar';
import QuoteSection from '../quote-section/QuoteSection';
import SubSection from '../sub-section/SubSection';
import {quoteData} from '../../data/Data';
import ProjectsSection from '../projects-section/ProjectsSection';
import CustomersSection from '../customers-section/CustomersSection';
import ServicesSection from '../services-section/ServicesSection';
import MethodsSection from '../methods-section/MethodsSection';
import ByeSection from '../bye-section/ByeSection';
import Footer from '../footer/Footer';

const Home = ()=>{
    return (
    <>
        <NavBar />
        <MainSection />
        <SubSection />
        <QuoteSection tittle={quoteData[0].quoteOneTittle} description={quoteData[0].quoteOneDesc}/>
        <MediaSection />
        <QuoteSection tittle={quoteData[1].quoteTwoTittle} description={quoteData[1].quoteTwoDesc}/>
        <ProjectsSection />
        <CustomersSection />
        <MethodsSection />
        <ServicesSection />
        <ByeSection />
        <Footer />

    </>
)
}

export default Home;