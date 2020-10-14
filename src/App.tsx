import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";
import {v1} from 'uuid';
import { AddItemForm } from './AddItemForm';

export type FilterValuesType = "all" | "completed" | "active";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {


    function removeTasks(id: string, totodolistId: string) {
        let tasks = tasksObj[totodolistId];
        let filteredTasks = tasks.filter(t => t.id !== id);
        tasksObj[totodolistId] = filteredTasks;
        setTasks({...tasksObj});
    }

    function addTask(title: string, totodolistId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let tasks = tasksObj[totodolistId];
        let newTasks = [task, ...tasks];
        tasksObj[totodolistId] = newTasks;
        setTasks({...tasksObj});
    }

    function changeStatus(taskId: string, isDone: boolean, totodolistId: string) {
        let tasks = tasksObj[totodolistId];
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone
            setTasks({...tasksObj});
        }
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists]);
        }
    }

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "User1", filter: "active"},
        {id: todolistId2, title: "User2", filter: "completed"}
    ]);
    let removeTodolist = (todolistId: string) => {
        let filteredTodolist = todolists.filter(tl => tl.id !== todolistId);
        setTodolists(filteredTodolist);
        delete tasksObj[todolistId];
        setTasks({...tasksObj});
    }

    let [tasksObj, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: 'Denis', isDone: true},
            {id: v1(), title: 'Alex', isDone: false},
            {id: v1(), title: 'Dima', isDone: false},
            {id: v1(), title: 'Karina', isDone: true},
            {id: v1(), title: 'Marina', isDone: false},
            {id: v1(), title: 'Lena', isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: 'Denis', isDone: true},
            {id: v1(), title: 'Alex', isDone: false}
        ]
    })
    return (
        <div className="App">
            <AddItemForm addItem={() =>{}} id={"kmkp"}/>
            {
                todolists.map((tl) => {
                    let tasksForTodolist = tasksObj[tl.id];
                    if (tl.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
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
                        removeTodolist={removeTodolist}
                    />
                })
            }

        </div>
    );
}

export default App;
