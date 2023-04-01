import styles from '../styles/Start.module.css';


const Start = () => {



  return (
    <>
    <div className={styles.container} >

      <div className={styles.boxleft} >
        <div>A3</div><div>LA</div>
      </div>

      <div className={styles.boxmid}  >
        <div>WHO AM I?</div>
      </div>
      
      <div className={styles.boxright} >
        <img width={30} src="/twitter.svg" />
        <img width={30} src="/github.svg" />
        <img width={30} src="/linkedin.svg" />
      </div>

    </div>
    
    </>


   
  )
}



export default Start ;