import React from "react";
import Head from "next/head";
import Navbar from "../Navbar/navbar";

import styles from "./title.module.css";

const TitleSizes = {
    large: "h1",
    medium: "h2",
    small: "h3",
};

function Title({ size, font, children }) {
    //let fontClass = font && styles[font] ? styles[font] : null;
    
    let titleClass;

    if (font) {
        titleClass = `${styles.title} ${styles[font]}`
    }
    else {
        titleClass = styles.title;
    }

    return (
        <>
            {
                React.createElement(TitleSizes[size], { className: titleClass }, children)
            }
        </>
    );
    
    switch (size) {
        case "large":
            return (
                <div className={styles.container}>
                    <h1>{children}</h1>
                </div>
            );
        case "medium":
            return (
                <div className={styles.container}>
                    <h2>{children}</h2>
                </div>
            );
        case "small":
            return (
                <div className={styles.container}>
                    <h3>{children}</h3>
                </div>
            );
        default:
            return (
                <div className={styles.container}>
                    <h4>{children}</h4>
                </div>
            );
    }
}

export default Title;
