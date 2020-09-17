import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

export type FilterValuesType = "all" | "completed" | "active";

function App() {
    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: 'Denis', isDone: true},
        {id: 2, title: 'Alex', isDone: false},
        {id: 3, title: 'Dima', isDone: false},
        {id: 4, title: 'Karina', isDone: true},
        {id: 5, title: 'Marina', isDone: false},
        {id: 6, title: 'Lena', isDone: false}
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");

    function removeTasks(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
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
            <Todolist title='User'
                      tasks={tasksForTodolist}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
