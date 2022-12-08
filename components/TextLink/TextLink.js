import React from "react";
import Link from "next/link";

import styles from "./TextLink.module.css";

const shadowClasses = {
    medium: styles.mediumShadow,
    large: styles.largeShadow
}

const colorClasses = {
    light: styles.lightLink,
    dark: styles.darkLink
}

function TextLink({ href, target, shadowSize, color, children }) {
    let attributes = {
        className: styles.textLink,
        href: href,
        target: target,
        rel: "noreferrer",
    };

    let chosenShadow = shadowClasses[shadowSize];
    let chosenColor = colorClasses[color];

    // If a shadow is chosen, and it's valid, use that.
    // Otherwise, use the default (which is large).
    if (chosenShadow) {
        attributes.className += ` ${chosenShadow}`;
    } else {
        attributes.className += ` ${shadowClasses.large}`;
    }

    if (chosenColor) {
        attributes.className += ` ${chosenColor}`;
    } else {
        attributes.className += ` ${colorClasses.light}`;
    }

    return React.createElement(Link, attributes, children);
}

export default TextLink;
