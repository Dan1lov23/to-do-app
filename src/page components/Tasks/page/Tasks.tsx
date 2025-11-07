import TasksList from "../components/tasks list/TasksList.tsx";
import Header from "../../../UI components/Header/header/Header.tsx";
import NoAuthWarning from "../../../UI components/no auth warning/no auth warning/NoAuthWarning.tsx";

import {useSelector} from "react-redux";

import {motion} from "framer-motion";

export default function Tasks() {

    const isLogin = useSelector((state:any) => state.isLogin.value);

    return (
        <>
            <div className="tasks">
                {isLogin ? (
                    <div className="mainContent">
                        <Header/>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 2}}
                            className="tasksListMotion">
                            <TasksList/>
                        </motion.div>
                    </div>
                    ) : (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 2}}
                        className="title"
                    >
                        <NoAuthWarning/>
                    </motion.div>
                )}
            </div>
        </>
    )
}