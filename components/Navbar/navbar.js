import Link from "next/link";
import React from "react";

import styles from "./navbar.module.css";

/**
 * @param {Object} props
 * @param {Object} props.config
 * @param {Array} props.config.links
 * @returns
 */
function Navbar({ config }) {
    let activeClass = (index) => index == config.active ? styles.active : null;
    
    let navHome = (
        <Link href="/" className={activeClass(0)} key={0}>
            Home
        </Link>
    );

    let navLinksAside = config.links.map((link, index) => {
            return (
                <Link href={link.src} className={activeClass(index + 1)} key={index + 1}>
                    {link.name}
                </Link>
            );
        });

    return (
        <div className={styles.container}>
            <div id={styles.homeLink}>{navHome}</div>
            <div id={styles.linksAside}>{navLinksAside}</div>
        </div>
    );
}

export default Navbar;
