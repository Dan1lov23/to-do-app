import "./passwordInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

export default function PasswordInput() {
    return (
        <>
            <div className="loginPasswordInput">
                <div className="inputWrapper">
                    <FontAwesomeIcon icon={faLock} className="icon"/>
                    <input placeholder="Пароль" id="loginPasswordInput"/>
                </div>
            </div>
        </>
    )
}
