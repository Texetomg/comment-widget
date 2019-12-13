import React from 'react'
import styles from './CommentBaseContent.module.css'
import Button from '../Button/Button'
import CommentForm from '../CommentForm/CommentForm'

export default (props) => {
    const { person, text, date, edited, reply } = props.data;

    return (
        <div className={props.className}>
            <div className={styles.description}>
                {person}
            </div>
            <div>{text}</div>
            <div className={styles.bottomLine}>
                <div className={styles.description}>
                    {date}
                </div>
                <div className={styles.description}>
                    {edited === 'true' ? 'edited' : null}
                </div>
                {
                    reply === 'true' ? <CommentForm/> : null
                }
                <Button type='submit'>Ответить</Button>
            </div>
        </div>
    )
}
