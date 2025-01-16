import React from 'react'
import {
    instagramIcon,
    githubIcon,
    linkedinIcon,
    bloggerIcon,
    homeIcon,
    contactIcon
} from '../../constants/Icons';
import styles from '../../styles/home.module.css';


const Footer = ({ contactInfo}) => {
  return (
        <footer>
            <div className={styles.footer_container}>
                {/* row starts here */}
                <div className={styles.footer_row}>

                    {/* fitst column of footer starts here  */}
                    <div className={styles.footer_column}>
                        <h3>More About Me</h3>
                        <p>Full-stack developer skilled in React.js, Node.js, Next.js, and MongoDB. Experienced in optimizing code to boost website traffic and developing backend systems, BI tools, and consultation portals. Passionate about problem-solving and community contributions.!</p>
                    </div>

                    {/* second column of footer starts here */}
                    <div className={styles.footer_column}>
                        <h3>Keep Connected</h3>
                        <div className={styles.footer_socials}>
                            {/* <a href={contactInfo.instagram.link} rel="noreferrer" target="_blank"><span className={`${styles.instagram_icon} ${styles.icon}`}>{instagramIcon}</span> <span>{contactInfo.instagram.text}</span></a> */}

                            <a href={contactInfo.github.link} rel="noreferrer" target="_blank"><span className={`${styles.github_icon} ${styles.icon}`}>{githubIcon}</span> <span>{contactInfo.github.text}</span></a>

                            <a href={contactInfo.linkedin.link} rel="noreferrer" target="_blank"><span className={`${styles.linkedin_icon} ${styles.icon}`}>{linkedinIcon}</span> <span>{contactInfo.linkedin.text}</span></a>
                        </div>
                    </div>

                    {/* third column of footer starts here */}
                    <div className={styles.footer_column}>
                        <h3>Contact Information</h3>
                        <div className={styles.footer_contact}>

                            {/* contact detail information  */}
                            <a><span className={`${styles.address_icon} ${styles.icon}`}>{homeIcon}</span>{contactInfo.address}</a>

                            <a><span className={`${styles.phone_icon} ${styles.icon}`}>{contactIcon}</span>{contactInfo.mob}</a>
                            {/* contact detail information  */}
                        </div>
                    </div>
                </div>
                {/* row ends here */}
                {/* bottom row starts here  */}
                <div className={styles.footer_row}>
                    {contactInfo.copyrightText}
                </div>
            </div>
        </footer>
  )
}

export default Footer;