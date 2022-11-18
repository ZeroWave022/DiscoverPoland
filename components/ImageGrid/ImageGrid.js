import React from "react";

import styles from "./ImageGrid.module.css";

function ImageGrid({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default ImageGrid;
