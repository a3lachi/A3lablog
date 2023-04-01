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

      

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
