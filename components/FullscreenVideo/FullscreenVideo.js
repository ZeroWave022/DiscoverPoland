import React from "react";
import ReactDOM from "react-dom";

import styles from "./FullscreenVideo.module.css";

function FullscreenVideo({ src }) {
    const [height, setHeight] = React.useState(0);

    function updateHeight() {
        let offsetFromTop = window.innerHeight - ref.current.offsetTop;

        setHeight(offsetFromTop);
    }

    React.useEffect(() => {
        window.addEventListener("resize", updateHeight);
        updateHeight();
    }, []);
    
    let ref = React.useRef(null);
    
    return (
        <div ref={ref} className={styles.container}>
            <video  src={src} autoPlay muted style={{ "height": height }}></video>
            <p className={styles.videoInfo}>All rights belong to their respective owners. <br />Originally filmed by <a href="https://www.youtube.com/c/DKVideoPL/" target="_blank" rel="noreferrer">DK Video</a>, featured <a href="https://www.youtube.com/watch?v=ifVVc8xTas0" target="_blank" rel="noreferrer">here</a>.</p>
        </div>
    );
}

export default FullscreenVideo;
