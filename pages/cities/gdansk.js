import Link from "next/link";

import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";
import LandmarkInfo from "@components/LandmarkInfo/LandmarkInfo.js";
import FullscreenImage from "@components/FullscreenImage/FullscreenImage.js";
import DescribedImage from "@components/DescribedImage/DescribedImage.js";

import getNavbarLinks from "@lib/getNavbarLinks.js";

import Ocean from "@public/images/landmarks/GdanskOcean.jpg";
import WW2MuseumLarge from "@public/images/landmarks/WW2Museum-large.jpg";
import WW2MuseumSmall from "@public/images/landmarks/WW2Museum-small.jpg";
import NeptuneLarge from "@public/images/landmarks/Neptune-large.jpg";
import NeptuneSmall from "@public/images/landmarks/Neptune-small.jpg";
import StMaryChurchLarge from "@public/images/landmarks/StMaryChurch-large.jpg";
import StMaryChurchSmall from "@public/images/landmarks/StMaryChurch-small.jpg";

import styles from "@styles/CityPage.module.css";
import LIstyles from "@components/LandmarkInfo/LandmarkInfo.module.css";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Gdańsk",
        description: "Discover Poland: Gdańsk",
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

export default function Gdansk({ metadata, navbar }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Gdańsk</Title>
                    <p>
                        Gdańsk, with its population of 470 000, is a city with a lot of surprises for tourists!
                        Featuring fantastic architecture like St. Mary&apos;s Church, a Ferris wheel, Neptune&apos;s Fountain and much more to discover.
                    </p>
                    <p>
                        Those interested in history will also be pleased to hear Gdańsk has a Second World War museum. The Battle of Westerplatte, a peninsula in Gdańsk, was the first battle of WW2.
                        The city also hosts a Museum of Technology and Transport.
                        Gdańsk has scored very high on ranking for quality of life, safety and living standards worldwide, and the city is very welcoming to tourists.
                    </p>
                </div>
                <DescribedImage src={Ocean} alt="Picture of ocean taken from the shore" description="By IdaT on Pixabay" />
            </LandmarkInfo>
            
            <FullscreenImage src={WW2MuseumLarge} alt="Second World War Museum" title="World War II Museum" description="By Adam Kumiszcza on Wikimedia Commons. CC BY-SA 4.0" />
            
            <LandmarkInfo>
                <DescribedImage src={WW2MuseumSmall} alt="Second World War Museum" description="By Łukasz Katlewa on Wikimedia Commons. CC BY-SA 3.0" />
                <div className={LIstyles.text}>
                    <Title size="large">World War II Museum</Title>
                    <p>
                        This museum was devoted to the Second World War, as Gdańsk was a city involved in the war.
                        The Battle of Westerplatte, a peninsula in Gdańsk, was the first battle of WW2.
                    </p>
                    <p>
                        Its exhibitions opened in 2017, and today it hosts military vehicles, personal items and other objects of significance.
                        The architectural team responsible for the building of the museum, named Kwadrat (from Polish: The Square), won an architectural competiton for their work.
                        In 2017, the museum had over 417 000 visitors.
                    </p>
                </div>
            </LandmarkInfo>
            
            <FullscreenImage src={NeptuneLarge} alt="Neptune's Fountain" title="Neptune's Fountain" description="By Janusz Kreczmański on Pixabay" />
            
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Neptune&apos;s Fountain</Title>
                    <p>
                        Neptune&apos;s fountain is one of the most important landmarks of the city.
                        It is located at the Długi Targ (from Polish: Long Market), and it was constructed in 1606-1633.
                    </p>
                    <p>
                        The architectural style of Neptune&apos;s is femish ammnerism and rococo.
                        While you&apos;re visiting this fine piece of architecture, you will also be in the Long Market, which is home to many restaurants and other services.
                    </p>
                </div>
                <DescribedImage src={NeptuneSmall} alt="Neptune's Fountain" description="By Robert Wroński on Pixabay" />
            </LandmarkInfo>

            <FullscreenImage src={StMaryChurchLarge} alt="Saint Mary's Church" title="Saint Mary's Church" description="By Gyddanyzc on Wikimedia Commons. CC0" />
            
            <LandmarkInfo>
                <DescribedImage src={StMaryChurchSmall} alt="Saint Mary's Church" description="By Diego Delso on Wikimedia Commons. CC BY-SA 3.0" />
                <div className={LIstyles.text}>
                    <Title size="large">Saint Mary&apos;s Church</Title>
                    <p>
                        This church is one of the three biggest brick churches in the world.
                        It has been completed in 1502, and has 1 bell tower as well as 5 smaller spires.
                    </p>
                    <p>
                        The church also has multiple works of religious art.
                        It is also a dominant piece of Gdańsk&apos;s panorama, and it is worth visiting to learn more about the religious aspects of Poland.
                    </p>
                </div>
            </LandmarkInfo>

            <Link className={styles.backButton} href="/cities">
                Back to all cities
            </Link>
        </Layout>
    );
}
