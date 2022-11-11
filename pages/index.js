import styles from "../styles/Home.module.css";

import Layout from "../components/Layout/Layout.js";
import FullscreenVideo from "../components/FullscreenVideo/FullscreenVideo.js";
import InteractiveMap from "../components/InteractiveMap/InteractiveMap.js";

import getNavbarLinks from "../lib/getNavbarLinks";
import Title from "../components/Title/title";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Homepage",
        description: "Discover Poland: Homepage",
    },
    navbar: {
        active: 0,
    },
};

export async function getServerSideProps() {
    let navbarLinks = await getNavbarLinks();

    return {
        props: {
            metadata: pageConfig.metadata,
            navbar: {
                links: navbarLinks,
                active: pageConfig.navbar.active,
            },
        },
    };
}

export default function Home({ metadata, navbar }) {
    const indexVideoInfo = (
        <>
            All rights belong to their respective owners. <br />
            Originally filmed by <a href="https://www.youtube.com/c/DKVideoPL/" target="_blank" rel="noreferrer">DK Video</a>, 
            featured <a href="https://www.youtube.com/watch?v=ifVVc8xTas0" target="_blank" rel="noreferrer">here</a>.
        </>
    );

    return (
        <Layout metadata={metadata} navbar={navbar}>
            <FullscreenVideo src="/videos/PolandBackgroundVideo.mp4" videoInfo={indexVideoInfo} />
            <div className={styles.discoverTitle}>
                <Title size="large" font="SaturdayBright">Discover</Title>
                <Title size="large" font="SaturdayBright">Poland</Title>
            </div>
            <InteractiveMap src="/pl.svg" />
        </Layout>
    );
}
