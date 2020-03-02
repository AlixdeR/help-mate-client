import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth } from "./auth/useAuth";
import UserContext from "./auth/UserContext";
import 'bulma/css/bulma.css';
import './App.css'

import Home from "./views/Home";
import UserPublicProfile from "./views/UserPublicProfile";
import UserEditProfile from "./views/UserEditProfile";
import UserAds from "./views/UserAds";
import CreateAd from "./views/CreateAd";
import AdsDisplayed from "./views/AdsDisplayed";
import Ad from "./views/Ad";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Inbox from "./views/Inbox";
import Admin from "./views/Admin";
import NotFound from "./views/NotFound";
import NavBar from './components/NavBar'
import EditAd from "./views/EditAd"
import Footer from './components/Footer'


function App() {
  const { isLoading } = useAuth();
  const [currentUser, setCurrentUser] = useState({});
  const UserContextValue = {
    currentUser,
    setCurrentUser
  };
  return (
    <UserContext.Provider value={UserContextValue}>
      {isLoading ? (
        null
      ) : (
     <React.Fragment>
     <NavBar />
      <main id="content_main">
         <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profil/:id" component={UserPublicProfile} />
              <Route path="/profil/:id/modifier-mon-compte" component={UserEditProfile} />
              {/* <Route path="/profil/:id/annonces" component={UserAds} /> */}
              <Route exact path="/mon-annonce" component={CreateAd} />
              <Route exact path="/editer-mon-annonce/:id" component={EditAd} />
              <Route exact path="/annonces" component={AdsDisplayed} />
              <Route exact path="/annonces/:id" component={Ad} />
              {/* <Route path="/signin" component={SignIn} /> */}
              <Route path="/signup" component={SignUp} />
              {/* <Route exact path="/messagerie" component={Inbox} /> */}
              {/* <Route exact path="/admin" component={Admin} /> */}
              {/* <Route path="*" component={NotFound} /> */}
            </Switch>
          </main>
          <Footer />
     </React.Fragment>
     )}
    </UserContext.Provider>
  );
}

export default App;
