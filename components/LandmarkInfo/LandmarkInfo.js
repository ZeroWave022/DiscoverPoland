import React from "react";

import styles from "./LandmarkInfo.module.css";

function LandmarkInfo({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default LandmarkInfo;
