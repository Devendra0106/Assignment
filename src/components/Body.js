import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

function Body() {
    return (
        <div className='main-body'>
            <Content/>
            <Sidebar />
        </div>
    )
}

export default Body
