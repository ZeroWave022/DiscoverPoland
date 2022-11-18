import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./InteractiveMap.module.css";

/**
 * @param {Object} props
 * @param {string} props.src
 */
function InteractiveMap({ src }) {
    const [highlighted, setHighlight] = React.useState(false);

    function handleClick(e) {
        e.preventDefault();

        // TODO: Update text in infoBox so it shows info about the city a user clicked on.
        
        setHighlight(true);

        setTimeout(() => setHighlight(false), 2000)
    }
    
    let infoBoxClass = `${styles.infoBox} ${highlighted ? styles.borderBox : ''}`;
    
    return (
        <div className={styles.container}>
            <div className={styles.map}>
                <Image src={src} alt="Map of Poland" />
                <a id={styles.SZZ} href="" onClick={(e) => handleClick(e)} />

                <a id={styles.GDN} href="" onClick={(e) => handleClick(e)} />
                <a id={styles.POZ} href="" onClick={(e) => handleClick(e)} />
                <a id={styles.WAW} href="" onClick={(e) => handleClick(e)} />
                <a id={styles.KRK} href="" onClick={(e) => handleClick(e)} />
                <a id={styles.WRO} href="" onClick={(e) => handleClick(e)} />
            </div>
            
            <div className={infoBoxClass}>
                <h1>City Name</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ligula ut lectus sodales pellentesque a sit amet lectus. Cras vestibulum imperdiet sodales. Quisque non sem mi. Vestibulum ac accumsan tortor, vel venenatis ipsum. Morbi egestas, augue sed suscipit iaculis, neque magna luctus erat, et vehicula velit nibh vel libero. Nulla facilisi. Sed sodales dolor velit, sit amet cursus lacus placerat ac. Quisque pellentesque, ligula sit amet interdum accumsan, dui augue porttitor elit, vel tincidunt est sapien vel justo. Sed et odio malesuada, pharetra urna malesuada, dignissim libero. Integer porttitor pharetra mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacinia id diam id condimentum. </p>

                <p>Aenean luctus, leo ut mollis tincidunt, est libero malesuada mauris, eget facilisis elit quam in lacus. Maecenas finibus, erat a varius sagittis, diam velit egestas orci, vel posuere nunc dolor vitae velit. In fermentum quam maximus risus laoreet, vitae commodo dui auctor. In sit amet auctor magna. Donec et augue in ipsum placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, orci vitae vehicula condimentum, nibh neque fringilla quam, quis varius lectus metus at lectus. In vel felis et dolor convallis efficitur iaculis non lacus.</p>
            </div>
        </div>
    );
}

export default InteractiveMap;
