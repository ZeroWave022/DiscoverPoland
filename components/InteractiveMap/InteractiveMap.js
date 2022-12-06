import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SyntheticEvent } from "react";

import CityDescriptions from "@lib/CityDescriptions.js";

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
                <a id={styles.SZZ} href="" onClick={(e) => handleClick(e, "SZZ")} />
                <a id={styles.GDN} href="" onClick={(e) => handleClick(e, "GDN")} />
                <a id={styles.POZ} href="" onClick={(e) => handleClick(e, "POZ")} />
                <a id={styles.WAW} href="" onClick={(e) => handleClick(e, "WAW")} />
                <a id={styles.KRK} href="" onClick={(e) => handleClick(e, "KRK")} />
                <a id={styles.WRO} href="" onClick={(e) => handleClick(e, "WRO")} />
            </div>

            <div ref={infoBoxRef} className={infoBoxClass}> 
                {CityDescriptions[currentCity]}
            </div>
        </div>
    );
}

export default InteractiveMap;
