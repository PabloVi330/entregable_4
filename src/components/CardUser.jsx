import axios from 'axios'
import React from 'react'

const CardUser = ({ user , getAllUsers, setUpdateUser}) => {
   //------- ELIMINANDO USUARIO
    const deleteUser = () => {
        const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
        axios.delete(URL)
            .then(res => {
                console.log(res.data)
                getAllUsers()
            })
            .catch(error => console.log(error))
    }

    //----ACTUALIZANDO USUARIO

    const handleUpdateUser = () => {
        setUpdateUser(user)
    }

    return (
        <div className='card_user'>
            <h3>{user.first_name}  {user.last_name}</h3>
            <ul>
                <li>
                    Email: {user.email}
                </li>
                <li>
                    BirthDay: {user.birthday}
                </li>
            </ul>
            <div>
                <button onClick={deleteUser}>Delete</button>
                <button onClick={handleUpdateUser}>Edit</button>
            </div>

        </div>
    )
}

export default CardUser