import React from 'react'

export default function FormInput(props) {
    return (
        <div className="mb-4">
            <label className="block text-left text-gray-900 text-sm font-bold mb-2">
                {props.label}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900" type="text" placeholder={props.label} name={props.name}/>
        </div>
    )
}
