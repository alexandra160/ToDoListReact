import React from 'react';
import ToDo from './ToDo';
import Button from '@material-ui/core/Button';

 
 
const ToDoList = ({toDoList, handleToggle, handleFilter, handleTaskUpdate}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} toDoList={toDoList} handleTaskUpdate={handleTaskUpdate} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <Button id="clearTasks" variant="contained" color="primary" type="submit"onClick={handleFilter}>Delete Completed</Button>
        </div>
    );
 };
 
export default ToDoList;