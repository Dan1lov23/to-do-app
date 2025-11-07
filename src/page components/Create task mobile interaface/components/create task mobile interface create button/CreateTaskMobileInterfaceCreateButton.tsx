import "./createTaskMobileInterfaceButton.css";

export default function CreateTaskMobileInterfaceButton({createTaskFunction}:{createTaskFunction: () => void}) {
    return (
        <>
            <div className="createTaskMobileInterfaceButton">
                <button onClick={() => createTaskFunction()}>
                    Создать задачу
                </button>
            </div>
        </>
    )
}