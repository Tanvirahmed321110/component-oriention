import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Pages/Login/Firebase/Firebase.init";

initializeAuth()

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth,user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {});
  };


  return {
    user,
    googleSignIn,
    logOut,
  };
};

export default useFirebase;
