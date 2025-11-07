import "./logoutButton.css";

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

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

export default function LogoutButton() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const logoutFunction = () => {
        localStorage.setItem("token", "");
        window.location.reload();
    }

    return (
        <div className="logoutButton">
            <p onClick={() => handleOpen()}>
                <FontAwesomeIcon icon={faRightFromBracket} />
            </p>
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
                        <h1 style={{color: "var(--primary-color)"}}>Выйти из аккаунта ?</h1>
                        <button className="logoutButtonFinalButton" onClick={() => logoutFunction()}>
                            Выйти
                        </button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
