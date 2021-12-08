import React from 'react';
import '../styles/Footer.css';
import { InstagramFilled, LinkedinFilled, FacebookFilled, TwitterSquareFilled } from '@ant-design/icons';

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
            <InstagramFilled /> <TwitterSquareFilled /> <FacebookFilled /> <LinkedinFilled />
            </div>
            <p> &copy; 2021 jorgekarkour15@gmail.com </p>
        </div>
    )
}

export default Footer
