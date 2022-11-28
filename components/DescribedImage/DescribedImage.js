import React from "react";
import Image from "next/image";

import styles from "./DescribedImage.module.css";

function DescribedImage({ src, alt, description }) {
    return (
        <div className={styles.container}>
            <Image src={src} alt={alt} />
            <span>{description}</span>
        </div>
    );
}

export default DescribedImage;
