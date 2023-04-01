import styles from '../styles/Start.module.css';


const StartMid = () => {

  return(
    <div  className={styles.midheadcontainer} >
      <div className={styles.midheadleft} >
        <img width={680} src="/aloalo.png" />
      </div>
      <div className={styles.midheadright} >
        <div className={styles.midheadrighttop}>
          I read palms, watch birds and write stable, maintainable and easily scalable code.
        </div>
        <div className={styles.midheadrightbottom}>
          <div>- - - - - - - - - - - - - - - - - - - - - - - -  </div>
        </div>
      </div>
    </div>

  )
}

export default StartMid ;