import React, { useEffect } from "react";
import { HeaderComponent } from "./components/HeaderComponent";
import { useFirebase } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";
import { RouteIndex } from "./routes";

function App() {
  const firebase = useFirebase();
  
  useEffect(() => {
    getUser();
  })

  const getUser = async () => {
    const res = await firebase.auth();
    setTimeout(()=>{
      const user = res.currentUser;
      if(user){
        sessionStorage.setItem('user', JSON.stringify(res.currentUser));
      }
    }, 1000)
  }

  return (
    <BrowserRouter>
      <div className="page-wrapper ui mini">
        <HeaderComponent />
        <RouteIndex />
      </div>
    </BrowserRouter>
  );
}

export default App;
