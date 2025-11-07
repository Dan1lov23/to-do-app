import "./mobileHeaderInterface.css";

import Logo from "../logo/Logo.tsx";
import MobileHeaderInterfaceButton from "../mobile interface header button /MobileHeaderInterfaceButton.tsx";

export default function MobileHeaderInterface() {
    return (
        <>
            <div className="mobileHeaderInterface">
                <Logo/>
                <MobileHeaderInterfaceButton/>
            </div>
        </>
    )
}