import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "completed" | "active";

function App() {
    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: 'Denis', isDone: true},
        {id: v1(), title: 'Alex', isDone: false},
        {id: v1(), title: 'Dima', isDone: false},
        {id: v1(), title: 'Karina', isDone: true},
        {id: v1(), title: 'Marina', isDone: false},
        {id: v1(), title: 'Lena', isDone: false}
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");

    function removeTasks(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }
    function addTask( title: string) {
        let newTask = { id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
    }
    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist title="User"
                      tasks={tasksForTodolist}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
