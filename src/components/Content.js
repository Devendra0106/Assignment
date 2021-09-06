import React from 'react';
import './Content.css';
import { Input, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function Content() {
    return (
        <div className="content">
            <h3>Supplier Details</h3>
            <hr/>
            <TextField id="outlined-basic" label="Supplier Name" variant="outlined" />
            <br/>
            <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                <br/>
                <br/>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Country"
                >
                    <MenuItem value="">
                    <em>--Select--</em>
                    </MenuItem>
                    <MenuItem value={10}>India</MenuItem>
                    <MenuItem value={20}>Australia</MenuItem>
                    <MenuItem value={30}>SA</MenuItem>
                </Select>
            </FormControl>  
            <br/>
            <br/>
            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2021-06-14"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <br/>
            <br/>
            <p>Array of select and text fields</p>
            <TextField id="outlined-basic" label="Supplier Name" variant="outlined" />
            <TextField id="outlined-basic" label="Supplier Name" variant="outlined" />
            <TextField id="outlined-basic" label="Supplier Name" variant="outlined" />
            <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                <br/>
                <br/>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Country"
                >
                    <MenuItem value="">
                    <em>--Select--</em>
                    </MenuItem>
                    <MenuItem value={10}>India</MenuItem>
                    <MenuItem value={20}>Australia</MenuItem>
                    <MenuItem value={30}>SA</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                <br/>
                <br/>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Country"
                >
                    <MenuItem value="">
                    <em>--Select--</em>
                    </MenuItem>
                    <MenuItem value={10}>India</MenuItem>
                    <MenuItem value={20}>Australia</MenuItem>
                    <MenuItem value={30}>SA</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Content
