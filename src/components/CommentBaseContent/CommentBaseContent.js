import React from 'react'
import styles from './CommentBaseContent.module.css'

export default (props) => {
    return (
        <div className={props.className}>
            <div className={styles.description}>
                {props.data.person}
            </div>
            <div>{props.data.text}</div>
            <div className={styles.bottomLine}>
                <div className={styles.description}>{props.data.date}</div>
                <button type="submit">Ответить</button>
            </div>
        </div>
    )
}
