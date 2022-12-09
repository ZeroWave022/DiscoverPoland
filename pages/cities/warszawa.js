import Link from "next/link";

import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";
import LandmarkInfo from "@components/LandmarkInfo/LandmarkInfo.js";
import FullscreenImage from "@components/FullscreenImage/FullscreenImage.js";
import DescribedImage from "@components/DescribedImage/DescribedImage.js";

import getNavbarLinks from "@utils/getNavbarLinks.js";

import PresidentialPalace from "@public/images/landmarks/PresidentialPalace.jpg";
import PalaceCSLarge from "@public/images/landmarks/PalaceCS-large.jpg";
import PalaceCSSmall from "@public/images/landmarks/PalaceCS-small.jpg";
import RoyalCastleLarge from "@public/images/landmarks/RoyalCastle-large.jpg";
import RoyalCastleSmall from "@public/images/landmarks/RoyalCastle-small.jpg";
import WarsawRisingSmall from "@public/images/landmarks/WarsawRising-small.jpg";
import WarsawRisingLarge from "@public/images/landmarks/WarsawRising-large.jpg";

import styles from "@styles/CityPage.module.css";
import LIstyles from "@components/LandmarkInfo/LandmarkInfo.module.css";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Warszawa",
        description: "Discover Poland: Warszawa",
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

export default function Warszawa({ metadata, navbar }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Warszawa</Title>
                    <p>
                        Warsaw is the capital of Poland and has a population of over 1,8 million inhabitants. This makes Warsaw the 6th most-populous city in the European Union.
                        Are you already thinking about transport? No problem, as Warsaw will welcome you using one of the airports in the city, Warsaw Chopin and Warsaw Modlin.
                    </p>
                    <p>
                        Warsaw is home to Warsaw Grand Theatre, the largest theatre of its kind in the world.
                        The capital of Poland will also offer you walks in multiple parks, football matches in its National Stadium, and fantastic views in the Wilanów Palace.
                    </p>
                </div>
                <DescribedImage src={PresidentialPalace} alt="Presidential Palace in Warsaw" description="The Presidential Palace. By wawaleszek on Pixabay" />
            </LandmarkInfo>
            
            <FullscreenImage src={PalaceCSLarge} alt="The Palace of Culture and Science" title="The Palace of Culture and Science" description="By Przemysław Włodowski on Pixabay" />
            
            <LandmarkInfo>
                <DescribedImage src={PalaceCSSmall} alt="The Palace of Culture and Science" description="By Adrian Grycuk on Wikimedia Commons. CC BY-SA 3.0 PL" />
                <div className={LIstyles.text}>
                    <Title size="large">The Palace of Culture and Science</Title>
                    <p>
                        The Palace of Culture and Science in Warsaw has a height of 237 metres and it is the second tallest building in Poland.
                        Constructed in 1955, it is still home to cultural institutions like cinemas, libraries, theatres and more.
                    </p>
                    <p>
                        The Palace was also the tallest clock tower in the world, until a bigger clock mechanism was mounted in Tokyo, Japan, in 2000.
                        Since 2007, the Palace has been registered in the Registry of Objects of Cultural Heritage.
                    </p>
                </div>
            </LandmarkInfo>
            
            <FullscreenImage src={RoyalCastleLarge} alt="The Royal Castle" title="The Royal Castle" description="By Dariusz Staniszewski on Pixabay" />
            
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">The Royal Castle</Title>
                    <p>
                        Today, the Royal Castle is a state museum and one of Poland&apos;s most important historical monuments.
                        It formerly served as the official royal residence of multiple Polish monarchs.
                    </p>
                    <p>
                        The Castle is the 16th most visited art museum in the world, and it had over 1,1 million visitors in 2021.
                        It has been demolished twice, once by the Swedish Army in 1655-1656 and the German Army in 1944, but the Castle has been rebuilt.
                    </p>
                </div>
                <DescribedImage src={RoyalCastleSmall} alt="The Royal Castle" description="By Dariusz Staniszewski on Pixabay" />
            </LandmarkInfo>

            <FullscreenImage src={WarsawRisingLarge} alt="Warsaw Rising Museum" title="Warsaw Rising Museum" description="By Adrian Grycuk on Wikimedia Commons. CC BY-SA 3.0 PL" />
            
            <LandmarkInfo>
                <DescribedImage src={WarsawRisingSmall} alt="Warsaw Rising Museum" description="By Adrian Grycuk on Wikimedia Commons. CC BY-SA 3.0 PL" />
                <div className={LIstyles.text}>
                    <Title size="large">Warsaw Rising Museum</Title>
                    <p>
                        The Warsaw Rising Museum is dedicated to the Warsaw Uprising of 1944.
                        It opened on July 31, 2004, and today it is an important museum in Warsaw.
                    </p>
                    <p>
                        The museum also sponsors research of the Warsaw Uprising, and the history of the Polish Underground State.
                        It maintains many artifacts from the people involved, for example weapons, love letter, personal stories and so on.
                        The museum in a member of the Platform of European Memory and Conscience.
                    </p>
                </div>
            </LandmarkInfo>

            <Link className={styles.backButton} href="/cities">
                Back to all cities
            </Link>
        </Layout>
    );
}
