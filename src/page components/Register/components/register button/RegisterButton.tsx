import "./registerButton.css";

export default function RegisterButton({registerFunction}:{registerFunction:() => void}) {
    return (
        <>
            <div className="registerButton">
                <button onClick={registerFunction}>
                    Регистрация
                </button>
            </div>
        </>
    )
}