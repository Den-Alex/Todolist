import React from "react";
import {FilterValuesType} from "./App";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}
export type PropsType = {
    title: string
    tasks: Array<TasksType>
    removeTasks: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t =>
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => { props.removeTasks(t.id)}}>X</button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button onClick={() => { props.changeFilter("all")}}>All</button>
                <button onClick={() => { props.changeFilter("completed")}}>Active</button>
                <button onClick={() => { props.changeFilter("active")}}>Completed</button>
            </div>
        </div>
    )
}