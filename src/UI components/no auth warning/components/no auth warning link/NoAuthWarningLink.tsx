import "./noAuthWarningLink.css";

import {Link} from "react-router-dom";

export default function NoAuthWarningLink() {
    return (
        <>
            <div className="noAuthWarningLink">
                <p>Вы не авторизованы</p>
                <Link to="/login">
                    <p className="noAuthWarningLinkP">Войти</p>
                </Link>
            </div>
        </>
    )
}
