import "./app.css";

import {useEffect} from "react";

import {useDispatch} from "react-redux";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import {setIsLogin} from "../redux/slices/is login slice/isLoginSlice.ts";
import {setTasks} from "../redux/slices/tasks slice/tasksSlice.ts";

import Login from "../page components/Login/page/Login.tsx";
import Register from "../page components/Register/page/Register.tsx";
import Home from "../page components/Home/page/Home.tsx";
import Tasks from "../page components/Tasks/page/Tasks.tsx";
import Favorites from "../page components/Favorites/page/Favorites.tsx";
import CreateTaskMobileInterface from "../page components/Create task mobile interaface/page/CreateTaskMobileInterface.tsx";

import {CheckLogin} from "../API/AuthFunctions.ts";
import {GetTasksFunction} from "../API/TaskUseFunction.ts";

export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {

        async function fetchLoginStatus() {
            const loginStatus = await CheckLogin();
            if (loginStatus) {
                dispatch(setIsLogin(true));
            } else {
                dispatch(setIsLogin(false));
            }
        }

        async function getTasksFunction() {
            const tasks = await GetTasksFunction();
           dispatch(setTasks(tasks));
        }

        fetchLoginStatus();
        getTasksFunction();
        GetTasksFunction();
    }, []);

    return (
        <>
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/tasks" element={<Tasks/>}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="/createTask" element={<CreateTaskMobileInterface/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}
