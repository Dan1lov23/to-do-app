import "./favoritesList.css";

import {useSelector} from "react-redux";

import {useState, useEffect} from 'react';

import type {Task} from "../../../../interfaces/interfaces.ts";
import TaskCart from "../../../../UI components/Task Cart/task cart/TaskCart.tsx";

export default function FavoritesList() {

    const tasks = useSelector((state:any) => state.tasks.tasks);

    const [favoritesTasks, setFavoritesTasks] = useState<Task[]>([]);

    useEffect(() => {
        const favoritesTasksArray:Task[] = [];
        for (let a = 0; a < tasks.length; a++) {
            if (tasks[a].isFavorite === 'true') {
                favoritesTasksArray.push(tasks[a]);
            }
        }
        setFavoritesTasks(favoritesTasksArray);
    }, []);

    return (
        <>
            <div className="favoritesList">
                {favoritesTasks.map((task:Task, index:number) => (
                    <div key={index}>
                        <TaskCart task={task}/>
                    </div>
                ))}
            </div>
        </>
    )
}