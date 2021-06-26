import React from 'react';
import { Fragment } from 'react'

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='text-center'>404 Error</h1>
      <div className='alert alert-secondary w-50 text-center mx-auto'><i className='fa fa-search'></i>&emsp;The page you are looking for does not exist</div>
    </Fragment>
  );
};

export default NotFound;