import "./deleteTaskButton.css";


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import {useState} from "react";

import {useDispatch} from "react-redux";

import {DeleteTaskFunction, GetTasksFunction} from "../../../API/TaskUseFunction.ts";

import {removeTask, setTasks} from "../../../redux/slices/tasks slice/tasksSlice.ts";

import type {Task} from "../../../interfaces/interfaces.ts";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid var(--primary-color)',
    boxShadow: 24,
    p: 4,
};

export default function DeleteTaskButton({task}:{task:Task}) {

    const [open, setOpen] = useState(false);    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    async function getTasksFunction() {
        const tasks = await GetTasksFunction();
        dispatch(setTasks(tasks));
    }

    const deleteTaskFunction = () => {
        dispatch(removeTask(task.taskId));
        DeleteTaskFunction(localStorage.getItem('username'), task.taskId);
        getTasksFunction();
        handleClose();
    }

    return (
        <div className="deleteTaskButton">
            <button onClick={() => handleOpen()}>
                <FontAwesomeIcon icon={faTrash} />
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
                        <h1 style={{color: "var(--primary-color)"}}>Удалить задачу ?</h1>
                        <button className="deleteTaskFinalButton" onClick={() => deleteTaskFunction()}>
                            Удалить
                        </button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
