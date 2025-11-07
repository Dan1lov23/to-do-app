import "./taskName.css";

export default function TaskName({taskName}:{taskName:string}) {
    return (
        <>
            <div className="taskName">
                <p>{taskName}</p>
            </div>
        </>
    )
}
