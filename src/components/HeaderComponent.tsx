/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

export function HeaderComponent() {
  const firebase = useFirebase();
  const history = useHistory();
  const [user, setUser] = useState(sessionStorage.getItem('user'));

  history.listen(() => {
    setUser(sessionStorage.getItem('user'));
  })

  const handleAuth = () => {
    if (user !== null) {
      firebase.logout();
      sessionStorage.removeItem('user');
      setUser(null);
    }
  }

  return (
    <header className='full-header-modern nav-on-banner fixed-bg-secondary hearder-wesalecar'>
      <div className="main-nav">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg nav-white nav-primary-hover nav-down-line-active">
                <a className="navbar-brand" href="#" style={{ width: 135, height: 30 }}>
                  <img className="nav-logo" src={require('../logowesalecar.png')} alt="Image not found !" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon flaticon-menu flat-small text-white">
                    <i className="fas fa-bars mt-1"></i>
                  </span>
                </button>
                <div className="collapse navbar-collapse ml-2 sm-ml-0">
                  <Link
                    to={user === null ? '/login' : '#'}
                    className="btn btn-success position-absolute top-10 right-minus-15 px-4 rounded-0 d-none d-lg-block"
                    onClick={handleAuth}
                  >
                    {user === null ? 'Sign In' : 'Sing Out'}
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="heard-success"></div>
    </header>
  )
}