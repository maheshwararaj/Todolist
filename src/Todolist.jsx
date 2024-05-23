import './Todolist.css'

import React, { useEffect, useState } from 'react'

function Todolist() {
  
    const init_tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(init_tasks);
    const [tasks, setTasks] = useState(init_tasks != null ? init_tasks : []);
    const [newTask, setNewTask] = useState("");
    // setTasks(JSON.parse(localStorage.getItem('tasks')))
    
   
 
    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        setTasks([...tasks,newTask]);
        setNewTask("");
       storeInLocal();
    }

    function deleteTask(ind){
        setTasks(tasks.filter((task,index) =>  ind != index));
        storeInLocal();
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] =  [updatedTasks[index-1],updatedTasks[index]] 
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] =  [updatedTasks[index+1],updatedTasks[index]] 
            setTasks(updatedTasks);
        }
    }
    function complete(event){
        event.target.style.textDecoration = "line-through"
    }
    
 
    
    function storeInLocal(){
        const storetasks = [...tasks];
        localStorage.setItem('tasks',JSON.stringify(storetasks));

    }
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div className='input-search'>
                <input type="text"
                    placeholder='Enter a Task..'
                    value = {newTask} 
                    onChange={handleInputChange}/>
                <button className="add-button"
                        onClick={addTask}>
                            Add
                </button>
            </div>

            <ul>
                {tasks.map((task,index) => 
                    <li key={index} className="task-display">
                        <span className="text" 
                              onDoubleClick={(e)=>{ e.target.style.textDecoration = "line-through";
                        }}>{task}</span>
                        <button className="delete-button button" onClick={()=>deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-button button" 
                                onClick={()=>(moveTaskUp(index))}>
                            ☝️
                        </button>
                        <button className="move-button button" 
                                onClick={()=>(moveTaskDown(index))}>
                            👇
                        </button>
                    </li>
                )}
            </ul>
        </div>

    )
}
export default Todolist