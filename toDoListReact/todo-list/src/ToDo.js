import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';

const ToDo = ({ todo, handleToggle, toDoList, handleTaskUpdate }) => {
  const handleCheckboxChange = (e) => {
    const isComplete = e.target.checked;
    handleToggle(todo.id, isComplete);
  };

  const [isEditing, setIsEditing] = useState(false); //the button is not clicked yet
  const [newTask, setNewTask] = useState(todo.task); //the task is set to current task

  const handleEditClick = () => { //if the edit button is pressed, we use isEditing to know that the user is changing text 
    if(isEditing === false){
      setIsEditing(true);
    }else setIsEditing(false);
    
  };


const handleTaskSave = () => { //saves the input of the new task, in the place of the old one
  handleTaskUpdate(todo.id, newTask);
  setIsEditing(false);
};


  return (
    <Grid id="formContainer" container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <div
          id={todo.id}
          key={todo.id + todo.task}
          name="todo"
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={todo.complete}
                onChange={handleCheckboxChange}
                name="checkedB"
                color="success"
              />
            }
           
            label={
              isEditing ? (
                <input
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleTaskSave();
                    }
                  }}
                />
              ) : (
                <span>{todo.task}</span>
              )
            }
          />
          <button id="editBtn" onClick={handleEditClick}>
            {isEditing ? 'Close' : 'Edit'}
        </button>
        </div>
      </Grid>
    </Grid>
  );
};
export default ToDo;