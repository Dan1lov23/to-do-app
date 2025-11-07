import "./taskDescription.css";

export default function TaskDescription({description}:{description:string}) {
    return (
        <>
            <div className="taskDescription">
                <p>{description}</p>
            </div>
        </>
    )
}