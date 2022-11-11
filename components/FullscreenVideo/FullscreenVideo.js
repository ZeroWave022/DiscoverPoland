import React from "react";
import ReactDOM from "react-dom";

import styles from "./FullscreenVideo.module.css";

function FullscreenVideo({ src, videoInfo }) {
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
            <video src={src} autoPlay muted loop style={{ "height": height }}></video>
            <p className={styles.videoInfo}>{videoInfo}</p>
        </div>
    );
}

export default FullscreenVideo;
