import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Menu from "./components/Menu";
import HeaderBlock from "./components/HeaderBlock";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Account from "./components/Account";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is SignIn
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //User is SignOut.
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {menuOpen ? <Menu /> : ""}
            <HeaderBlock />
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/account" /> : <Login />}
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/account">
            {!user ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Account menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                {menuOpen ? <Menu /> : ""}
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
