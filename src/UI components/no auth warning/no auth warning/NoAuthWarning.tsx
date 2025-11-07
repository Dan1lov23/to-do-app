import "./noAuthWarning.css";

import NoAuthWarningContainer from "../components/no auth warning container/NoAuthWarningContainer.tsx";

export default function NoAuthWarning() {
    return (
        <>
            <div className="noAuthWarning">
                <NoAuthWarningContainer/>
            </div>
        </>
    )
}