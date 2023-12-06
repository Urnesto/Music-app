import React from "react";
import { ITrack } from "@/types/track";
import MainLayout from "@/layout/MainLayout";
import { useRouter } from "next/router";
import { Button, Grid, TextField } from "@mui/material";

const TrackPage = () => {
    const router = useRouter()
    const track: ITrack =
        { _id: '1', name: "track1", artist: "artist1", text: "text1", listens: 0, picture: "http://localhost:5000/uploads/1677163254529.jpg", audio: "http://localhost:5000/uploads/1677163254529.mp3", comments: [] }
    return (
        <MainLayout>
            <Button
                onClick={() => router.push('/tracks')}
                variant={'outlined'}
                style={{ fontSize: 32 }}
            >
                To the list
            </Button>
            <Grid style={{ display: 'flex', margin: '20px 0' }}>
                <img src={track.picture} width={200} height={200} />
                <div style={{ marginLeft: 30 }}>
                    <h2>Track name{track.name}</h2>
                    <h2> Artist - {track.artist}</h2>
                    <h2>Listens - {track.listens}</h2>
                </div>
            </Grid>
            <h2>Data about Track</h2>
            <p>{track.text}</p>
            <h2>Comments</h2>
            <Grid container>
                <TextField
                    label="Your name"
                    fullWidth
                />
                <TextField
                    fullWidth
                    label="Your comment"
                    multiline
                    rows={4}
                />
                <Button>Sent</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Author: {comment.username}</div>
                        <div>Comment: {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    )
}
export default TrackPage
