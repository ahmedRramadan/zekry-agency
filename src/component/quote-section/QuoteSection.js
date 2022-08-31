import React from 'react';
import './QuoteSection.css';

const QuoteSection = ({tittle,description})=>{
    return (
    <>
        <div className='quote-section'>
            <div className='container'>
                <div className='content'>
                    <h2>{tittle}​</h2>
                    <span>🚀🚀</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </>
)
}

export default QuoteSection;