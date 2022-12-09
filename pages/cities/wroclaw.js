import Link from "next/link";

import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";
import LandmarkInfo from "@components/LandmarkInfo/LandmarkInfo.js";
import FullscreenImage from "@components/FullscreenImage/FullscreenImage.js";
import DescribedImage from "@components/DescribedImage/DescribedImage.js";

import getNavbarLinks from "@lib/getNavbarLinks.js";

import Landscape from "@public/images/landmarks/WroclawLandscape.jpg";
import RaclawiceLarge from "@public/images/landmarks/Raclawice-large.jpg";
import RaclawiceSmall from "@public/images/landmarks/Raclawice-small.jpg";
import ZooLarge from "@public/images/landmarks/WroclawZoo-large.jpg";
import ZooSmall from "@public/images/landmarks/WroclawZoo-small.jpg";
import CHLarge from "@public/images/landmarks/CentennialHall-large.jpg";
import CHSmall from "@public/images/landmarks/CentennialHall-small.jpg";

import styles from "@styles/CityPage.module.css";
import LIstyles from "@components/LandmarkInfo/LandmarkInfo.module.css";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Wrocław",
        description: "Discover Poland: Wrocław",
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

export default function Wroclaw({ metadata, navbar }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Wrocław</Title>
                    <p>
                        Wrocław lies of the Oder river, and has a population of over 670 000 inhabitants.
                        The city has experienced a lot of historical events in the past which formed what it is today.
                    </p>
                    <p>
                        The Wrocław Zoo, established in 1865, is the oldest zoological garden in Poland, and is a popular tourist attraction.
                        The Racławice Panorama is also a popular point of interest, depicting the Battle of Racławice, fought in 1794.
                    </p>
                </div>
                <DescribedImage src={Landscape} alt="Wroclaw Landscape" description="Wrocław. By Dariusz Sankowski on Pixabay" />
            </LandmarkInfo>
            
            <FullscreenImage src={RaclawiceLarge} alt="Raclawice Panorama" title="Racławice Panorama" description="By Andreas Lischka on Pixabay" />
            
            <LandmarkInfo>
                <DescribedImage src={RaclawiceSmall} alt="Raclawice Panorama" description="By Andreas Lischka on Pixabay" />
                <div className={LIstyles.text}>
                    <Title size="large">Racławice Panorama</Title>
                    <p>
                        This Panorama, with the viewer in the middle, depicts the Battle of Racławice, fought in 1794.
                        The battle was fought during the Kościuszko Uprising, which was led by Tadeusz Kościuszko.
                        A special kind of perspective is used, and additional effects like lightning and artificial terrain create a feeling of being in the middle of the battle.
                    </p>
                    <p>
                        This unique experience is fantastic for fans of history, and those who would like to learn more about Polish history.
                        This paining is also one of the few preserved relics of 19th century mass culture in Poland.
                    </p>
                </div>
            </LandmarkInfo>
            
            <FullscreenImage src={ZooLarge} alt="Wroclaw Zoo" title="Wrocław Zoo" description="By Dariusz Sankowski on Pixabay" />
            
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Wrocław Zoo</Title>
                    <p>
                        The Wrocław Zoological Garden was opened in 1865 and is the oldest zoo in Poland.
                        The zoo covers 33 hectares and is home to approximately 10 500 animals and over 1 100 species.
                    </p>
                    <p>
                        The zoo is definitively worthwhile, as stats show: This is the most visited zoo in Poland, and the fifth most visited zoo in Europe.
                        It is also a member of the European Association of Zoos and Aquaria and the World Association of Zoos and Aquariums.
                    </p>
                </div>
                <DescribedImage src={ZooSmall} alt="Wroclaw Zoo" description="By Rafał Chudoba on Pixabay" />
            </LandmarkInfo>

            <FullscreenImage src={CHLarge} alt="Centennial Hall" title="Centennial Hall" description="By Łukasz Tekieli on Pixabay" />
            
            <LandmarkInfo>
                <DescribedImage src={CHSmall} alt="Centennial Hall" description="By Łukasz Tekieli on Pixabay" />
                <div className={LIstyles.text}>
                    <Title size="large">Centennial Hall</Title>
                    <p>
                        The Hall was built by the architect Max Berg in 1911-1913.
                        The building was designated to host exhibitions, concerts, theatrical and opera performances and sporting events.
                    </p>
                    <p>
                        Today, the Centennial Hall is still used for these purposes.
                        Concerts, business summits, and sporting events are often hosted here, as part of Wrocław&apos;s city life.
                        It was also listed as a UNESCO World Heritage site in 2006.
                    </p>
                </div>
            </LandmarkInfo>

            <Link className={styles.backButton} href="/cities">
                Back to all cities
            </Link>
        </Layout>
    );
}
