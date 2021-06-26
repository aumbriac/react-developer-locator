import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="card m-3 col-md-3 mx-auto">
            <img src='https://live.staticflickr.com/7320/9639371247_203b6f686a_z.jpg' className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">Created by <b className='text-primary'>Anthony Umbriac</b></h5>
                <p className="card-text">Coded in React.js &amp; Bootstrap 5</p>
                <Link to='/' className='btn btn-dark btn-block my-1 w-100'>
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default About;
