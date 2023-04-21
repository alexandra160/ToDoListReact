import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

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
        <form onSubmit={handleSubmit}>
            <input id="inputTask" value={userInput} type="text" onChange={handleChange} placeholder="Add your next item here"/>
            <Button id="submitBtn" variant="contained" color="primary" type="submit">
              Submit
            </Button>
        </form>
    );
};

export default ToDoForm;