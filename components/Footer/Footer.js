import React from "react";
import Image from "next/image";
import Link from "next/link";

import Title from "@components/Title/Title.js";
import TextLink from "@components/TextLink/TextLink.js";

import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.general}>
                <h1>Discover Poland</h1>
                <TextLink href="/cities">Cities</TextLink>
                <TextLink href="/blog">Blog</TextLink>
                <TextLink href="/about">About</TextLink>
            </div>
            <div>
                <Title size="large">Social Media</Title>
                <div className={styles.socials}>
                    <Link href="https://facebook.com/" target="_blank">
                        <Image src="/images/icons/facebook.png" width={50} height={50} alt=""/>
                    </Link>

                    <Link href="https://instagram.com/" target="_blank">
                        <Image src="/images/icons/instagram.png" width={50} height={50} alt=""/>
                    </Link>

                    <Link href="https://twitter.com/" target="_blank">
                        <Image src="/images/icons/twitter.png" width={50} height={50} alt=""/>
                    </Link>

                    <Link href="https://youtube.com/" target="_blank">
                        <Image src="/images/icons/youtube.png" width={50} height={50} alt=""/>
                    </Link>
                </div>
            </div>
            <div className={styles.projectInfo}>
                <Title size="large">About this project</Title>
                <p>
                    Discover Poland has been made to promote tourism in Poland, so more people may be interested in visiting the ❤️ of Europe.
                </p>
                <p>
                    This project can be seen on <TextLink href="https://github.com/ZeroWave022/DiscoverPoland" target="_blank">GitHub</TextLink>.
                </p>
            </div>
        </div>
    );
}

export default Footer;
