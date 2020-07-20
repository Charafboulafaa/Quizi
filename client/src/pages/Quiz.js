import React from 'react'

export default function Quiz() {
    return (
        <div className="my-5">
            <h1 className="text-5xl font-bold text-teal-600">The Coldest Sunset</h1>

            <div className="my-8 p-6 text-2xl border-2 border-teal-800 rounded-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>

            <div className="flex justify-evenly">
                <div className="p-4 border border-teal-800 rounded-sm hover:bg-teal-700 hover:text-white">Duis gravida blandit</div>
                <div className="p-4 border border-teal-800 rounded-sm hover:bg-teal-700 hover:text-white">Duis gravida blandit</div>
                <div className="p-4 border border-teal-800 rounded-sm hover:bg-teal-700 hover:text-white">Duis gravida blandit</div>
            </div>
        </div>
    )
}
