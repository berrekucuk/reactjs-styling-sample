import React from 'react'
import styles from './style.module.css'

function Blog() {
  return <>
    <div className={styles.blog}>
        <h1 className={styles.title}>Blog</h1>
        <p>This is the blog page.</p>
    </div>
  </>
}

export default Blog