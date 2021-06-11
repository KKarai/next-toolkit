import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit Apps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <p>
          <Link href="/counter">
            <a className={styles.link}>Counter</a>
          </Link>
        </p>
        <p>
          <Link href="/books">
            <a className={styles.link}>Books</a>
          </Link>
        </p>
      </header>
    </div>
  )
}

export default IndexPage
