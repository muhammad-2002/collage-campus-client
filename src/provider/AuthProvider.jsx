import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import React, { createContext, useEffect, useState } from "react";
import auth from "../firbase.init";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const loginEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  const githubProvider = () => {
    return signInWithPopup(auth, GithubProvider);
  };
  const logOut = () => {
    return signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    logOut,
    loginEmailPassword,
    googleProvider,
    setUser,
    githubProvider,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
