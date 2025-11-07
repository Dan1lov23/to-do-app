import "./changeTaskButton.css";

import {useState} from "react";

import {useDispatch} from "react-redux";

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import TaskInput from "../../Create task interface/Inputs/task input/TaskInput.tsx";
import DescriptionInput from "../../Create task interface/Inputs/description input/DescriptionInput.tsx";
import CreateTaskInterfaceLogo from "../../Create task interface/create task interface logo/CreateTaskInterfaceLogo.tsx";

import {ChangeTaskFunction, GetTasksFunction} from "../../../API/TaskUseFunction.ts";

import {setTasks} from "../../../redux/slices/tasks slice/tasksSlice.ts";

import type {Task} from "../../../interfaces/interfaces.ts";

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

export default function ChangeTaskButton({task}:{task:Task}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [taskName, setTaskName] = useState(task.taskName);
    const [description, setDescription] = useState(task.taskDescription);

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    async function getTasksFunction() {
        const tasks = await GetTasksFunction()
        dispatch(setTasks(tasks));
    }

    const changeTaskFunction = () => {

        console.log(taskName, description);

        setError("");

        if (taskName.length === 0 || description.length === 0) {
            setError("Заполните все формы");
        }

        if (error.length === 0) {
            ChangeTaskFunction(taskName, description, task.taskId);
        }

        handleClose();

        getTasksFunction();
    }

    return (
        <div className="changeTaskButton">
            <button onClick={() => handleOpen()} className="changeTaskButtonStartButton">
                Изменить
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
                        <button className="changeTaskButtonFinalButton" onClick={() => changeTaskFunction()}>
                            Имзенить
                        </button>
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
