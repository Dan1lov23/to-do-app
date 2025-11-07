import type {NavigateFunction} from "react-router-dom";

async function LoginFunction (username:string, password:string, setError: (error:string) => void) {
    fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password}),
    })
    .then(res => res.json())
    .then(data => {
        if (data.marker === false) {
            setError(data.body);
        } else {
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            window.location.assign("/");
        }
    })
}

async function RegisterFunction(username:string, password:string, setError: (error:string) => void, navigate:NavigateFunction) {
    fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password})
    })
    .then(res => res.json())
    .then(data => {
        if (data.marker === false) {
            setError(data.error);
        } else {
            navigate("/");
        }
    })
}

async function CheckLogin(): Promise<boolean> {
    try {
        const response = await fetch('http://localhost:3000/auth/loginCheck', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: localStorage.getItem("token") }),
        });
        const data = await response.json();
        return data.marker === true;
    } catch (error) {
        console.error('Ошибка при проверке логина:', error);
        return false;
    }
}

export {LoginFunction, RegisterFunction, CheckLogin};
