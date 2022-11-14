import Image from "next/image";

import Layout from "../components/Layout/Layout.js";
import FullscreenVideo from "../components/FullscreenVideo/FullscreenVideo.js";
import InteractiveMap from "../components/InteractiveMap/InteractiveMap.js";
import Title from "../components/Title/Title.js";
import ImageGrid from "../components/ImageGrid/ImageGrid.js";

import getNavbarLinks from "../lib/getNavbarLinks.js";

import styles from "../styles/Home.module.css";
import { krakow, wroclaw, warszawa, poznan, gdansk, szczecin } from "../lib/getThumbnails.js";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Cities",
        description: "Discover Poland: Cities",
    },
    navbar: {
        active: 1,
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
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <Title size="large">Cities</Title>
            <ImageGrid>
                <div>
                    <Image src={krakow} alt="Kraków - Wawel Royal Castle"/>
                    <p>Kraków</p>
                </div>
                <div>
                    <Image src={wroclaw} alt="Wrocław - Old Town"/>
                    <p>Wrocław</p>
                </div>
                <div>
                    <Image src={warszawa} alt="Warszawa - City Center"/>
                    <p>Warszawa</p>
                </div>
                <div>
                    <Image src={poznan} alt="Poznań - Old Town"/>
                    <p>Poznań</p>
                </div>
                <div>
                    <Image src={gdansk} alt="Gdańsk - Neptune's Fountain"/>
                    <p>Gdańsk</p>
                </div>
                <div>
                    <Image src={szczecin} alt="Szczecin - Port"/>
                    <p>Szczecin</p>
                </div>
            </ImageGrid>
        </Layout>
    );
}
