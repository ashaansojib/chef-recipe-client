import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='p-4 bg-[#2a2a2a] text-white text-center'>
            <div className='my-container md:flex justify-between items-center'>
            <h2 >@ 2023 Sojib | <Link to="/" className='underline'>Grilled Corn</Link> in Mexico</h2>
            <div>
                <Link className='footer-links' to="/">News</Link>
                <Link className='footer-links' to="/">Gallery</Link>
                <Link className='footer-links' to="/">Products</Link>
            </div>
            </div>
        </div>
    );
};

export default Footer;