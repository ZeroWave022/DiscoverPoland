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

export default function Szczecin({ metadata, navbar }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <LandmarkInfo>
                <div>
                    <Title size="large">Szczecin</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
                <DescribedImage src={szczecin} alt="Sailing boats in Szczecin" description="By Renata Misztal on Pixabay" />
            </LandmarkInfo>
            
            <FullscreenImage src={DucalCastleLarge} alt="Ducal Castle in Szczecin" title="Ducal Castle" description="By Kapitel on Wikimedia Commons. CC BY-SA 4.0" />
            
            <LandmarkInfo>
                <DescribedImage src={DucalCastleSmall} alt="Ducal Castle in Szczecin" description="By Kapitel on Wikimedia Commons. Public Domain" />
                <div>
                    <Title size="large">Ducal Castle</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
            </LandmarkInfo>
            
            <FullscreenImage src={TechnologyMuseumLarge} alt="Museum of Technology and Transport in Szczecin" title="Museum of Technology and Transport" description="By Kapitel on Wikimedia Commons. CC0" />
            
            <LandmarkInfo>
                <div>
                    <Title size="large">Museum of Technology and Transport</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
                <DescribedImage src={TechnologyMuseumSmall} alt="Museum of Technology and Transport in Szczecin" description="By Szczecinolog on Wikimedia Commons. CC BY-SA 4.0" />
            </LandmarkInfo>

            <FullscreenImage src={ParkLarge} alt="Szczecin City Park" title="Park Żeromskiego" description="By Kapitel on Wikimedia Commons. CC BY-SA 4.0" />
            
            <LandmarkInfo>
                <DescribedImage src={ParkSmall} alt="Szczecin City Park" description="By Kapitel on Wikimedia Commons. Public Domain" />
                <div>
                    <Title size="large">Park Żeromskiego</Title>
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
