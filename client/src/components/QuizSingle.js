import React from 'react'

export default function QuizSingle(props) {
    return (
        <div className="w-full mx-3 my-5 sm:mx-0 sm:w-2/5 md:w-2/5 lg:w-23-perc shadow-lg">
            <img className="w-full" src="https://picsum.photos/300/150" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.quiz.name}</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
        </div>
    )
}
