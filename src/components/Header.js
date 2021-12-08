import React from 'react';
import '../styles/Header.css';
import {FileSearchOutlined} from '@ant-design/icons'

function Header() {

    return (
        <div className='header'>
            <h1>NEWSPAPERS RECORDS <FileSearchOutlined /></h1>
        </div>
    )
}

export default Header

