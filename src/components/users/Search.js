import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import logo from '../layout/logo.svg';
import Alert from '../layout/Alert';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState();

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter a value', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div className='card m-3 p-3 col-md-3 mx-auto'>
      <form onSubmit={onSubmit} className='form'>
        <h1 className='text-center'>React Developer Finder</h1>
          <img src={logo} alt="logo" className='mx-auto d-block' style={{height: '100px'}} />
        <input
          type='text'
          name='text'
          className='form-control mb-3'
          placeholder='Enter A Name to Search Developers'
          value={text}
          onChange={onChange}
          autoComplete='off'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-primary btn-block w-100 mb-3'
        />
        {githubContext.users.length > 0 && (
          <button
            className='btn btn-light btn-block w-100'
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        )}
      </form>
      <Alert />
    </div>
  );
};

export default Search;
