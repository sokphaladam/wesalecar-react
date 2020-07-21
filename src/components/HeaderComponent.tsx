/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

export function HeaderComponent(){
  let body: any;
  const firebase = useFirebase();
  const history = useHistory();
  const [position, setPosition] = useState(window.pageYOffset);
  const [user, setUser] = useState(sessionStorage.getItem('user'));

  history.listen(()=>{
    setUser(sessionStorage.getItem('user'));
  })

  setTimeout(()=>{
    setPosition(window.pageYOffset)
    body = document.body;
    body.onscroll = () => {
      setPosition(window.pageYOffset)
    }
  }, 500)

  const handleAuth = () => {
    if(user !== null){
      firebase.logout();
      sessionStorage.removeItem('user');
      setUser(null);
    }
  }

  return(
    <header className={`full-header-modern nav-on-banner fixed-bg-secondary ${position > 200 ? 'fixed-top': ''}`}>
      <div className="main-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg nav-white nav-primary-hover nav-down-line-active">
                <a className="navbar-brand" href="#">
                  <img className="nav-logo" src={require('../assets/images/logo/1.png')} alt="Image not found !"/>
                </a>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								  <span className="navbar-toggler-icon flaticon-menu flat-small text-white">
                    <i className="fas fa-bars mt-1"></i>
                  </span>
								</button>
                <div className="collapse navbar-collapse ml-2 sm-ml-0">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
											<Link to="/" className="nav-link" href="contact.html">Shop+</Link>
										</li>
                    <li className="nav-item dropdown">
											<Link to="#" className="nav-link" href="contact.html">About+</Link>
										</li>
                    <li className="nav-item dropdown">
											<Link to="#" className="nav-link" href="contact.html">Contact+</Link>
										</li>
                  </ul>
                  <ul className="navbar-nav ml-auto mr-100 d-1350-none">
										<li className="nav-item">
											<Link to="#" className="nav-link" href="#">+1 828-376-0532</Link>
										</li>
										<li className="nav-item">
											<Link to="#" className="nav-link" href="#">carhut@support.com</Link>
										</li>
									</ul>
                  <Link 
                    to={user === null ? '/login': '#'}
                    className="btn btn-primary position-absolute top-0 right-minus-15 py-3 px-4 rounded-0 h-100 d-none d-lg-block"
                    onClick={handleAuth}
                  >
                    {user === null ? 'Sign In': 'Sing Out'}
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}