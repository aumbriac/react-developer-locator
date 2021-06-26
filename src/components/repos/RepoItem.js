import React from 'react';
import PropTypes from 'prop-types';



const RepoItem = ({ repo }) => {
  return (
      <div className='list-group-item mx-auto'>
        <h3 className='d-inline'>
          <a className='lead' href={repo.html_url}>{repo.name}</a>
        </h3>
      <span className='badge rounded-pill bg-light text-dark float-end my-2 border'>{repo.language}</span>
      </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
