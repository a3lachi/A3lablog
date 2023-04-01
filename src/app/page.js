import styles from '../styles/page.module.css'
import StartHeader from '../components/StartHeader'

import StartMid from '../components/StartMid'

export default function Home() {
  return (
    <main className={styles.main}>
      <StartHeader />
      <StartMid />
    </main>
  )
}
