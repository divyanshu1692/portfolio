import React from 'react'
import Image from 'next/image'
import styles from '../../styles/home.module.css'

const Projects = ({projectData}) => {
  return (
    <div className={styles.project_container}>
        <h1 className="heading" dangerouslySetInnerHTML={{__html: '&#x227A; Projects &#x227B;'}}/>
        { projectData.map((item, index) => 
            <div key= {index} className={styles.project_row}>
                <div className={styles.project_column}>
                    <Image src={item.image} alt="" layout='responsive' width={300} height={250}/>
                    <div className={styles.project_overlay}>
                        <p>{item.tech}</p>
                    </div>
                </div>
                <div className={styles.project_column}>
                    <div className={styles.project_topbar}>
                        <h2>{item.title}</h2>
                        <p>{item.date}</p>
                    </div>
                    <div className={styles.project_detail}>
                        <p>{item.description}
                        </p>
                    </div>
                    <div className={styles.project_bottombar}>
                        <a rel="noreferrer" href={item.link} target="_blank">Show More</a>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Projects