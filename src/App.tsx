import React from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

function App() {
    let tasks1:Array<TasksType>= [
        {id: 1, title: 'Denis', isDone: true},
        {id: 2, title: 'Petr', isDone: true},
        {id: 3, title: 'Sasha', isDone: false}
    ]
    let tasks2:Array<TasksType> = [
        {id: 1, title: 'Karina', isDone: true},
        {id: 2, title: 'Marina', isDone: true},
        {id: 3, title: 'Lena', isDone: false}
    ]
    return (
        <div className="App">
            <Todolist title='Men' tasks={tasks1}/>
            <Todolist title='Women' tasks={tasks2}/>
        </div>
    );
}

export default App;
