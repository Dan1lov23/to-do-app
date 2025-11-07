import "./mobileHeaderInterfaceButton.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faX} from "@fortawesome/free-solid-svg-icons";

import MobileHeaderInterfaceLogoutButton from "../mobile header interface logout button/MobileHeaderInterfaceLogoutButton.tsx";
import MobileHeaderInterfaceLink from "../mobile header interafce link/MobileHeaderInterfaceLink.tsx";

export default function MobileHeaderInterfaceButton() {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: '100%', height: '100vh'}} role="presentation">
            <List style={{textAlign: "right", marginRight: "40px"}}>
                <FontAwesomeIcon icon={faX} fontSize="40px" onClick={toggleDrawer(false)}/>
            </List>
            <Divider />
            <MobileHeaderInterfaceLogoutButton/>
            <MobileHeaderInterfaceLink linkName={"Главная"} link={""}/>
            <MobileHeaderInterfaceLink linkName={"Задачи"} link={"/tasks"}/>
            <MobileHeaderInterfaceLink linkName={"Избраноое"} link={"/favorites"}/>
            <MobileHeaderInterfaceLink linkName={"Создать задачу"} link={"/createTask"}/>
        </Box>
    );

    return (
        <div className="mobileHeaderInterfaceButton">
            <button onClick={() => setOpen(true)}>
                <FontAwesomeIcon icon={faList}/>
            </button>
            <Drawer
                anchor="top"
                open={open}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}
