import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="left-nav">
                <div>Menu</div>
                <div>Create Purchase Receipt</div>
            </div>
            <div className="right-nav">
                <div>New</div>
                <div>View</div>
                <div>Print</div>
                <div>Delete</div>
                <div>Save as Draft</div>
                <div>Submit</div>
            </div>
        </div>
    )
}

export default Navbar
