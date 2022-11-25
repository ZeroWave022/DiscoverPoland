import React, { useEffect } from "react";
import Image from "next/image";

import styles from "./FullscreenImage.module.css";

function FullscreenImage({ src, alt, text }) {
    
    function updateTransform(image) {
        let offsetTop = image.offsetTop;
        let value = (window.scrollY - offsetTop) / 100;
        
        let text = image.children[1];
        
        if (value > 0) {
            text.classList.add(styles.highlighted);
        }
        else {
            text.classList.remove(styles.highlighted);
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
            <h1 className={styles.imageText}>{text}</h1>
        </div>
    );
}

export default FullscreenImage;
