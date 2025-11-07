import "./tasksList.css";

import {useSelector} from 'react-redux';

import type {Task} from "../../../../interfaces/interfaces.ts";

import {useEffect} from "react";

import TaskCart from "../../../../UI components/Task Cart/task cart/TaskCart.tsx";

export default function TasksList() {

    const tasks = useSelector((state:any) => state.tasks.tasks);

    useEffect(() => {
        console.log(tasks);
    }, [tasks])

    return (
        <>
            <div className="tasksList">
                {tasks.map((task:Task, index:number) => (
                    <div key={index}>
                        <TaskCart task={task}/>
                    </div>
                ))}
            </div>
        </>
    )
}
