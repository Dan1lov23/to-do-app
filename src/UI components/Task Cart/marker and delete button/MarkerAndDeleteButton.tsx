import "./markerAndDeleteButton.css";

import type {Task} from "../../../interfaces/interfaces.ts";

import TaskMarker from "../task marker/TaskMarker.tsx";
import DeleteTaskButton from "../delete task button/DeleteTaskButton.tsx";

export default function MarkerAndDeleteButton({task}: {task:Task}) {
    return (
        <>
            <div className="markerAndDeleteButton">
                <TaskMarker task={task}/>
                <DeleteTaskButton task={task}/>
            </div>
        </>
    )
}
