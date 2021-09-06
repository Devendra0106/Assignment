import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <h3>Livine</h3>
            </div>
            <div className="right-part">
                <div className="icon">search</div>
                <div className="icon">notfcn</div>
                <div className="user">
                    <div><strong>Shawn Brooks</strong></div>
                    <div>Active <span><strong>&#709;</strong></span></div>
                </div>
                <div className="profile">
                    <p>pic</p>
                </div>
            </div>
        </div>
    )
}

export default Header
