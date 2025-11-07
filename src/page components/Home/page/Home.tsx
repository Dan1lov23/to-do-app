import {useSelector} from "react-redux";

import Header from "../../../UI components/Header/header/Header.tsx";
import HomeLogo from "../components/home logo/HomeLogo.tsx";
import NoAuthWarning from "../../../UI components/no auth warning/no auth warning/NoAuthWarning.tsx";

import {motion} from "framer-motion";

export default function Home() {

    const isLogin = useSelector((state:any) => state.isLogin.value);

    return (
        <>
            <div className="home">
                {isLogin ? (
                    <div className="mainContent">
                        <Header/>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 2}}
                            className="title"
                        >
                            <HomeLogo/>
                        </motion.div>
                    </div>
                ) : (
                    <NoAuthWarning/>
                )}
            </div>
        </>
    )
}
