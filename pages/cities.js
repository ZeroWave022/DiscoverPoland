import Image from "next/image";
import Link from "next/link";

import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";
import ImageGrid from "@components/ImageGrid/ImageGrid.js";

import getNavbarLinks from "@lib/getNavbarLinks.js";

import { krakow, wroclaw, warszawa, poznan, gdansk, szczecin } from "@lib/getThumbnails.js";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Cities",
        description: "Discover Poland: Cities",
    },
    navbar: {
        active: 1,
    },
};

export async function getStaticProps() {
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

export default function Cities({ metadata, navbar }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <Title size="large">Cities</Title>
            <ImageGrid>
                <Link href="/cities/krakow">
                    <>
                        <Image src={krakow} alt="Kraków - Wawel Royal Castle" priority placeholder="blur" />
                        <p>Kraków</p>
                    </>
                </Link>
                <Link href="/cities/wroclaw">
                    <>
                        <Image src={wroclaw} alt="Wrocław - Old Town" priority placeholder="blur" />
                        <p>Wrocław</p>
                    </>
                </Link>
                <Link href="/cities/warszawa">
                    <>
                        <Image src={warszawa} alt="Warszawa - City Center" priority placeholder="blur" />
                        <p>Warszawa</p>
                    </>
                </Link>
                <Link href="/cities/poznan">
                    <>
                        <Image src={poznan} alt="Poznań - Old Town" priority placeholder="blur" />
                        <p>Poznań</p>
                    </>
                </Link>
                <Link href="/cities/gdansk">
                    <>
                        <Image src={gdansk} alt="Gdańsk - Neptune's Fountain" priority placeholder="blur" />
                        <p>Gdańsk</p>
                    </>
                </Link>
                <Link href="/cities/szczecin">
                    <>
                        <Image src={szczecin} alt="Szczecin - Port" priority placeholder="blur" />
                        <p>Szczecin</p>
                    </>
                </Link>
            </ImageGrid>
        </Layout>
    );
}
