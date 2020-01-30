/* eslint-disable react/prop-types */
import React from 'react'
import styles from './Button.module.css'

const Button = ({ type, text, alt, img, css, action }) => (
  <button onClick={action} type={type} className={styles[css]}>
    <div className={styles.wrapper}>
      <img src={img} alt={alt} />
      <span>{text}</span>
    </div>
  </button>
)

export default Button
