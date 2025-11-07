import "./noAuthWarningContainer.css";

import NoAuthWarningLink from "../no auth warning link/NoAuthWarningLink.tsx";

export default function NoAuthWarningContainer() {
    return (
        <>
            <div className="noAuthWarningContainer">
                <NoAuthWarningLink/>
            </div>
        </>
    )
}