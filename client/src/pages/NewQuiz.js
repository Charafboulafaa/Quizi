import React from 'react';
import Input from '../components/FormInput';

export default function NewQuiz() {
    return (
        <div className="p-8 flex flex-col max-w-md mx-auto">
            <Input label="Quiz Name" name="quiz_name"/>
            
            <Input label="Question" name="question"/>
            
            <div>
                <Input label="Answer 1" name="answer"/>
                <Input label="Answer 2" name="answer"/>
                <Input label="Answer 3" name="answer"/>
            </div>

            <button>add Question</button>
        </div>
    )
}
