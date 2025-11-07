import "./linkToLogin.css";

import {Link} from "react-router-dom";

export default function LinkToLogin() {
    return (
        <>
            <div className="linkToLogin">
                <p>Есть аккаунт ?</p>
                <Link to="/login">
                    <p className="link">Войти</p>
                </Link>
            </div>
        </>
    )
}
