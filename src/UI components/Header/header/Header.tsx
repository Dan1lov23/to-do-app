import "./header.css";

import DefaultHeaderInterface from "../for default header interface/default header interface/DefaultHeaderInterface.tsx";
import MobileHeaderInterface from "../for mobile header interface/mobile header interface/MobileHeaderInterafce.tsx";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="defHeader">
                    <DefaultHeaderInterface/>
                </div>
                <div className="mobHeader">
                    <MobileHeaderInterface/>
                </div>
            </div>
        </>
    )
}