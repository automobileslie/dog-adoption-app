import { useEffect, useState } from 'react';
import axios from 'axios';
import LoginPage from './LoginPage'
import LoadingPage from './LoadingPage'

function App() {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [logInCompleted, setLogInCompleted] = useState(false)
  const [loading, setLoading] = useState(false)

  const getAuthorized = (username, emailAddress) => {
    setLoading(true)
    setName(username)
    setEmail(emailAddress)
    login()
  }

  const login = async () => {
    try {
      const response = await axios.post('https://frontend-take-home-service.fetch.com/auth/login', {
        name: 'carlie',
        email: 'automobileslie@gmail.com',
        withCredentials: true
      })
      setLogInCompleted(true)
    }
    catch(error) {
      console.log(error)
    }
    setLoading(false)
  }

  const logout = async () => {
    try {
      const response = await axios.post('https://frontend-take-home-service.fetch.com/auth/logout', {
      })
    }
    catch (error){
      console.log(error)
    }
  }

  const componentToRender = () => {
    if ((!name || !email) && !logInCompleted && !loading) {
      return <LoginPage getAuthorized={getAuthorized}/>
    }
    else if (loading) {
      return <LoadingPage />
    }
  }


  return (
    <div>
      <h1>Dog Adoption</h1>
      {componentToRender()}
    </div>
  );
}

export default App;
