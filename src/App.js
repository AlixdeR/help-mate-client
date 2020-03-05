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
import Conversation from './views/Conversation'
import MesMessages from './views/MesMessages'
import { ProtectedRoute } from "./auth/ProtectedRoute";


function App() {
  const { isLoading } = useAuth();
  const [currentUser, setCurrentUser] = useState({});
  const UserContextValue = {
    currentUser,
    setCurrentUser
  };
  const [searchResults, setSearchResults] = useState([]);
  const[typeFromHome, setTypeFromHome] = useState([]);

  const handleSearchResults = results => {
    console.log("R", results)
    if (!results) return setSearchResults([]);
    if (results) return setSearchResults(results.dbRes);
    console.log("SR", searchResults)
  };

  const handleTypeHome = e => {
    console.log("hey app js", e.target.id)
    setTypeFromHome(e.target.id)
  }



  return (
    <UserContext.Provider value={UserContextValue}>
      {isLoading ? (
        null
      ) : (
     <React.Fragment>
     <NavBar 
       searchClbk={handleSearchResults}
     />
      <main id="content_main">
         <Switch>
              <Route exact path="/" render={(routeProps)=>(<Home {...routeProps} handleTypeHome={handleTypeHome}/>)} /> />
              <Route exact path="/mes-messages/:mon_id" component={MesMessages} />
              <Route exact path="/messages/:to_id" component={Conversation} />
              <Route exact path="/profil/:id" component={UserPublicProfile} />
              <ProtectedRoute path="/profil/:id/modifier-mon-compte" component={UserEditProfile} />
              <Route path="/profil/:id/annonces" component={UserAds} />
              <Route exact path="/mon-annonce" component={CreateAd} />
              <ProtectedRoute exact path="/editer-mon-annonce/:id" component={EditAd} />
              <Route exact path="/annonces" render={(routeProps)=>(<AdsDisplayed {...routeProps} adsSearched={searchResults} typeFromHome={typeFromHome}/>)} />
              <Route exact path="/annonces/:id" component={Ad} />
              <Route path="/signin" component={SignIn} />
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