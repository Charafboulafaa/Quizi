import React, {useState} from 'react'
import {loginUser} from '../services/auth'
import {useHistory, Redirect, Link} from 'react-router-dom'

export default function Login(props) {
    let history = useHistory()

    const [formData, setFormData] = useState({username: '', password: ''})

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const userData = await loginUser(formData)
        props.setCurrentUser(userData)
        history.push('/')
    }

    return (
        <form className="bg-white p-8 flex flex-col max-w-md mx-auto" onSubmit={handleSubmit}>
            {props.currentUser && <Redirect to="/"/>}
            <div className="mb-4">
                <label className="block text-gray-900 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900" id="username" type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-900 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-900 mb-3" id="password" type="password" name="password" placeholder="**********" value={formData.password} onChange={handleChange}/>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-teal-400 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                    Sign In
                </button>

                <Link to="/register" className="cursor-pointer text-gray-600">Create an account</Link>
            </div>
        </form>
    )
}
