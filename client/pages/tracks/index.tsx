import MainLayout from "@/layout/MainLayout";
import React from "react";
import styles from "../../styles/Track.module.scss";
import { useRouter } from "next/router";
import TrackList from "../../components/TrackList";
import { Box, Button, Card, Grid, useTheme } from "@mui/material";
import { ITrack } from "@/types/track";

const Index = () => {
    const router = useRouter();
    const theme = useTheme();

    const tracks: ITrack = [
        {
            _id: "1",
            name: "track1",
            artist: "artist1",
            text: "text1",
            listens: 0,
            picture: "http://localhost:5000/uploads/1677163254529.jpg",
            audio: "http://localhost:5000/uploads/1677163254529.mp3",
            comments: [],
        },
        {
            _id: "2",
            name: "track2",
            artist: "artist2",
            text: "text2",
            listens: 0,
            picture: "http://localhost:5000/uploads/1677163254529.jpg",
            audio: "http://localhost:5000/uploads/1677163254529.mp3",
            comments: [],
        },
    ];

    return (
        <MainLayout>
            <Grid
                container
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                style={{
                    padding: theme.spacing(2)
                }}
            >
                <Card className={styles.card}>
                    <Box>
                        <Grid
                            container
                            justifyContent={"space-between"}

                        >
                            <h1>Track list</h1>
                            <Button onClick={() => router.push("/tracks/create")}>
                                Add track
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;
