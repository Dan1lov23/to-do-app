import "./loginError.css";

export default function LoginError({error}:{error:string}) {
    return (
        <>
            <div className="loginError">
                <p>{error}</p>
            </div>
        </>
    )
}