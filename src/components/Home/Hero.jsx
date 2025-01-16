import Image from 'next/image';
import {getInTouchIcon, getResumeIcon} from '../../constants/Icons';
import styles from "../../styles/home.module.css";
import { myImage } from '../../constants/Images';

const Hero = () => {
    return (
        <div className={styles.hero_container}>
            <div className={styles.hero_column}>
                <div className={styles.hero_content}>
                    <h4>Hi, I'm<span> Divyanshu Bisht</span></h4>
                    <h2>Full Stack Developer</h2>
                    <p>I am an experienced Full Stack Developer with a passion for creating efficient and user-friendly web applications. With a proven ability to optimize front-end and back-end systems, I strive to deliver exceptional digital experiences. My expertise spans technologies like React.js, Node.js, MongoDB, and Next.js, along with a strong foundation in problem-solving and data-driven solutions.</p>
                </div>
                <div className={styles.hero_button}>
                    <a href="mailto:divyanshubisht169@gmail.com">{getInTouchIcon} Get in Touch</a>
                    <a href="https://drive.google.com/file/d/14_usOKmV_AcqvwQ-6AUlUAzy9W6ILgu3/view?usp=drivesdk" rel="noreferrer" target="_blank">{getResumeIcon} View Resume</a>
                </div>
            </div>
            <div className={styles.hero_column}>
                <Image width={423} height={423} src={myImage} alt="hero" style={{objectFit: "cover"}}/>
            </div>
        </div>
    )
}

export default Hero;