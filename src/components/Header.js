import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Avatar from '@material-ui/core/Avatar';
import image from '../statics/images/profilepic.jpg';

function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <h3>Livine</h3>
            </div>
            <div className="right-part">
                <div className="icon"><SearchIcon /></div>
                <div className="icon"><NotificationsActiveOutlinedIcon /></div>
                <div className="user">
                    <div>Shawn Brooks</div>
                    <div>Active <span><strong>&#709;</strong></span></div>
                </div>
                <div className="profile">
                <Avatar alt="Remy Sharp" src={image} />
                </div>
            </div>
        </div>
    )
}

export default Header
