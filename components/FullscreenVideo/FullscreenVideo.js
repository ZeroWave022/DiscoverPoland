import React from "react";
import ReactDOM from "react-dom";
import Head from 'next/head';
import Navbar from "../Navbar/navbar.js";

import styles from "./FullscreenVideo.module.css";

function FullscreenVideo({ src }) {
    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
        setHeight(window.innerHeight - ref.current.offsetTop);
    }, []);
    
    let ref = React.useRef(null);
    
    return (
        <div className={styles.container}>
            <video ref={ref} src={src} autoPlay muted></video>
            <p className={styles.videoInfo}>All rights belong to their respective owners. <br />Originally filmed by <a href="https://www.youtube.com/c/DKVideoPL/" target="_blank" rel="noreferrer">DK Video</a>, featured <a href="https://www.youtube.com/watch?v=ifVVc8xTas0" target="_blank" rel="noreferrer">here</a>.</p>
        </div>
    );
}

export default FullscreenVideo;
