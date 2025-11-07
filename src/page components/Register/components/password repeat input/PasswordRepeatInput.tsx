import "./passwordRepeatInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

export default function PasswordRepeatInput() {
    return (
        <>
            <div className="passwordRepeatInput">
                <div className="inputWrapper">
                    <FontAwesomeIcon icon={faLock} className="icon"/>
                    <input placeholder="Повторите пароль" id="registerPasswordRepeatInput"/>
                </div>
            </div>
        </>
    )
}