import "./passwordInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

export default function PasswordInput() {
    return (
        <>
            <div className="registerPasswordInput">
                <div className="inputWrapper">
                    <FontAwesomeIcon icon={faLock} className="icon"/>
                    <input placeholder="Пароль" id="registerPasswordInput"/>
                </div>
            </div>
        </>
    )
}
