import Layout from "@components/Layout/Layout.js";
import TextLink from "@components/TextLink/TextLink";
import Title from "@components/Title/Title.js";

import getNavbarLinks from "@lib/getNavbarLinks.js";

import styles from "@styles/About.module.css";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Cities",
        description: "Discover Poland: Cities",
    },
    navbar: {
        active: 3,
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

export default function Cities({ metadata, navbar }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <Title size="large">About Discover Poland</Title>
            <p className={styles.infoParagraph}>
                The project was made to inspire and encourage more tourists to discover Poland.
                This country in Central Europe has multiple cities, natural areas and mountains which are all worth visiting.
            </p>
            <Title size="medium">Contributing</Title>
            <p className={styles.infoParagraph}>
                Discover Poland is available on <TextLink href="https://github.com/ZeroWave022/DiscoverPoland" target="_blank">GitHub</TextLink>.
                To contribute, or inform about an issue, please refer to the repository.
                Any contributions and reported issues are appreciated!
            </p>
            <Title size="medium">Sources</Title>
            <p className={styles.infoParagraph}>
                Information about cities and tourist attractions have been retrieved from Wikipedia - thank you to all the authors.
                Photos have been retrieved from Pixabay and Wikimedia Commons. Attribution of authors is done where it&apos;s required.
            </p>
        </Layout>
    );
}
