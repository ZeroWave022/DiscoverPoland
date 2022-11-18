import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";

import getNavbarLinks from "@lib/getNavbarLinks.js";

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

export default function Wroclaw({ metadata, navbar }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <Title size="large">Wrocław</Title>
        </Layout>
    );
}
