import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <div className='container'>
        <Link to='/' className='btn btn-light mb-3'>
          <i className='fa fa-search'></i>&ensp;Return To Search
        </Link>
      </div>
      <div className='col-md-5 mx-auto'>

        <div className='card mb-5 text-center mx-auto'>
          <img
            src={avatar_url}
            className='rounded-circle border my-3 mx-auto'
            alt=''
            style={{ width: '220px' }}
          />
        {name && (
          <Fragment>
            <h3 className='my-1'>{name}</h3>
          </Fragment>
        )}
          {login && (
            <Fragment>
              <h5>({login})</h5>
            </Fragment>
          )}
        {company && (
          <Fragment>
            <h6>Works at {company}</h6>
          </Fragment>
        )}
          {location && (
            <Fragment>
            <h6>Located in {location}</h6>
            </Fragment>
          )}
          {blog && (
            <Fragment>
              <a href={blog}>{blog}</a>
            </Fragment>
          )}
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
        </div>
        <div className='text-center'>
          <a href={html_url} className='btn btn-dark my-3'><i className="fab fa-github"></i>&ensp;
            Visit Github Profile
            </a>
        </div>
        <div className='my-3'>
          <div className='badge mx-3 bg-primary'>Followers: {followers}</div>
          <div className='badge mx-3 bg-danger'>Following: {following}</div>
          <div className='badge mx-3 bg-warning'>Public Repos: {public_repos}</div>
          <div className='badge mx-3 bg-success'>Public Gists: {public_gists}</div>
        </div>
      </div>
      <div className="container mb-5">
        <Repos repos={repos} />
      </div>
    </div>
    </Fragment>
  );
};

export default User;
