import Link from "next/link";

import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";
import LandmarkInfo from "@components/LandmarkInfo/LandmarkInfo.js";
import FullscreenImage from "@components/FullscreenImage/FullscreenImage.js";
import DescribedImage from "@components/DescribedImage/DescribedImage.js";

import getNavbarLinks from "@utils/getNavbarLinks.js";

import Background from "@public/images/landmarks/PoznanBackground.jpg";
import OldTownLarge from "@public/images/landmarks/PoznanOldTown-large.jpg";
import OldTownSmall from "@public/images/landmarks/PoznanOldTown-small.jpg";
import MuseumLarge from "@public/images/landmarks/PoznanMuseum-large.jpg";
import MuseumSmall from "@public/images/landmarks/PoznanMuseum-small.jpg";
import InstrumentsMuseumLarge from "@public/images/landmarks/PoznanInstrumentsMuseum-large.jpg";
import InstrumentsMuseumSmall from "@public/images/landmarks/PoznanInstrumentsMuseum-small.jpg";

import styles from "@styles/CityPage.module.css";
import LIstyles from "@components/LandmarkInfo/LandmarkInfo.module.css";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Poznań",
        description: "Discover Poland: Poznań",
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

export default function Poznan({ metadata, navbar }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Poznań</Title>
                    <p>
                        On the river Warta, we find Poznań, a city with a Renaissance Old Town, Cathedral, and multiple museums.
                        It was one of the four historical captials of medieval Poland. Currently Poznań is the capital of the Greater Poland Voivodeship.
                    </p>
                    <p>
                        Poznań is considered to be an important center for technology, sports and education.
                        The Adam Mickiewicz University, the third largest university of Poland, is located in Poznań. Currently, there are about 130 000 students in the city.
                    </p>
                </div>
                <DescribedImage src={Background} alt="" description="Retrieved from Pixabay" />
            </LandmarkInfo>
            
            <FullscreenImage src={OldTownLarge} alt="Poznan Old Town" title="Poznań Old Town" description="By Bettina Nørgaard on Pixabay" />
            
            <LandmarkInfo>
                <DescribedImage src={OldTownSmall} alt="Poznan Old Town" description="Retrieved from Pixabay" />
                <div className={LIstyles.text}>
                    <Title size="large">Poznań Old Town</Title>
                    <p>
                        Poznań&apos;s Old Town in the heart of Poznań, with multiple restaurants and bars.
                        It also hosts the town hall, which used to be the local government until 1939.
                    </p>
                    <p>
                        Today, the local town hall hosts a museum.
                        This old town is also listed as one of Poland&apos;s official Historic Monuments.
                    </p>
                </div>
            </LandmarkInfo>
            
            <FullscreenImage src={MuseumLarge} alt="Poznan National Museum" title="Poznań National Museum" description="By Diego Delso on Wikimedia Commons. CC BY-SA 4.0" />
            
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Poznań National Museum</Title>
                    <p>
                        The National Museum in Poznań is one of the biggest museums in Poland.
                        It houses multiple collections of paintings and historical objects.
                    </p>
                    <p>
                        The museum established in 1919.
                        It has multiple branches in the city, like the Museum of Applied Arts, or the Museum of the History of Poznań.
                    </p>
                </div>
                <DescribedImage src={MuseumSmall} alt="Poznan National Museum" description="Dama przy oknie (A Lady By The Window) by Władysław Czachórski, approx. 1875." />
            </LandmarkInfo>

            <FullscreenImage src={InstrumentsMuseumLarge} alt="Poznan Instruments Museum" title="Poznań Instruments Museum" description="By Wojciech Kuchta on Wikimedia Commons. CC BY-SA 4.0" />
            
            <LandmarkInfo>
                <DescribedImage src={InstrumentsMuseumSmall} alt="Poznan Instruments Museum" description="By Wojciech Kuchta on Wikimedia Commons. CC BY-SA 3.0" />
                <div className={LIstyles.text}>
                    <Title size="large">Poznań Instruments Museum</Title>
                    <p>
                        This Museum of Instruments hosts over 2 000 objects of musical and historical importance.
                        In its category, it is the third biggest museum in Europe.
                    </p>
                    <p>
                        This museum was established in 1945, and it is an important branch of the National Museums in Poznań.
                        It has many exhibitions in 19 themed rooms, including a room dedicated to Frédéric Chopin, a famous Polish musician.
                    </p>
                </div>
            </LandmarkInfo>

            <Link className={styles.backButton} href="/cities">
                Back to all cities
            </Link>
        </Layout>
    );
}
