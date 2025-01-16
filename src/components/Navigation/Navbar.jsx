"use client"

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { navMenuItems } from "../../constants/NavbarData";
import { myImage } from '../../constants/Images';

import styles from '../../styles/home.module.css';


const NavLink = ({id, text, link, symbol,onClick, isActive}) =>(
    <a 
        onClick={
            useCallback(() => onClick(id),[id, onClick])
        }
        className={isActive ? styles.active : ""}
        href={link}>
        <span>{symbol}</span> <span>{text}</span>
    </a>
)

const Navbar = () => {
    const [active, setActive] = useState(0);
    return (
        <nav>
            <div className={styles.nav_container}>
                <div className={styles.nav_column}>
                    <Image height={40} width={40} src={myImage} alt="logo"/>
                </div>
                <div className={styles.nav_column}>
                    {navMenuItems.map((item,index) => (
                        <li key={index}>
                            <NavLink 
                            {...item}
                            onClick={setActive} 
                            isActive={active === item.id}
                                />
                        </li> 
                    ))}
                </div>
                <div className={styles.nav_column}>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/todivyanshubisht/" target="_blank">Connect !</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;