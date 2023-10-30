import { useState } from 'react';
import axios from 'axios';
import LoginPage from './LoginPage'
import LoadingPage from './LoadingPage'
import DogDisplay from './DogDisplay.js'
import LogOut from './LogOut.js'

function App() {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [loading, setLoading] = useState(false)
  // const [dogBreeds, setDogBreeds] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  const getAuthorized = (username, emailAddress) => {
    setLoading(true)
    setName(username)
    setEmail(emailAddress)
    login()
  }

  const login = async () => {
    try {
      await axios.post('https://frontend-take-home-service.fetch.com/auth/login', {
        name: name,
        email: email,
        withCredentials: true
      })
      setLoggedIn(true)
      setLoading(false)

    }
    catch(error) {
      console.log(error)
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      await axios.post('https://frontend-take-home-service.fetch.com/auth/logout', {
        withCredentials: true
      })

      setLoggedIn(false)
    }
    catch (error){
      console.log(error)
    }
  }

  const getDogBreeds = async () => {
    try {
      const response = await axios.get('https://frontend-take-home-service.fetch.com/dogs/breeds', {
        withCredentials: true
      })

      console.log(response.data)
    }
    catch(error) {
      console.log(error)
    }
    setLoading(false)
  }

  const componentToRender = () => {
    console.log(name, email, loggedIn, loading)
    if ((!name || !email) && !loggedIn && !loading) {
      return <LoginPage getAuthorized={getAuthorized}/>
    }
    else if (loading) {
      return <LoadingPage />
    }
    else {
      return <div>
              <DogDisplay getDogBreeds={getDogBreeds} />
              <LogOut logout={logout}/>


      </div>
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
