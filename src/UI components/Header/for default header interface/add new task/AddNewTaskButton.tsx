import "./addNewTaskButton.css";

import {useState} from "react";

import {useDispatch} from "react-redux";

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";

import CreateTaskInterfaceLogo from "../../../Create task interface/create task interface logo/CreateTaskInterfaceLogo.tsx";
import TaskInput from "../../../Create task interface/Inputs/task input/TaskInput.tsx";
import DescriptionInput from "../../../Create task interface/Inputs/description input/DescriptionInput.tsx";
import CreateTaskMobileInterfaceButton from "../../../../page components/Create task mobile interaface/components/create task mobile interface create button/CreateTaskMobileInterfaceCreateButton.tsx";

import {CreateTaskFunction, GetTasksFunction} from "../../../../API/TaskUseFunction.ts";

import {setTasks} from "../../../../redux/slices/tasks slice/tasksSlice.ts";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid var(--primary-color)',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
};

export default function AddNewTaskButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const createTaskFunction = () => {

        setError("");

        if (taskName.length === 0 || description.length === 0) {
            setError("Заполните все формы");
        }

        if (error.length === 0) {
            CreateTaskFunction(taskName, description, localStorage.getItem("username"));
        }

        handleClose();

        async function getTasksFunction() {
            const tasks = await GetTasksFunction();
            dispatch(setTasks(tasks));
        }

        getTasksFunction();
    }

    return (
        <div className="addNewTaskButton">
            <button onClick={() => handleOpen()}>
                <FontAwesomeIcon icon={faPencil} />
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <CreateTaskInterfaceLogo/>
                        <TaskInput taskName={taskName} setTaskName={setTaskName}/>
                        <DescriptionInput description={description} setDescription={setDescription}/>
                        <CreateTaskMobileInterfaceButton createTaskFunction={createTaskFunction} />
                        {error.length > 0 ? (
                            <p style={{color: "red", fontSize: "24px"}}>{error}</p>
                        ) : (
                            <p></p>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
