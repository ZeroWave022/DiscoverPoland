import Image from "next/image";

import Layout from "../components/Layout/Layout.js";
import FullscreenVideo from "../components/FullscreenVideo/FullscreenVideo.js";
import InteractiveMap from "../components/Interactivemap/InteractiveMap.js";
import Title from "../components/Title/title";
import ImageGrid from "../components/ImageGrid/ImageGrid";

import getNavbarLinks from "../lib/getNavbarLinks";

import styles from "../styles/Home.module.css";

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
                    <Image src="/vercel.svg" width={200} height={200} alt="City 1"/>
                    <p>City 1</p>
                </div>
                <div>
                    <Image src="/vercel.svg" width={200} height={200} alt="City 2"/>
                    <p>City 2</p>
                </div>
                <div>
                    <Image src="/vercel.svg" width={200} height={200} alt="City 3"/>
                    <p>City 3</p>
                </div>
                <div>
                    <Image src="/vercel.svg" width={200} height={200} alt="City 4"/>
                    <p>City 4</p>
                </div>
                <div>
                    <Image src="/vercel.svg" width={200} height={200} alt="City 5"/>
                    <p>City 5</p>
                </div>
                <div>
                    <Image src="/vercel.svg" width={200} height={200} alt="City 6"/>
                    <p>City 5</p>
                </div>
            </ImageGrid>
        </Layout>
    );
}
