import "./linkToRegister.css";

import {Link} from "react-router-dom";

export default function LinkToRegister() {

    return (
        <>
            <div className="linkToRegister">
                <p>Нет аккаунта ?</p>
                <Link to="/register">
                    <p className="link">Регистрация</p>
                </Link>
            </div>
        </>
    )
}