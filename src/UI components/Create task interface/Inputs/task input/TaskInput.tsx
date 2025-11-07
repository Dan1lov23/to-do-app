import "./taskInput.css";

export default function TaskInput({taskName, setTaskName}:{taskName:string, setTaskName:(value:any) => void}) {

    return (
        <>
            <div className="taskInput">
                <input placeholder="Введите задачу" id="taskInput" maxLength={20} onChange={(e) => setTaskName(e.target.value)} value={taskName}/>
            </div>
        </>
    )
}