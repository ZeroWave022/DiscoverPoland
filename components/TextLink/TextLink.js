import React from "react";
import Image from "next/image";

import styles from "./TextLink.module.css";
import Title from "../Title/title";
import Link from "next/link";

function TextLink({href, children}) {
    return (
        <>
        <Link href={href} className={styles.textLink}>{children}</Link>
        </>
    );
}

export default TextLink;
