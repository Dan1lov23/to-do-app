import "./usernameInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export default function UsernameInput() {
    return (
        <>
            <div className="loginUsernameInput">
                <div className="inputWrapper">
                    <FontAwesomeIcon icon={faUser} className="icon"/>
                    <input placeholder="Логин" id="loginUsernameInput"/>
                </div>
            </div>
        </>
    )
}
