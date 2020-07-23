import React from "react";
import { Content } from "../components/Content";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

type dataInputType = {
  name: HTMLInputElement | null;
  email: HTMLInputElement | null;
  password: HTMLInputElement | null;
  repassword: HTMLInputElement | null;
}

export function RegisterScreen() {
  let data: dataInputType = {
    name: null,
    email: null,
    password: null,
    repassword: null
  };
  const firebase = useFirebase();
  const history = useHistory();


  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      if(data.password!.value !== data.repassword!.value) {
        return alert('password not the same!');
      }else {
        await firebase.createUser(
          {
            email: data.email!.value,
            password: data.password!.value,
          }, 
          {
            username: data.name!.value,
            email: data.email!.value,
            role: 'guest',
            providerId: 'password'
          }
        )
        const login = await firebase.login({
          email: data.email!.value,
          password: data.password!.value,
        });
        await firebase.auth().currentUser!.updateProfile({
          displayName: data.name!.value
        });
        sessionStorage.setItem("user", JSON.stringify(login.user));
        history.push("/");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Content>
      <div className="row">
        <div className="col-lg-7 mb-5">
          <h3 className="mb-3 down-line">Welcome Message</h3>
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
            <li>
              <i className="fas fa-house-damage text-primary mr-2"></i> Change
              your passwords periodically
            </li>
            <li>
              <i className="fas fa-house-damage text-primary mr-2"></i> Avoid
              re-using password for multiple site
            </li>
            <li>
              <i className="fas fa-house-damage text-primary mr-2"></i> Use
              complex characters including uppercase and number
            </li>
          </ul>
        </div>
        <div className="col-lg-5">
          <h3 className="mb-4 down-line">Registration</h3>
          <div className="form-icon-left form-boder">
            <form onSubmit={handleRegister}>
              <div className="form-row">
                <div className="col-md-12">
                  <label>Your Name</label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    required
                    ref={ref => data.name = ref}
                  />
                </div>
                <div className="col-md-12">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control bg-light"
                    required
                    ref={ref => data.email = ref}
                  />
                </div>
                <div className="col-md-12">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control bg-light"
                    required
                    ref={ref => data.password = ref}
                  />
                </div>
                <div className="col-md-12">
                  <label>Re-enter Password</label>
                  <input
                    type="password"
                    className="form-control bg-light"
                    required
                    ref={ref => data.repassword = ref}
                  />
                </div>
                <div className="col-md-12 form-check">
                  <button type="submit" className="btn btn-primary mb-3">
                    Sign Up Now
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
