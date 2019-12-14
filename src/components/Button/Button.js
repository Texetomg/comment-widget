import React from 'react'
import styles from './Button.module.css'
export default (props) => {
  const { type, onClick } = props

  return (
    <button
      onClick ={ onClick }
      className={styles.button}
      type={type}
    >
      {props.children}
    </button>
  )
}