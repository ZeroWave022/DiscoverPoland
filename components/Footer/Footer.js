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
                <TextLink href="#">Placeholder 1</TextLink>
                <TextLink href="#">Placeholder 2</TextLink>
                <TextLink href="/blog">Blog</TextLink>
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
            
        </div>
    );
}

export default Footer;
