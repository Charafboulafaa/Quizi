import React from 'react'

export default function login() {
    return (
        <div className="bg-white p-8 flex flex-col max-w-md mx-auto">
            <div className="mb-4">
                <label className="block text-gray-900 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900" id="username" type="text" placeholder="Username"/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-900 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-900 mb-3" id="password" type="password" placeholder="**********"/>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-teal-400 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" type="button">
                    Sign In
                </button>
            </div>
        </div>
    )
}
