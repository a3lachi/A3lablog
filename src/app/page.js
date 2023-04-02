import styles from '../styles/page.module.css'
import Start from './Start'
import Dots from '../components/Dots'
import MidOne from './MidOne'


export default function Home() {
  return (
    <main className={styles.main}>
      <Start />
      <Dots dotSize={23} width={600} top={210} left={-31} gap={30} color='#0369a1'  />
      <Dots dotSize={13} width={600} top={404}  gap={20} right={50} color='#5eead4'/>
      <MidOne />

    </main>
  )
}
