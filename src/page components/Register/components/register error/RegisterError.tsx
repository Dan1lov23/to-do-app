import "./registerError.css";

export default function RegisterError({error}:{error:string}) {
    return (
        <>
            <div className="registerError">
                <p>{error}</p>
            </div>
        </>
    )
}