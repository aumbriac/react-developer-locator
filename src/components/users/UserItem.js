import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url} }) => {
  return (
    <div className='col-lg-4'>
      <div className="card m-3">
          <img
            src={avatar_url}
            alt=''
            className='card-img-top'
          />          
          <div className="card-body">
              <h5 className="card-title text-center">{login}</h5>
            <Link to={`/user/${login}`} className='btn btn-dark btn-block my-1 w-100'>
              <i className="fas fa-user"></i>&emsp;View Profile
            </Link>
          </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
