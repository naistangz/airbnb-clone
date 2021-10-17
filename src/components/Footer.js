import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='footer'>
            <p>© {year} Airbnb clone! No rights reserved - this is a demo!</p>
            <p>Privacy • Terms • Sitemap • Company Details</p>
        </div>
    )
}

export default Footer
