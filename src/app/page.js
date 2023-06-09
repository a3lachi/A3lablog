import Db from './Db'
import styles from '../styles/page.module.css'
import Start from './Start'
import Dots from '../components/Dots'
import MidOne from './MidOne'
import Stack from './Stack'
import Api from './API'
import Tools from './Tools'

export default function Home() {
  return (
    <main className={styles.main}>
      <Start />
      <Dots dotSize={23} width={600} top={280} left={-31} gap={30} color='#0369a1'  />
      <Dots dotSize={13} width={600} top={404}  gap={20} right={50} color='#5eead4'/>
      <MidOne />
      <Stack />
      <Dots dotSize={7} width={750} top={1904}  gap={10} right={96} color='#3730a3'/>
      <Api />
      <Db />
      <Dots dotSize={3} width={850} top={2404}  gap={5} right={996} color='#4ade80'/>
      <Tools />
      
    </main>
  )
}
