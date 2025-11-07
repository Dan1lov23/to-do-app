import "./loginContainer.css";

import LoginTitle from "../login title/LoginTitle.tsx";
import UsernameInput from "../username input/UsernameInput.tsx";
import PasswordInput from "../password input/PasswordInput.tsx";
import LoginButton from "../login button/LoginButton.tsx";
import LinkToRegister from "../link to register/LinkToRegister.tsx";

import {LoginFunction} from "../../../../API/AuthFunctions.ts";

import {useState} from "react";

import LoginError from "../login error/LoginError.tsx";

export default function LoginContainer() {

    const [error, setError] = useState<string>("");

    const loginFunction = () => {

        setError("");

        const username = document.getElementById("loginUsernameInput") as HTMLInputElement;
        const password = document.getElementById("loginPasswordInput") as HTMLInputElement;

        if (username.value.length === 0 || password.value.length === 0) {
            setError("Заполните поля");
        } else {
            LoginFunction(username.value, password.value, setError);
        }
    }

    return (
        <>
            <div className="loginContainer">
                <LoginTitle/>
                <UsernameInput/>
                <PasswordInput/>
                <LoginButton loginFunction={loginFunction}/>
                {error.length > 0 ? (
                    <LoginError error={error}/>
                ) : (
                    <div></div>
                )}
                <LinkToRegister/>
            </div>
        </>
    )
}