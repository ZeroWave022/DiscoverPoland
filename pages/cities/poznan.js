import Image from "next/image";
import Link from "next/link";

import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";
import LandmarkInfo from "@components/LandmarkInfo/LandmarkInfo.js";
import FullscreenImage from "@components/FullscreenImage/FullscreenImage.js";
import DescribedImage from "@components/DescribedImage/DescribedImage.js";

import getNavbarLinks from "@lib/getNavbarLinks.js";

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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
                <DescribedImage src={Background} alt="" description="Retrieved from Pixabay" />
            </LandmarkInfo>
            
            <FullscreenImage src={OldTownLarge} alt="Poznan Old Town" title="Poznań Old Town" description="By Bettina Nørgaard on Pixabay" />
            
            <LandmarkInfo>
                <DescribedImage src={OldTownSmall} alt="Poznan Old Town" description="Retrieved from Pixabay" />
                <div className={LIstyles.text}>
                    <Title size="large">Poznań Old Town</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
            </LandmarkInfo>
            
            <FullscreenImage src={MuseumLarge} alt="Poznan National Museum" title="Poznań National Museum" description="By Diego Delso on Wikimedia Commons. CC BY-SA 4.0" />
            
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Poznań National Museum</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
                <DescribedImage src={MuseumSmall} alt="Poznan National Museum" description="Dama przy oknie (A Lady By The Window) by Władysław Czachórski, approx. 1875." />
            </LandmarkInfo>

            <FullscreenImage src={InstrumentsMuseumLarge} alt="Poznan Instruments Museum" title="Poznań Instruments Museum" description="By Wojciech Kuchta on Wikimedia Commons. CC BY-SA 4.0" />
            
            <LandmarkInfo>
                <DescribedImage src={InstrumentsMuseumSmall} alt="Poznan Instruments Museum" description="By Wojciech Kuchta on Wikimedia Commons. CC BY-SA 3.0" />
                <div className={LIstyles.text}>
                    <Title size="large">Poznań Instruments Museum</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
            </LandmarkInfo>

            <Link className={styles.backButton} href="/cities">
                Back to all cities
            </Link>
        </Layout>
    );
}
