import "./linksAndButtonsList.css";

import DefaultLink from "../default link/DefaultLink.tsx";
import LogoutButton from "../logout button/LogoutButton.tsx";
import AddNewTaskButton from "../add new task/AddNewTaskButton.tsx";

import {faHome, faTasks, faStar} from "@fortawesome/free-solid-svg-icons";

export default function LinksAndButtonsList() {

    const linksArray = [
        {icon: faHome, path: "/"},
        {icon: faTasks, path: "/tasks"},
        {icon: faStar, path: "/favorites"}
    ]

    return (
        <>
            <div className="linksAndButtonsList">
                {linksArray.map((link, index: number) => (
                    <div key={index} className="linkP">
                        <DefaultLink icon={link.icon} path={link.path}/>
                    </div>
                ))}
                <div className="linkP">
                    <LogoutButton/>
                </div>
                <div className="linkP">
                    <AddNewTaskButton/>
                </div>
            </div>
        </>
    )
}