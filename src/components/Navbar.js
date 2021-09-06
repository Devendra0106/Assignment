import React from 'react';
import './Navbar.css';
import { Button } from '@material-ui/core';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    return (
        <div className="navbar">
            <div className="left-nav">
                <div className="menu"><MenuIcon/></div>
                <div className="title">Create Purchase Receipt</div>
            </div>
            <div className="right-nav">
                <div>
                    <Button variant="outlined" size="small" color="primary" startIcon={<CreateNewFolderOutlinedIcon />}>New</Button>
                </div>
                <div>
                    <Button variant="outlined" size="small" color="primary" startIcon={<VisibilityOutlinedIcon />}>View</Button>
                </div>
                <div>
                    <Button variant="outlined" size="small" color="primary" startIcon={<PrintOutlinedIcon />}>Print</Button>
                </div>
                <div>
                    <Button variant="outlined" size="small" color="primary" startIcon={<DeleteOutlinedIcon />}>Delete</Button>
                </div>
                <div>
                    <Button variant="outlined" size="small" color="primary" startIcon={<BookmarksOutlinedIcon/>}>Save as draft</Button>
                </div>
                <div>
                    <Button variant="contained" size="small" color="primary" startIcon={<SendOutlinedIcon/>}>submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
