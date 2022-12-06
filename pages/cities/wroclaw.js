import Image from "next/image";
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
                <DescribedImage src={Landscape} alt="Wroclaw Landscape" description="Wrocław. By Dariusz Sankowski on Pixabay" />
            </LandmarkInfo>
            
            <FullscreenImage src={RaclawiceLarge} alt="Raclawice Panorama" title="Racławice Panorama" description="By Andreas Lischka on Pixabay" />
            
            <LandmarkInfo>
                <DescribedImage src={RaclawiceSmall} alt="Raclawice Panorama" description="By Andreas Lischka on Pixabay" />
                <div className={LIstyles.text}>
                    <Title size="large">Racławice Panorama</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
            </LandmarkInfo>
            
            <FullscreenImage src={ZooLarge} alt="Wroclaw Zoo" title="Wrocław Zoo" description="By Dariusz Sankowski on Pixabay" />
            
            <LandmarkInfo>
                <div className={LIstyles.text}>
                    <Title size="large">Wrocław Zoo</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
                <DescribedImage src={ZooSmall} alt="Wroclaw Zoo" description="By Rafał Chudoba on Pixabay" />
            </LandmarkInfo>

            <FullscreenImage src={CHLarge} alt="Centennial Hall" title="Centennial Hall" description="By Łukasz Tekieli on Pixabay" />
            
            <LandmarkInfo>
                <DescribedImage src={CHSmall} alt="Centennial Hall" description="By Łukasz Tekieli on Pixabay" />
                <div className={LIstyles.text}>
                    <Title size="large">Centennial Hall</Title>
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
