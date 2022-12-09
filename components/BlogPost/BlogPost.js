import React from "react";

import Title from "@components/Title/Title.js";

import styles from "./BlogPost.module.css";
import TextLink from "@components/TextLink/TextLink";

function BlogPost({ post }) {
    return (
        <div className={styles.container}>
            <Title size="medium">{post.title}</Title>
            <div className={styles.date} dangerouslySetInnerHTML={{ __html: post.date }} />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
            {
                // If the post has a source, add it as a link to the bottom of post.
                post.sourceLink ? (
                    <div>
                        <span>Source: </span>
                        <TextLink href={post.sourceLink} target="_blank">{post.sourceName}</TextLink>
                    </div>
                ) : null
            }
        </div>
    );
}

export default BlogPost;
