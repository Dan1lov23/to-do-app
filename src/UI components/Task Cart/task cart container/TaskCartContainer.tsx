import "./taskCartContainer.css";

import type {Task} from "../../../interfaces/interfaces.ts";

import TaskName from "../task name/TaskName.tsx";
import TaskDescription from "../task description/TaskDescription.tsx";
import ChangeTaskButton from "../change task button/ChangeTaskButton.tsx";
import FavoriteButton from "../favorite button/FavoriteButton.tsx";

import MarkerAndDeleteButton from "../marker and delete button/MarkerAndDeleteButton.tsx";

export default function TaskCartContainer({task}:{task:Task}) {
    return (
        <>
            <div className="taskCartContainer">
                <FavoriteButton task={task}/>
                <TaskName taskName={task.taskName}/>
                <TaskDescription description={task.taskDescription}/>
                <MarkerAndDeleteButton task={task}/>
                <ChangeTaskButton task={task}/>
            </div>
        </>
    )
}
