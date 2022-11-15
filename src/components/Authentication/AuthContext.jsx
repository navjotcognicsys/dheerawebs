import React,{createContext, useContext, useEffect, useState} from 'react'
import axios from "axios"

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {

  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function login(email, password,){
    setLoading(true)
    console.log(email, password)

    await axios.post('https://dheeratest8.azurewebsites.net/api/v1/registration/login' ,{
      password: password,
      email: email,
    })
    .then(res => {
      // console.log(res.data)
      setLoading(false)
      setCurrentUser(res.data);
      localStorage.setItem('user', JSON.stringify(res.data))
    })
    .catch(function (error) {
      // handle error
      setAuthError(error.response.data)
      setLoading(false)
      console.log(error);
    })
  
  }

  function logout(){
    setCurrentUser(null);
    localStorage.clear();
    console.log('user is logged out');
  }

  const value = {
    currentUser,
    authError,
    loading,
    setAuthError,
    logout,
    login
  }

  useEffect(() => {
    console.log('checks  user')
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      // console.log(loggedInUser)
      setCurrentUser(foundUser);
    }

    return () => {

    }

  },[])

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}
