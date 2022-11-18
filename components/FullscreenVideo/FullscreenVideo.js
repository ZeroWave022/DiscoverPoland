import React from "react";

import styles from "./FullscreenVideo.module.css";

function FullscreenVideo({ src, videoInfo }) {
    const [height, setHeight] = React.useState(0);
    let ref = React.useRef(null);

    function updateHeight() {
        let offsetFromTop = window.innerHeight - ref.current.offsetTop;

        setHeight(offsetFromTop);
    }

    React.useEffect(() => {
        window.addEventListener("resize", updateHeight);
        updateHeight();
    }, []);
    
    return (
        <div ref={ref} className={styles.container}>
            <video src={src} autoPlay muted loop style={{ "height": height }}></video>
            <p className={styles.videoInfo}>{videoInfo}</p>
        </div>
    );
}

export default FullscreenVideo;
