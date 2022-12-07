import Layout from "@components/Layout/Layout.js";
import Title from "@components/Title/Title.js";

import getNavbarLinks from "@lib/getNavbarLinks.js";
import { getPosts } from "@lib/blogPosts.js";
import BlogPost from "@components/BlogPost/BlogPost";

const pageConfig = {
    metadata: {
        title: "Discover Poland: Blog",
        description: "Discover Poland: Blog",
    },
    navbar: {
        active: 2,
    },
};

export async function getStaticProps() {
    let navbarLinks = await getNavbarLinks();
    let blogPosts = await getPosts();

    return {
        props: {
            metadata: pageConfig.metadata,
            navbar: {
                links: navbarLinks,
                active: pageConfig.navbar.active,
            },
            posts: blogPosts
        },
    };
}

export default function Blog({ metadata, navbar, posts }) {
    return (
        <Layout metadata={metadata} navbar={navbar}>
            <Title size="large">Blog & Events</Title>
            {posts.map((postData) => {
                    return (
                        <BlogPost post={postData} key={postData.id}></BlogPost>
                    )
                })
            }
        </Layout>
    );
}
