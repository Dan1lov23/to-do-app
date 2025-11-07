import "./mobileHeaderInterfaceLogoutButton.css";

export default function MobileHeaderInterfaceLogoutButton() {

    const logoutFunction = () => {
        localStorage.setItem("token", "");
        window.location.reload();
    }

    return (
        <>
            <div className="mobileHeaderInterfaceLogoutButton">
                <p onClick={() => logoutFunction()}>Выйти</p>
            </div>
        </>
    )
}