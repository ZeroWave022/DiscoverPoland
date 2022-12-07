import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";
import FullscreenVideo from "@components/FullscreenVideo/FullscreenVideo.js";
import InteractiveMap from "@components/InteractiveMap/InteractiveMap.js";
import BlogPost from "@components/BlogPost/BlogPost";

import getNavbarLinks from "@lib/getNavbarLinks.js";
import { getPosts } from "@lib/blogPosts.js";

import styles from "@styles/Home.module.css";

import poland from "@public/images/PolandMap.svg";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Home",
        description: "Discover Poland: Home",
    },
    navbar: {
        active: 0,
    },
};

export async function getStaticProps() {
    let navbarLinks = await getNavbarLinks();
    let blogPosts = await getPosts();
    let newestPost = blogPosts[0];

    return {
        props: {
            metadata: pageConfig.metadata,
            navbar: {
                links: navbarLinks,
                active: pageConfig.navbar.active,
            },
            newestPost: newestPost
        },
    };
}

export default function Home({ metadata, navbar, newestPost }) {
    const indexVideoInfo = (
        <>
            All rights belong to their respective owners. <br />
            Originally filmed by <a href="https://www.youtube.com/c/DKVideoPL/" target="_blank" rel="noreferrer">DK Video</a>, 
            featured <a href="https://www.youtube.com/watch?v=ifVVc8xTas0" target="_blank" rel="noreferrer">here</a>.
        </>
    );

    return (
        <Layout metadata={metadata} navbar={navbar}>
            <FullscreenVideo src="/videos/PolandBackgroundVideo.mp4" videoInfo={indexVideoInfo} />
            <div className={styles.discoverTitle}>
                <Title size="large" font="SaturdayBright">Discover</Title>
                <Title size="large" font="SaturdayBright">Poland</Title>
            </div>
            <InteractiveMap src={poland} />
            <Title size="large">Newest blog post</Title>
            <BlogPost post={newestPost} />
        </Layout>
    );
}
