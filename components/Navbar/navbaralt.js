import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import styles from "./navbar.module.css";

function NavbarAlt({ config }) {
    /*let navbarLinks = config.links.map((link, index) => {
        let activeClass = router.pathname == link.src ? styles.active : '';

        return (<Link href={link.src} className={activeClass} key={index}>
            {link.name}
        </Link>)
    });*/

    /*let navbarLinks = config.links.map((link, index) => {
        
        
        return (<Link href={link.src} className={(index == config.active) ? styles.active : null} key={index}>
            {link.name}
        </Link>)
    });

    return (
        <div className={styles.container}>
            {navbarLinks}
        </div>
    )*/

    return (
        <div className={styles.container}>
            {
                config.links.map((link, index) => {
                    return (<Link href={link.src} className={(index == config.active) ? styles.active : null} key={index}>
                        {link.name}
                    </Link>)
                })
            }
        </div>
    )
}

export default NavbarAlt;
