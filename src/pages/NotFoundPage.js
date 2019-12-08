import React from 'react';
import {Link}  from 'react-router-dom';


const NotFoundPage = () => {
    return <div>
        < img 
        src = "NotFound.jpg"
        alt = ""
        style = {
            {
                width: 400,
                height: 400,
                display: 'block',
                margin: 'auto',
                position: 'relative',
                marginTop: 75
            }
        }
        />
        <center style= {{ fontSize: 30 }}><Link to="/">Return to Home Page</Link></center>
    </div>
}

export default NotFoundPage;