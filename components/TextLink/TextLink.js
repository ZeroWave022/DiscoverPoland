import React from "react";
import Link from "next/link";

import styles from "./TextLink.module.css";

function TextLink({ href, target, shadowSize, children }) {
    let attributes = {
        className: styles.textLink,
        href: href,
        target: target,
        rel: "noreferrer",
    };

    if (shadowSize) {
        attributes.style = {
            boxShadow: `rgba(0, 0, 0, 0.4) ${shadowSize}`,
        };
    }

    return React.createElement(Link, attributes, children);
}

export default TextLink;
