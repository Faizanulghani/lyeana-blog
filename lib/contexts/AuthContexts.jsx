"use client";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return unsub;
  }, []);

  const handleSignInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };
  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };
  return (
    <AuthContext.Provider
      value={{ user, isLoading, error, handleSignInWithGoogle, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
