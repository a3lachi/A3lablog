import styles from '../styles/page.module.css'
import Start from './Start'
import Dots from './Dots'


export default function Home() {
  return (
    <main className={styles.main}>
      <Start />
      <Dots dotSize={23} width={600} top={210} left={-59} gap={30}  />

    </main>
  )
}
