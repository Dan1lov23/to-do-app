import "./createTaskMobileInterfaceContainer.css";

import CreateTaskMobileInterfaceButton from "../create task mobile interface create button/CreateTaskMobileInterfaceCreateButton.tsx";
import TaskInput from "../../../../UI components/Create task interface/Inputs/task input/TaskInput.tsx";
import DescriptionInput from "../../../../UI components/Create task interface/Inputs/description input/DescriptionInput.tsx";
import CreateTaskInterfaceLogo from "../../../../UI components/Create task interface/create task interface logo/CreateTaskInterfaceLogo.tsx";
import {CreateTaskFunction, GetTasksFunction} from "../../../../API/TaskUseFunction.ts";

import {setTasks} from "../../../../redux/slices/tasks slice/tasksSlice.ts";

import {useDispatch} from "react-redux";

import {useState} from "react";

import {useNavigate} from "react-router-dom";

export default function CreateTaskMobileInterfaceContainer() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");

    const [error, setError] = useState("");

    const createTaskFunction = () => {

        setError("");

        if (taskName.length === 0 || description.length === 0) {
            setError("Заполните все формы");
        }

        if (error.length === 0) {
            CreateTaskFunction(taskName, description, localStorage.getItem("username"));
        }


        async function getTasksFunction() {
            const tasks = await GetTasksFunction();
            dispatch(setTasks(tasks));
        }

        getTasksFunction();
        navigate("/tasks");
    }

    return (
        <>
            <div className="createTaskMobileInterfaceContainer">
                <CreateTaskInterfaceLogo/>
                <TaskInput taskName={taskName} setTaskName={setTaskName} />
                <DescriptionInput description={description} setDescription={setDescription} />
                <CreateTaskMobileInterfaceButton createTaskFunction={createTaskFunction} />
            </div>
        </>
    )
}
