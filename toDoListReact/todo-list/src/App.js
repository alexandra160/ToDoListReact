import React, { useState } from 'react';


//components
import Title from "./Title";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import Menu from "./Menu";


import './index.css';
import './media.css';


function App() {
  let taskData = [];

  const [ toDoList, setToDoList ] = useState(taskData);

  const handleToggle = (id) => { 
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

const handleTaskUpdate = (id, updatedTask) => {
  const updatedToDoList = toDoList.map((task) => {
    if (task.id === id) {
      return { ...task, task: updatedTask };
    }
    return task;
  });
  setToDoList(updatedToDoList);
};

  return (
    <div className="App">
     <Menu/>
     <div id="impContent">
     <Title/>
     <ToDoList id="app" toDoList={toDoList} handleToggle={handleToggle} handleTaskUpdate={handleTaskUpdate} handleFilter={handleFilter}/>
     <ToDoForm addTask={addTask}/>
     </div>

     <div id="dummyContent">
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       </div>
    </div>
  );
}

export default App;
