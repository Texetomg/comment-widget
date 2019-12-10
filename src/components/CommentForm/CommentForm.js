import React from 'react'
import Button from '../Button/Button'
import CommentInput from '../CommentInput/CommentInput'
import styles from './CommentForm.module.css'

export default (props) => {
    return (
        <form onSubmit={props.onSubmit} className={styles.commentForm}>
            <CommentInput
                name='comment'
                onChange={props.onChange}
            />
            <Button type="submit">Отправить</Button>
        </form>
    )
}