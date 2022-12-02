import React, { useEffect } from "react";
import Image from "next/image";

import styles from "./FullscreenImage.module.css";

function FullscreenImage({ src, alt, title, description }) {
    
    function updateTransform(image) {
        let offsetTop = image.offsetTop;
        let value = (window.scrollY - offsetTop) / 100;
        
        if (value > 0) {
            image.classList.add(styles.highlighted);
        }
        else {
            image.classList.remove(styles.highlighted);
        }
    }

    useEffect(() => {
        let images = document.querySelectorAll(`.${styles.container}`);

        window.addEventListener("scroll", () => {
            images.forEach((image) => {
                updateTransform(image);
            });
        });
    });
    
    return (
        <div className={styles.container}>
            <Image src={src} alt={alt} />
            <h1 className={styles.imageText}>{title}</h1>
            <span className={styles.description}>{description}</span>
        </div>
    );
}

export default FullscreenImage;
