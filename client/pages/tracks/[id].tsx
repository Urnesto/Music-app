import React, { useState } from "react";
import { ITrack } from "@/types/track";
import MainLayout from "@/layout/MainLayout";
import { useRouter } from "next/router";
import { Button, Grid, TextField } from "@mui/material";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useInput } from "../../hooks/useInput";

const TrackPage = ({ serverTrack }) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const router = useRouter()
    const username = useInput('')
    const text = useInput('')
    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({ ...track, comments: [...track.comments, response.data] })
        } catch (e) {
            console.log(e)
        }
    }
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
                <img src={'http://localhost:5000/' + track.picture} width={200} height={200} />
                <div style={{ marginLeft: 30 }}>
                    <h2>Track name - {track.name}</h2>
                    <h2> Artist - {track.artist}</h2>
                    <h2>Listens - {track.listens}</h2>
                </div>
            </Grid>
            <h2>Data about Track</h2>
            <p>{track.text}</p>
            <h2>Comments</h2>
            <Grid container>
                <TextField
                    {...username}
                    label="Your name"
                    fullWidth
                />
                <TextField
                    {...text}
                    fullWidth
                    label="Your comment"
                    multiline
                    rows={4}
                />
                <Button onClick={addComment}>Sent</Button>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}
