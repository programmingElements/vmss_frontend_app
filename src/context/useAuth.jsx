import {useState, useEffect, useContext, createContext} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('jwt_token'));

    useEffect(() => {
        if (token) {
            // Validate token or fetch user data
            // For simplicity, we'll assume a valid token means logged in
            setUser({username: 'exampleUser'});
        }
    }, [token]);

    const login = async (username, password) => {
        // Simulate API call for login
        const response = await new Promise((resolve) => setTimeout(() => {
            if (username === "user" && password === "pass") {
                resolve({ success: true, token: "fake_jwt_token" });
            } else {
                resolve({ success: false, token: "Invalid Credentials" });
            }
        }, 500));

        if (response.success) {
            localStorage.setItem('jwt_token', response.token);
            setToken(response.token);
            setUser({ username });
            return true;
        } 

        return false;

    }

    const logout = () => {
        localStorage.removeItem('jwt_token');
        setToken(null);
        setUser(null);
    }

    const authContextValue = {
        user,
        token,
        isLoggedInUser: !!user,
        login,
        logout
    }

    return (<AuthContext.Provider value={authContextValue}>
        {children}
    </AuthContext.Provider>)
}


export const useAuth = () => {
  return useContext(AuthContext);
};

/*

import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('jwt_token'));

  useEffect(() => {
    if (token) {
      // Potentially validate token or fetch user data
      // For simplicity, we'll assume a valid token means logged in
      setUser({ username: 'exampleUser' }); // Replace with actual user data
    }
  }, [token]);

  const login = async (username, password) => {
    // Simulate API call for login
    const response = await new Promise(resolve => setTimeout(() => {
      if (username === 'user' && password === 'pass') {
        resolve({ success: true, token: 'fake_jwt_token' });
      } else {
        resolve({ success: false, message: 'Invalid credentials' });
      }
    }, 500));

    if (response.success) {
      localStorage.setItem('jwt_token', response.token);
      setToken(response.token);
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('jwt_token');
    setToken(null);
    setUser(null);
  };

  const authContextValue = {
    user,
    token,
    isLoggedIn: !!user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

*/