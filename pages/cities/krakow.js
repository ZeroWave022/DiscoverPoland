import Link from "next/link";

import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";
import LandmarkInfo from "@components/LandmarkInfo/LandmarkInfo.js";
import FullscreenImage from "@components/FullscreenImage/FullscreenImage.js";
import DescribedImage from "@components/DescribedImage/DescribedImage.js";

import getNavbarLinks from "@utils/getNavbarLinks.js";
import { krakow } from "@utils/getThumbnails.js";

import TownSquare from "@public/images/landmarks/KrakowTownSquare.jpg";
import WawelLarge from "@public/images/landmarks/WawelCastle-large.jpg";
import SMBLarge from "@public/images/landmarks/SaintMaryBasilica-large.jpg";
import SMBSmall from "@public/images/landmarks/SaintMaryBasilica-small.jpg";
import SaltMineLarge from "@public/images/landmarks/Wieliczka-large.jpg";
import SaltMineSmall from "@public/images/landmarks/Wieliczka-small.jpg";

import styles from "@styles/CityPage.module.css";
import LIstyles from "@components/LandmarkInfo/LandmarkInfo.module.css";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Kraków",
        description: "Discover Poland: Kraków",
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

export default function Krakow({ metadata, navbar }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Kraków</Title>
                    <p>
                        Kraków, the home to Wawel Royal Castle and a beautiful Old Town, is often stated to be the one of Europe&apos;s most beautiful cities.
                        The Wawel Royal Castle has been declared as a UNESCO World Heritage site in 1978, and the city has been the capital of Poland until 1596.
                    </p>
                    <p>
                        Kraków is also home to the Jagiellonian University, one of the oldest and most reputable institutions of higher education.
                        With a rich history, Kraków is offering a variety of museums and buildings to be explored. An example could be the nearby Wieliczka Salt Mine or Saint Mary&apos;s Basilica.
                    </p>
                </div>
                <DescribedImage src={TownSquare} alt="Krakow Town Square" description="Kraków Town Square. By Dimitris Vetsikas on Pixabay" />
            </LandmarkInfo>
            
            <FullscreenImage src={WawelLarge} alt="Wawel Royal Castle" title="Wawel Royal Castle" description="By Dariusz Staniszewski on Pixabay" />
            
            <LandmarkInfo>
                <DescribedImage src={krakow} alt="Wawel Royal Castle" description="By tevenet on Pixabay" />
                <div className={LIstyles.text}>
                    <Title size="large">Wawel Royal Castle</Title>
                    <p>
                        The Wawel Royal Castle is often called one of the most important historical sites in Poland.
                        Wawel was a residency established for King Casimir III the Great, and the architecture represents Medieval, Renaissance and Baroque periods.
                    </p>
                    <p>
                        Today, the Castle hosts a museum which can be visited by anyone. 
                        The museum includes a variety of departments, including art, sculpture, paintings and collections.
                        This museum is also an important center for conservation of art, as it includes seven conservation studios.
                    </p>
                </div>
            </LandmarkInfo>
            
            <FullscreenImage src={SaltMineLarge} alt="Wieliczka Salt Mine" title="Wieliczka Salt Mine" description="By Jacek Abramowicz on Pixabay" />
            
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Wieliczka Salt Mine</Title>
                    <p>
                        While technically not in Kraków, Wieliczka Salt Mine has had a great significance in the area near Kraków.
                        From Neolithic times, all the way until 1996, this mine produced table salt.
                        The mine has a depth of 327 metres and has chambers which total to over 287 kilometres.
                    </p>
                    <p>
                        The Wieliczka Salt Mine is a unique experience, no matter your expectations.
                        Have you already been there? No worries, there are multiple paths available.
                    </p>
                </div>
                <DescribedImage src={SaltMineSmall} alt="Wieliczka Salt Mine" description="By Jacek Abramowicz on Pixabay" />
            </LandmarkInfo>

            <FullscreenImage src={SMBLarge} alt="Saint Mary's Basilica" title="Saint Mary's Basilica" description="By krystianwin on Pixabay" />
            
            <LandmarkInfo>
                <DescribedImage src={SMBSmall} alt="Saint Mary's Basilica" description="By Jar.ciurus on Wikimedia Commons. CC BY-SA 3.0 PL" />
                <div className={LIstyles.text}>
                    <Title size="large">Saint Mary&apos;s Basilica</Title>
                    <p>
                        This beautiful piece of architecture is quite a popular tourist attraction in Kraków.
                        Saint Mary&apos;s Basilica was built in the 14th century, and is 80 meters tall.
                        It was listed as a UNESCO World Heritage site in 1978.
                    </p>
                    <p>
                        Every hour of the day, a trumpet signal is played from the top of the Basilica.
                        The tune breaks off mid-stream, honoring a legend about a 13th century trumpeter that was shot in the throat while sounding the tune to alert about an incoming attack.
                        The Basilica also hosts a famous wooden altarpiece by Veit Stoss, carved in the 14th century.
                    </p>
                </div>
            </LandmarkInfo>

            <Link className={styles.backButton} href="/cities">
                Back to all cities
            </Link>
        </Layout>
    );
}
