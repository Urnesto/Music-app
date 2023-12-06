import React from "react";
import { IconButton, Grid } from "@mui/material"
import { PlayArrow, Pause } from "@mui/icons-material"
import styles from "../styles/player.module.scss"
import { ITrack } from "@/types/track";
const Player = () => {
    const track: ITrack = { _id: '1', name: "track1", artist: "artist1", text: "text1", listens: 0, picture: "http://localhost:5000/uploads/1677163254529.jpg", audio: "http://localhost:5000/uploads/1677163254529.mp3", comments: [] }
    const active = false;
    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {!active
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
            </Grid>
        </div>
    )
}
export default Player
