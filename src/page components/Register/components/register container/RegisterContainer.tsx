import "./registerContainer.css";

import RegisterTitle from "../register title/RegisterTitle.tsx";
import UsernameInput from "../username input/UsernameInput.tsx";
import PasswordInput from "../password input/PasswordInput.tsx";
import RegisterButton from "../register button/RegisterButton.tsx";
import PasswordRepeatInput from "../password repeat input/PasswordRepeatInput.tsx";
import validatePassword from "../../../../code modules/valifate module/validateModule.ts";
import RegisterError from "../register error/RegisterError.tsx";
import LinkToLogin from "../link to login/LinkToLogin.tsx";
import {RegisterFunction} from "../../../../API/AuthFunctions.ts";

import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function RegisterContainer() {

    const navigate = useNavigate();

    const [error, setError] = useState<string>("");

    const registerFunction = () => {

        setError("");

        const username = document.getElementById("registerUsernameInput") as HTMLInputElement;
        const password = document.getElementById("registerPasswordInput") as HTMLInputElement;
        const passwordRepeat = document.getElementById("registerPasswordRepeatInput") as HTMLInputElement;

        if (username.value.length === 0 || password.value.length === 0 || passwordRepeat.value.length === 0) {
            setError("Заполните поля");
            return false;
        }

        setError(validatePassword(password.value, passwordRepeat.value));


        if (error === "") {
            RegisterFunction(username.value, password.value, setError, navigate);
        }
    }

    return (
        <>
            <div className="registerContainer">
                <RegisterTitle/>
                <UsernameInput/>
                <PasswordInput/>
                <PasswordRepeatInput/>
                <RegisterButton registerFunction={registerFunction}/>
                <RegisterError error={error}/>
                <LinkToLogin/>
            </div>
        </>
    )
}
