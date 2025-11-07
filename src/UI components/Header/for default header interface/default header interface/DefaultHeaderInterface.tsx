import "./defaultHeaderInterface.css";

import Logo from "../logo/Logo.tsx";
import LinksAndButtonsList from "../links and buttons list/LinksAndButtonsList.tsx";

export default function DefaultHeaderInterface() {
    return (
        <>
            <div className="defaultHeaderInterface">
                <Logo/>
                <LinksAndButtonsList/>
            </div>
        </>
    )
}