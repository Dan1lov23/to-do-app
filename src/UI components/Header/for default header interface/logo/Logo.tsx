import "./logo.css";

import {Link} from "react-router-dom";

export default function Logo() {
    return (
        <>
            <div className="defaultHeaderInterfaceLogo">
                <Link to="/">
                    <p>Taskrello</p>
                </Link>
            </div>
        </>
    )
}