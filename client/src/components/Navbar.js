import React from 'react';
import {removeToken} from '../services/auth';
import {useHistory, Link} from 'react-router-dom';

export default function Navbar(props) {
    const history = useHistory()

    const handleClick = async() => {
        await removeToken()
        localStorage.removeItem('authToken')
        props.setCurrentUser(null)
        history.push("/login")
    }

    return (
        <div className="bg-teal-400 py-3">
            <div className="container mx-auto flex justify-between">
                <Link to='/' className="text-2xl font-extrabold text-white tracking-wide">Quizi</Link>
                {props.currentUser && <button className="bg-white text-teal-700 py-1 px-2 rounded" type="button" onClick={handleClick}>Sign Out</button>}
            </div>
        </div>
    )
}
