import React from "react";
import Image from "next/image";

import styles from "./Footer.module.css";
import Title from "../Title/title";
import Link from "next/link";
import TextLink from "../TextLink/TextLink";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.general}>
                <h1>Discover Poland</h1>
                <TextLink href="#">Cities</TextLink>
                <TextLink href="#">Blog</TextLink>
                <TextLink href="/blog">About</TextLink>
            </div>
            <div className={styles.socials}>
                <Title size="large">Social Media</Title>
                <a href="">
                <Image src="/vercel.svg" width={50} height={50} alt=""/>
                </a>

                <a href="">
                <Image src="/vercel.svg" width={50} height={50} alt=""/>
                </a>

                <a href="">
                <Image src="/vercel.svg" width={50} height={50} alt=""/>
                </a>

                <a href="">
                <Image src="/vercel.svg" width={50} height={50} alt=""/>
                </a>
            </div>
            <div className={styles.projectInfo}>
                <Title size="large">About this project</Title>
                <p>
                    Discover Poland has been made to promote tourism in Poland, so more people may be interested in visiting the ❤️ of Europe.
                </p>
                <p>
                    This project can be seen on <TextLink href="https://github.com/ZeroWave022/DiscoverPoland" target="_blank" shadowSize="medium">GitHub</TextLink>.
                </p>
            </div>
            
        </div>
    );
}

export default Footer;
