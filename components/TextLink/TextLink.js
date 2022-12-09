import React from "react";
import Link from "next/link";

import styles from "./TextLink.module.css";

function TextLink({ href, target, children }) {
    let attributes = {
        className: styles.textLink,
        href: href,
        target: target,
        rel: "noreferrer",
    };

    return React.createElement(Link, attributes, children);
}

export default TextLink;
