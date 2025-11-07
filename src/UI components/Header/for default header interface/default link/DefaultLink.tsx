import "./defaultLink.css";

import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function DefaultLink({icon, path}:{icon:any, path:string}) {

    return (
        <>
            <div className="link">
                <Link to={path}>
                    <p><FontAwesomeIcon icon={icon} /></p>
                </Link>
            </div>
        </>
    )
}