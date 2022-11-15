import React from "react";
import Head from 'next/head';
import Navbar from "../Navbar/Navbar.js";

import styles from "./Layout.module.css";
import Footer from "../Footer/Footer.js";

function Layout({ metadata, navbar, children }) {
    return (
        <>
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.body}>
            <Navbar config={navbar} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
        </>
    );
}

export default Layout;
