import "./taskCart.css";

import type {Task} from "../../../interfaces/interfaces.ts";

import TaskCartContainer from "../task cart container/TaskCartContainer.tsx";

export default function TaskCart({task}:{task:Task}) {
    return (
        <>
            <div className="taskCart">
                <TaskCartContainer task={task}/>
            </div>
        </>
    )
}