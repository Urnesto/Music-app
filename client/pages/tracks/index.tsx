import MainLayout from "@/layout/MainLayout";
import React from "react";
import styles from "../../styles/Track.module.scss";
import { useRouter } from "next/router";
import TrackList from "../../components/TrackList";
import { Box, Button, Card, Grid, useTheme } from "@mui/material";
import { ITrack } from "@/types/track";
import Player from "@/components/Player";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";
import { fetchTracks } from "../../store/action-creators/track";
import { wrapper, NextThunkDispatch } from "../../store";
const Index = () => {
    const router = useRouter();
    const theme = useTheme();
    const { tracks, error } = useTypedSelector((state) => state.track);
    const { deleteTrack } = useActions(); // Import the deleteTrack action

    const handleDelete = async (trackId: string) => {
        // Call the deleteTrack action here
        await deleteTrack(trackId);
        // After deleting, you might want to refetch the tracks or update the store
        // For example, you can dispatch(fetchTracks()) here
    };

    if (error) {
        return (
            <MainLayout>
                <h1>{error}</h1>
            </MainLayout>
        );
    }
    return (
        <MainLayout>
            <Grid
                container
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                style={{
                    padding: theme.spacing(2),
                }}
            >
                <Card className={styles.card}>
                    <Box>
                        <Grid container justifyContent={"space-between"}>
                            <h1>Track list</h1>
                            <Button onClick={() => router.push("/tracks/create")}>
                                Add track
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} onDelete={handleDelete} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        const dispatch = store.dispatch as NextThunkDispatch
        await dispatch(await fetchTracks())
    }
)
