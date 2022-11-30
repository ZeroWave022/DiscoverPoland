import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";

import MenuImage from "@public/images/icons/menu.png";

/**
 * @param {Object} props
 * @param {Object} props.config
 * @param {Array} props.config.links
 * @returns
 */
function Navbar({ config }) {
    const [mobileShown, showMobile] = React.useState(false);
    
    let activeClass = (index) => index == config.active ? `${styles.navLink} ${styles.active}` : styles.navLink;

    function toggleMobileMenu(event) {
        event.preventDefault();
        showMobile(!mobileShown);
    }
    
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
            <div className={styles.home}>{navHome}</div>
            <div className={styles.linksAside}>{navLinksAside}</div>
            <div className={styles.mobileIcon}>
                <Link href="" onClick={toggleMobileMenu}>
                    <Image src={MenuImage} alt="" />
                </Link>
            </div>
            <div className={mobileShown ? styles.mobileMenu : styles.hidden}>
                {navLinksAside}
            </div>
        </div>
    );
}

export default Navbar;
