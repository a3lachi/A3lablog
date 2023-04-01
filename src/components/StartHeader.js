import styles from '../styles/Start.module.css';


const StartHeader = () => {



  return (
    <>
    <div className={styles.startheadcontainer} >

      <div className={styles.boxleft} >
        <div>A3</div><div>LA</div>
      </div>

      <div className={styles.boxmid}  >
        <div>WHO AM I ?</div>
      </div>
      
      <div className={styles.boxright} >
        <a  target="_blank" href="https://twitter.com/a3laxi" ><img width={30} src="/twitter.svg" /></a>
        <a  target="_blank" href="https://github.com/a3laxi" ><img width={30} src="/github.svg" /></a>
        <a target="_blank" href="https://github.com/a3laxi" ><img width={30} src="/linkedin.svg" /></a>
      </div>

    </div>
    
    </>


   
  )
}



export default StartHeader ;