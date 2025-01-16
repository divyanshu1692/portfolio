"use client"
import React, { useState } from 'react'
import styles from '../../styles/home.module.css'

const AccordianItem = ({stack, onClick, active}) => {
    return (
        <div className={`${styles.a_container} ${active ? styles.active: ""}`}>
            <p className={styles.a_btn} onClick={onClick}>{stack.name} <span></span></p>
            <div className={styles.a_panel}>
                <ul>
                    {stack.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const TechStack = ({techStackData}) => {
    const [clicked, setClicked] = useState("0");

    const handleClick = (index) => {
        if (clicked === index) {
         return setClicked("0");
        }
        setClicked(index);
    };

  return (
    <div>
        <h1 className="heading" dangerouslySetInnerHTML={{__html: '&#x227A; Tech Stack &#x227B;'}}/>
        <div className={styles.accordion}>
            {techStackData.map((stack, index) => (
                <AccordianItem 
                    key={index}
                    stack={stack}
                    onClick={() => handleClick(index)}
                    active={clicked === index} 
                />
            ))}
        </div>
    </div>
  )
}

export default TechStack