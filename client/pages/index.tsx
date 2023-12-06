import React from "react";
import styles from '../styles/Home.module.scss'
import MainLayout from "@/layout/MainLayout";
const Index = () => {
    return (
        <>
            <MainLayout>
                <div className={styles.center}>
                    <h1>Welcome</h1>
                    <h3>To the music app</h3>
                </div>
            </MainLayout>

        </>
    )
}

export default Index
