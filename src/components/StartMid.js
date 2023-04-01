import styles from '../styles/Start.module.css';


const StartMid = () => {

  return(
    <div  className={styles.midheadcontainer} >
      <div className={styles.midheadleft} >
        <img width={680} src="/aloalo.png" />
      </div>
      <div className={styles.midheadright} >
        <div className={styles.midheadrighttop}>
          Software Engineer passionate about solving problems related to <span style={{backgroundColor:'blue', color:'white'}} >Distributed Systems.</span>
       
        </div>
        <div className={styles.midheadrightbottom}>
          <div>  #Design #Process #Modular  #Expandable #Clean  #Extensible #Reusable #Product</div>
        </div>
      </div>
    </div>

  )
}

export default StartMid ;