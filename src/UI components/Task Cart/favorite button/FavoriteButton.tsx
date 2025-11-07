import "./favoriteButton.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

import type {Task} from "../../../interfaces/interfaces.ts";

import {ChangeFavoriteFunction, GetTasksFunction} from "../../../API/TaskUseFunction.ts";
import {setTasks} from "../../../redux/slices/tasks slice/tasksSlice.ts";

import {useDispatch} from "react-redux";

export default function FavoriteButton({task}:{task:Task}) {

    const dispatch = useDispatch();

    async function getTasksFunction() {
        const tasks = await GetTasksFunction();
        dispatch(setTasks(tasks));
    }

    const changeFavoriteFunction = () => {
        ChangeFavoriteFunction(task.taskId);
        getTasksFunction();
    }

    return (
        <>
            <div className="favoriteButton">
                <p onClick={() => changeFavoriteFunction()}>
                    {task.isFavorite === 'true' ? (
                        <FontAwesomeIcon icon={faStar} color="yellow"/>
                    ) : (
                       <FontAwesomeIcon icon={faStar} color="var(--primary-color)"/>
                    )}
                </p>
            </div>
        </>
    )
}
