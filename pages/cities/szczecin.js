import Image from "next/image";
import Link from "next/link";

import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";
import LandmarkInfo from "@components/LandmarkInfo/LandmarkInfo.js";
import FullscreenImage from "@components/FullscreenImage/FullscreenImage.js";
import DescribedImage from "@components/DescribedImage/DescribedImage.js";

import getNavbarLinks from "@lib/getNavbarLinks.js";

import { szczecin } from "@lib/getThumbnails.js";
import DucalCastleLarge from "@public/images/landmarks/DucalCastle-large.jpg";
import DucalCastleSmall from "@public/images/landmarks/DucalCastle-small.jpg";
import TechnologyMuseumLarge from "@public/images/landmarks/TechnologyMuseum-large.jpg";
import TechnologyMuseumSmall from "@public/images/landmarks/TechnologyMuseum-small.jpg";
import ParkLarge from "@public/images/landmarks/SzczecinPark-large.jpg";
import ParkSmall from "@public/images/landmarks/SzczecinPark-small.jpg";

import styles from "@styles/CityPage.module.css";
import LIstyles from "@components/LandmarkInfo/LandmarkInfo.module.css";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Szczecin",
        description: "Discover Poland: Szczecin",
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

export default function Szczecin({ metadata, navbar }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Szczecin</Title>
                    <p>
                        This city is full of attractions for tourists, including the Old Town, Ducal Castle, various museums, parks, and last, but not least, its port.
                        Szczecin is known for being a port city because of its location near the Baltic Sea. It has become a center for activies in the Oder river, and other aquatic acitivities and sports.
                    </p>
                    <p>
                        You will also find a lot of historical buildings here which are preserved quite well, including the Szczecin Cathedral and various monuments.
                        The city has been nominated for the European Capital of Culture in 2016.
                    </p>
                </div>
                <DescribedImage src={szczecin} alt="Sailing boats in Szczecin" description="By Renata Misztal on Pixabay" />
            </LandmarkInfo>
            
            <FullscreenImage src={DucalCastleLarge} alt="Ducal Castle in Szczecin" title="Ducal Castle" description="By Kapitel on Wikimedia Commons. CC BY-SA 4.0" />
            
            <LandmarkInfo>
                <DescribedImage src={DucalCastleSmall} alt="Ducal Castle in Szczecin" description="By Kapitel on Wikimedia Commons. Public Domain" />
                <div className={LIstyles.text}>
                    <Title size="large">Ducal Castle</Title>
                    <p>
                        The Ducal Castle, also known as the Pomerian Dukes&apos; Castle, is a castle in Szczecin, in a renaissance style.
                        It is located in the center of the city, in the Stare Miasto (from Polish: Old Town), near the Oder river.
                        The construction of the Castle finished in 1428.
                    </p>
                    <p>
                        It is one of the largest cultural centres in this part of Poland.
                        The architect was Wilhelm Zachariasz Italus.
                    </p>
                </div>
            </LandmarkInfo>
            
            <FullscreenImage src={TechnologyMuseumLarge} alt="Museum of Technology and Transport in Szczecin" title="Museum of Technology and Transport" description="By Kapitel on Wikimedia Commons. CC0" />
            
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Museum of Technology and Transport</Title>
                    <p>
                        This museum has been established in 2006, and it is one of the biggest technological museums in Poland.
                        In the museum, you&apos;ll learn more about:
                        <ul>
                            <li>The history of public transport in Szczecin</li>
                            <li>Motorcycles and cars produced in Poland</li>
                            <li>Prototypes of vehicles which weren&apos;t mass produced</li>
                        </ul>
                    </p>
                    <p>
                        The museum often hosts different types of exhibitions, and you can read more on their own website.
                    </p>
                </div>
                <DescribedImage src={TechnologyMuseumSmall} alt="Museum of Technology and Transport in Szczecin" description="By Szczecinolog on Wikimedia Commons. CC BY-SA 4.0" />
            </LandmarkInfo>

            <FullscreenImage src={ParkLarge} alt="Szczecin City Park" title="Park Żeromskiego" description="By Kapitel on Wikimedia Commons. CC BY-SA 4.0" />
            
            <LandmarkInfo>
                <DescribedImage src={ParkSmall} alt="Szczecin City Park" description="By Kapitel on Wikimedia Commons. Public Domain" />
                <div className={LIstyles.text}>
                    <Title size="large">City Park Żeromskiego</Title>
                    <p>
                        This city park is named after Stefan Żeromski.
                        It is the second largest park in Szczecin, with an area of about 22 hectares.
                    </p>
                    <p>
                        In the park, you&apos;ll find about 177 types of trees.
                        In addition, you will encounter monuments and a hotel.
                        This is the perfect place for relax on your journey in Szczecin.
                    </p>
                </div>
            </LandmarkInfo>

            <Link className={styles.backButton} href="/cities">
                Back to all cities
            </Link>
        </Layout>
    );
}
