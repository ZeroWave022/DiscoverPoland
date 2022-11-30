import Image from "next/image";

import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";
import LandmarkInfo from "@components/LandmarkInfo/LandmarkInfo.js";
import FullscreenImage from "@components/FullscreenImage/FullscreenImage.js";
import DescribedImage from "@components/DescribedImage/DescribedImage.js";

import getNavbarLinks from "@lib/getNavbarLinks.js";
import { krakow } from "@lib/getThumbnails.js";

import TownSquare from "@public/images/landmarks/KrakowTownSquare.jpg";
import WawelLarge from "@public/images/landmarks/WawelCastle-large.jpg";
import SMBLarge from "@public/images/landmarks/SaintMaryBasilica-large.jpg";
import SMBSmall from "@public/images/landmarks/SaintMaryBasilica-small.jpg";
import SaltMineLarge from "@public/images/landmarks/Wieliczka-large.jpg";
import SaltMineSmall from "@public/images/landmarks/Wieliczka-small.jpg";

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

export default function Krakow({ metadata, navbar }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <LandmarkInfo>
                <div>
                    <Title size="large">Kraków</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
                <DescribedImage src={TownSquare} alt="Krakow Town Square" description="Kraków Town Square. By Dimitris Vetsikas on Pixabay" />
            </LandmarkInfo>
            
            <FullscreenImage src={WawelLarge} alt="Wawel Royal Castle" text="Wawel Royal Castle" />
            
            <LandmarkInfo>
                <DescribedImage src={krakow} alt="Wawel Royal Castle" description="By tevenet on Pixabay" />
                <div>
                    <Title size="large">Wawel Royal Castle</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
            </LandmarkInfo>
            
            <FullscreenImage src={SaltMineLarge} alt="Wieliczka Salt Mine" text="Wieliczka Salt Mine" />
            
            <LandmarkInfo>
                <div>
                    <Title size="large">Wieliczka Salt Mine</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
                <DescribedImage src={SaltMineSmall} alt="Wieliczka Salt Mine" description="By Jacek Abramowicz on Pixabay" />
            </LandmarkInfo>

            <FullscreenImage src={SMBLarge} alt="Saint Mary's Basilica" text="Saint Mary's Basilica" />
            
            <LandmarkInfo>
                <DescribedImage src={SMBSmall} alt="Saint Mary's Basilica" description="By Jar.ciurus on Wikimedia Commons. CC BY-SA 3.0 PL" />
                <div>
                    <Title size="large">Saint Mary&apos;s Basilica</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                    <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
                </div>
            </LandmarkInfo>
        </Layout>
    );
}
