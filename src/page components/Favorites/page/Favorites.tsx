import {motion} from "framer-motion";

import FavoritesList from "../components/favorites list/FavoritesList.tsx";
import Header from "../../../UI components/Header/header/Header.tsx";
import NoAuthWarning from "../../../UI components/no auth warning/no auth warning/NoAuthWarning.tsx";

import {useSelector} from "react-redux";

export default function Favorites() {

    const isLogin = useSelector((state:any) => state.isLogin.value);
    return (
        <>
            <div className="favorites">

                {isLogin ? (
                    <div className="mainContent">
                        <Header/>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 2}}
                            className="favoritesListMotion"
                        >
                            <FavoritesList/>
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