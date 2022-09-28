import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import FormCreate from './components/FormCreate'
import CardUser from './components/CardUser'

function App() {
  //--- ESTADOS 
  const [users, setUsers] = useState()
  const [updateUser, setUpdateUser] = useState()
  //-----PETICION GET DE TODO LOS USUSARIOS --------------------------------
  const getAllUsers = () => {
    const URL = "https://users-crud1.herokuapp.com/users/"

    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getAllUsers();

  }, [])

  return (
    <div className="card_container">
      <h1>CRUD USERS</h1>
      <FormCreate
        getAllUsers={getAllUsers}
        updateUser={updateUser}
        setUpdateUser={setUpdateUser} />
      {
        users?.map(user => (
          <CardUser
            key={user.id}
            user={user}
            getAllUsers={getAllUsers}
            setUpdateUser={setUpdateUser}
          />
        ))
      }

    </div>
  )
}

export default App
