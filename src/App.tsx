import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";
import {v1} from 'uuid';

export type FilterValuesType = "all" | "completed" | "active";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {
    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: 'Denis', isDone: true},
        {id: v1(), title: 'Alex', isDone: false},
        {id: v1(), title: 'Dima', isDone: false},
        {id: v1(), title: 'Karina', isDone: true},
        {id: v1(), title: 'Marina', isDone: false},
        {id: v1(), title: 'Lena', isDone: false}
    ]);

    function removeTasks(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks]);
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {

    }


    let todolist: Array<TodolistType> = [
        {id: v1(), title: "User1", filter: "active"},
        {id: v1(), title: "User2", filter: "completed"}
    ]
    return (
        <div className="App">
            {
                todolist.map((tl) => {
                    let tasksForTodolist = tasks;
                    if (tl.filter === "active") {
                        tasksForTodolist = tasks.filter(t => t.isDone === true);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasks.filter(t => t.isDone === false);
                    }
                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTasks={removeTasks}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                    />
                })
            }

        </div>
    );
}

export default App;
