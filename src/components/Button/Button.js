import React from 'react'
import styles from './Button.module.css'
export default (props) => {
    return (
        <button
            className={styles.button}
            type={props.type}
        >
            {props.children}
       </button>
    )
}