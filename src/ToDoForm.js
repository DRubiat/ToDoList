import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input className="input-bar" value={userInput} type="text" onChange={handleChange} placeholder="Enter a New Task..."/>
            <button className="submit-btn">Submit</button>
        </form>
    );
};

export default ToDoForm;