import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormCreate = ({ getAllUsers, updateUser, setUpdateUser }) => {
    const { register, reset, handleSubmit } = useForm()

    useEffect(() => {
        if (updateUser) {
            reset(updateUser)
        }
    }, [updateUser])
    
    const  defaultData = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
    }
    const registerUser = (data) => {
        const URL = "https://users-crud1.herokuapp.com/users/"
        axios.post(URL, data)
            .then(res => {
                console.log(res)
                getAllUsers()
            })
            .catch(error => console.log(error))
    }

    const updateUserr = (data) => {
        const URL = `https://users-crud1.herokuapp.com/users/${updateUser.id}/`
        axios.patch(URL, data)
            .then(res => {
                console.log(res)
                getAllUsers()
                reset(defaultData)
            })
            .catch(error => console.log(error))
    }


    const submitUser = (data) => {
        if (updateUser) {
            updateUserr(data)
            setUpdateUser()
        } else {
            registerUser(data)
            reset(defaultData)
        }

    }



    return (
        <div className='form_container'>
            
            <form className='form' onSubmit={handleSubmit(submitUser)}>
            <h2 className='form_title'>Create New User</h2>
                <ul className='form_list'>
                    <li className='form_li'>
                        <label className='form_label' htmlFor="name">Name  </label> 
                        <input className='form_input' {...register("first_name")} type="text" id='name' />
                    </li>
                    <li className='form_li'>
                        <label className='form_label' htmlFor="last_name">Last Name  </label>
                        <input className='form_input' {...register("last_name")} type="text" id='last_name' />
                    </li>
                    <li className='form_li'>
                        <label className='form_label' htmlFor="email"> Email </label>
                        <input className='form_input' {...register("email")} type="email" id='email' />
                    </li>
                    <li className='form_li'>
                        <label className='form_label'  htmlFor="password">Password </label>
                        <input className='form_input' {...register("password")} type="password" id="password" />
                    </li>
                    <li className='form_li'>
                        <label className='form_label' htmlFor="birthday">Birthday </label>
                        <input className='form_input' {...register("birthday")} type="date" id='birthday' />
                    </li>
                </ul>

                <button className='form_btn'>{updateUser ? 'Update' : 'Create'}</button>

            </form>

        </div>
    )
}

export default FormCreate