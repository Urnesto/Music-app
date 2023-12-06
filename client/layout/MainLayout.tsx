import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/MainLayout.module.scss"
import Player from "../components/Player";
import Container from "@mui/material/Container";
const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container className={styles.margin}>
                {children}
            </Container>
            <Player />
        </>
    )
}
export default MainLayout
