import React from 'react'

export default function FormInput(props) {
    return (
        <div className="my-2">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-900" type="text" name="question" placeholder={`Question ${props.index+1}`} value={props.question.question} onChange={(e) => props.handleChange(e, props.index)}/>

            <div className="ml-6">

                {props.question.answers && props.question.answers.map((answer, index) => (
                    <div className="flex justify-center items-center">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 my-1 mr-2 text-gray-900" placeholder={`Answer ${index+1}`} type="text" value={answer.answer}  onChange={(e) => props.handleChange(e, props.index, index)}/>

                        <input type="checkbox" checked={answer.correct ? 'checked' : ''}/>
                    </div>
                ))}

            </div>
        </div>
    )
}
