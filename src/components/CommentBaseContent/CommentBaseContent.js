import React from 'react'
import styles from './CommentBaseContent.module.css'
import Button from '../Button/Button'

export default (props) => {
    return (
        <div className={props.className}>
            <div className={styles.description}>
                {props.data.person}
            </div>
            <div>{props.data.text}</div>
            <div className={styles.bottomLine}>
                <div className={styles.description}>{props.data.date}</div>
                <Button type="submit">Ответить</Button>
            </div>
        </div>
    )
}
