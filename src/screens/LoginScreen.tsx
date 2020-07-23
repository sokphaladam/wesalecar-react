import React from "react";
import { Content } from "../components/Content";
import { useFirebase } from "react-redux-firebase";
import { useHistory, Link } from "react-router-dom";

type dataInputType = {
  email: HTMLInputElement | null;
  password: HTMLInputElement | null;
};

export function LoginScreen() {
  let data: dataInputType = {
    email: null,
    password: null,
  };

  const firebase = useFirebase();
  const history = useHistory();

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      const login = await firebase.login({
        email: data.email!.value,
        password: data.password!.value,
      });
      sessionStorage.setItem("user", JSON.stringify(login.user));
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignInFacebook = async () => {
    try {
      const login = await firebase.login({
        provider: 'facebook',
        type: 'popup'
      });
      sessionStorage.setItem('user', JSON.stringify(login.user));
      firebase.firestore().collection('users').doc().set({
        username: login.user?.displayName,
        email: login.user?.email,
        role: 'guest',
        providerId: login.user?.providerId
      })
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Content>
      <div className="row">
        <div className="col-lg-7 mb-5">
          <h3 className="mb-3">Welcome Message</h3>
          <p>
            Adipiscing lacinia pede proin vulputate habitasse donec adipiscing.
            Cubilia Interdum hac turpis et dignissim vehicula porta nostra
            dictum nostra semper. Dictumst congue dictum. Nam massa id, netus
            interdum amet Metus turpis scelerisque aptent sapien penatibus
            potenti.
          </p>
          <h4 className="mb-5 mt-5 underline">
            Keep in a mind a few basic password roules :
          </h4>
          <ul className="list-squire-check">
            <li>Change your passwords periodically</li>
            <li>Avoid re-using password for multiple site</li>
            <li>Use complex characters including uppercase and number</li>
          </ul>
        </div>
        <div className="col-lg-5">
          <div className="form-icon-left rounded form-boder p-5 shadow">
            <h3 className="mb-4 down-line">User Login</h3>
            <form onSubmit={handleSignIn}>
              <div className="row">
                <div className="col-md-12">
                  <label>Email Address</label>
                  <input
                    type="email"
                    ref={(ref) => (data.email = ref)}
                    className="form-control bg-light"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label>Password</label>
                  <input
                    type="password"
                    ref={(ref) => (data.password = ref)}
                    className="form-control bg-light"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
                <br/>
                <br/>
                <div className="col-md-12">
                  <Link to="/register" className="btn-link text-dark">
                    {" "}
                    Don't have any account? Register or
                  </Link>
                </div>
                <br/>
                <br/>
                <div className="col-md-12">
                  <button 
                    type="button" 
                    className="btn btn-primary btn-block" 
                    style={{
                      backgroundColor: '#3b5998'
                    }}
                    onClick={handleSignInFacebook}
                  >
                    {" "}
                    Sing in with facebook
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Content>
  );
}
