import React from 'react'
import styles from '../../styles/home.module.css'

const Experience = ({experienceData}) => {
  return (
    <div>
        <h1 className="heading" dangerouslySetInnerHTML={{__html: '&#x227A; Experience &#x227B;'}}/>
        <ul className={styles.timeline}>
            {experienceData.map((experience, index) => (
                <li key={index} className={styles.timeline_event}>
                  <label className={styles.timeline_event_icon}></label>

                  <div className={styles.timeline_event_copy}>
                    <p className={styles.timeline_event_thumbnail}>{experience.startDate} - {experience.endDate}</p>
                    <h3>{experience.designation}</h3>
                    <h4>{experience.company}</h4>

                    <ul>
                      {experience.responsibilities.map((responsiblity, index) => (
                        <li key={index}>{responsiblity}</li>
                      ))}
                    </ul>
                  
                  </div>
              </li>
            ))}
        </ul>  
    </div>
  )
}

export default Experience;