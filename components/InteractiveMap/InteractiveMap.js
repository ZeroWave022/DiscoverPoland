import React from "react";
import Image from "next/image";
import { SyntheticEvent } from "react";

import CityDescriptions from "@utils/CityDescriptions.js";

import LocationIcon from "@public/images/icons/location.png";

import styles from "./InteractiveMap.module.css";

/**
 * @param {Object} props
 * @param {string} props.src
 */
function InteractiveMap({ src }) {
    const [highlighted, setHighlight] = React.useState(false);
    const [currentCity, setCity] = React.useState("default");

    const infoBoxRef = React.useRef(null);

    /**
     * @param {SyntheticEvent} e
     * @param {string} cityName
     */
    function handleClick(e, cityName) {
        e.preventDefault();

        if (CityDescriptions[cityName]) {
            setCity(cityName);
            
            setHighlight(true);
            setTimeout(() => setHighlight(false), 2000);

            if (window.innerWidth <= 1000) {
                infoBoxRef.current.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }
    
    let infoBoxClass = `${styles.infoBox} ${highlighted ? styles.borderBox : ''}`;
    
    return (
        <div className={styles.container}>
            <div className={styles.map}>
                <Image src={src} alt="Map of Poland" />
                <a id={styles.SZZ} href="" onClick={(e) => handleClick(e, "SZZ")}>
                    <Image className={styles.icon} src={LocationIcon} alt="" />
                </a>
                <a id={styles.GDN} href="" onClick={(e) => handleClick(e, "GDN")}>
                    <Image className={styles.icon} src={LocationIcon} alt="" />
                </a>
                <a id={styles.POZ} href="" onClick={(e) => handleClick(e, "POZ")}>
                    <Image className={styles.icon} src={LocationIcon} alt="" />
                </a>
                <a id={styles.WAW} href="" onClick={(e) => handleClick(e, "WAW")}>
                    <Image className={styles.icon} src={LocationIcon} alt="" />
                </a>
                <a id={styles.KRK} href="" onClick={(e) => handleClick(e, "KRK")}>
                    <Image className={styles.icon} src={LocationIcon} alt="" />
                </a>
                <a id={styles.WRO} href="" onClick={(e) => handleClick(e, "WRO")}>
                    <Image className={styles.icon} src={LocationIcon} alt="" />
                </a>
            </div>

            <div ref={infoBoxRef} className={infoBoxClass}> 
                {CityDescriptions[currentCity]}
            </div>
        </div>
    );
}

export default InteractiveMap;
