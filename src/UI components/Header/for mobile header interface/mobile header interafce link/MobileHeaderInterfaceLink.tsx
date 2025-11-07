import "./mobileHeaderInterfaceLink.css";

import {Link} from "react-router-dom";

export default function MobileHeaderInterfaceLink({linkName, link}:{linkName:string, link:string}) {

    return (
        <>
            <div className="mobileHeaderInterfaceLink">
                <Link to={link}>
                    <p>{linkName}</p>
                </Link>
            </div>
        </>
    )
}