import React, { useState,useEffect, useRef } from 'react';
import PlainControl from "../plainControl/PlainControl";
import {useLocale} from "../../context";
import "./AudioPlayer.css"
import Divider from "../divider/Divider";

export default function AudioPlayer(props) {
    const src = props.src
    const locale = useLocale()
    const audioRef = useRef(null);

    function audioEndHandler() {

    }
    function stopPlayHandler() {
        audioRef.current.currentTime = 0;
        audioRef.current.pause()
    }
    function againPlayHandler() {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }

    function readyToPlayHandler() {
        audioRef.current.play();
    }
    return (
        <div>
            <div className="audio-player-controls-container">
                <PlainControl id="again-control" width={'150px'} onClick={againPlayHandler}>
                    {locale.strings["again"]}
                </PlainControl>
                <Divider width="40px" />
                <PlainControl id="end-control" width={'150px'} onClick={stopPlayHandler}>
                    {locale.strings["end"]}
                </PlainControl>
            </div>
            <audio
                ref={audioRef}
                src={src}
                onEnded={audioEndHandler}
               autoPlay={true}
            />
        </div>
    )
}