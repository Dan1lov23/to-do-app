import "./usernameInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export default function UsernameInput() {
    return (
        <>
            <div className="registerUsernameInput">
                <div className="inputWrapper">
                    <FontAwesomeIcon icon={faUser} className="icon"/>
                    <input placeholder="Логин" id="registerUsernameInput"/>
                </div>
            </div>
        </>
    )
}