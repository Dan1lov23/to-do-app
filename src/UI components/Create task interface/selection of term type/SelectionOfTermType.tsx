import "./selectionOfTermType.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faCalendar} from "@fortawesome/free-solid-svg-icons";

export default function SelectionOfTermType({longDateDeadline, shortDateDeadline, setLongDeadlineDate, setShortDeadlineDate}:{longDateDeadline:boolean, shortDateDeadline:boolean, setLongDeadlineDate:any, setShortDeadlineDate:any}) {

    const setLongDeadlineDateFunction = () => {
        setLongDeadlineDate(true);
        setShortDeadlineDate(false);
    }

    const setShortDeadlineDateFunction = () => {
        setLongDeadlineDate(false);
        setShortDeadlineDate(true);
    }

    return (
        <>
            <div className="selectionOfTermType">
                {longDateDeadline ? (
                    <p onClick={() => setLongDeadlineDateFunction()} className="longDeadline">
                        <FontAwesomeIcon icon={faCalendar} size="lg"/>
                    </p>
                ) : (
                    <p onClick={() => setLongDeadlineDateFunction()} className="longDeadline">
                        <FontAwesomeIcon icon={faCalendar} size="lg" color="white"/>
                    </p>
                )}
                {shortDateDeadline ? (
                    <p onClick={() => setShortDeadlineDateFunction()} className="shortDeadline">
                        <FontAwesomeIcon icon={faClock} size="lg"/>
                    </p>
                ) : (
                    <p onClick={() => setShortDeadlineDateFunction()} className="shortDeadline">
                        <FontAwesomeIcon icon={faClock} size="lg" color="white"/>
                    </p>
                )}
            </div>
        </>
    )
}