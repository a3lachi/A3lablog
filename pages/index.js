import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Start from '../components/Start'


export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>A3lablog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Start />
    </div>
  )
}
