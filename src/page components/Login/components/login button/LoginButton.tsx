import "./loginButton.css";

export default function LoginButton({loginFunction}:{loginFunction:() => void}) {
    return (
        <>
            <div className="loginButton">
                <button onClick={loginFunction}>
                    Войти
                </button>
            </div>
        </>
    )
}
