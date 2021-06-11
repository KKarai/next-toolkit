import { FC } from 'react'
import Link from 'next/link'
import { AppBar, Toolbar as MaterialToolbar, Typography, Link as MuiLink } from '@material-ui/core'
import styles from './Toolbar.module.css'

interface Props {
  title: string
}

export const Toolbar: FC<Props> = ({ title }) => (
  <AppBar color="secondary">
    <MaterialToolbar>
      <Typography variant="h5">{title}</Typography>
      <div className={styles.linkWrapper}>
        <Link href="/">
          <a className={styles.link} color="initial">
            <Typography variant="h6" color="inherit">
              Home
            </Typography>
          </a>
        </Link>
      </div>
    </MaterialToolbar>
  </AppBar>
)
