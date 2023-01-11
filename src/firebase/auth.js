import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';

const AuthUserContext = createContext({
  authUser: null,
  loading: true,
  signOut: () => {},
});

export function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authStateChanged = async user => {
    if (user) {
      setAuthUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
    } else {
      setAuthUser(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  const signOut = () => auth.signOut();

  return {
    authUser,
    isLoading,
    signOut,
  };
}

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();

  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}

export const useAuth = () => useContext(AuthUserContext);
