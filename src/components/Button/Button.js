import React from 'react'
import styles from './Button.module.css'
export default (props) => {
  const { type, action } = props

  return (
    <button
      onClick={action}
      className={styles.button}
      type={type}
    >
      {props.children}
    </button>
  )
}