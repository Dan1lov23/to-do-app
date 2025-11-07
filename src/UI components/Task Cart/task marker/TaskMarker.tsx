import "./taskMarker.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX, faCheck} from "@fortawesome/free-solid-svg-icons";

import {GetTasksFunction, UpdateTaskMarkerFunction} from "../../../API/TaskUseFunction.ts";

import type {Task} from "../../../interfaces/interfaces.ts";
import {setTasks} from "../../../redux/slices/tasks slice/tasksSlice.ts";

import {useDispatch} from "react-redux";

export default function TaskMarker({task}:{task:Task}) {

    const dispatch = useDispatch();

    async function getTasksFunction() {
        const tasks = await GetTasksFunction();
        dispatch(setTasks(tasks));
    }

    const setTaskMarkerFunction = () => {
        if (task.marker === "true") {
            UpdateTaskMarkerFunction("false", task.taskId);
        } else if (task.marker === "false") {
            UpdateTaskMarkerFunction("true", task.taskId);
        }
        getTasksFunction();
    }



    return (
        <>
            <div className="taskMarker">
                {task.marker === "true" ? (
                    <p onClick={() => setTaskMarkerFunction()}>Задача выполнена <FontAwesomeIcon icon={faCheck}/></p>
                ) : (
                    <p onClick={() => setTaskMarkerFunction()} style={{color: "red"}}>Задача не выполнена <FontAwesomeIcon icon={faX}/></p>
                )}
            </div>
        </>
    )
}
