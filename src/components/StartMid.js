import styles from '../styles/Start.module.css';


const StartMid = () => {

  return(
    <div  className={styles.midheadcontainer} >
      <div className={styles.midheadleft} >
        <img width={680} src="/aloalo.png" />
      </div>
      <div className={styles.midheadright} >
        <div className={styles.midheadrighttop}>
          <span style={{ fontSize:'25px' , fontWeight:'400'}} ><span id='student' style={{ fontSize:'30px' , fontWeight:'700' , color:'#f1f5f9'}} >CS Graduate</span> passionate about solving problems related to</span> <span style={{backgroundColor:'blue', color:'white'}} >Distributed Systems</span> <span style={{ fontSize:'25px' , fontWeight:'400'}} >and</span> <span style={{backgroundColor:'blue', color:'white'}} >Software</span>.
       
        </div>
        <div className={styles.midheadrightbottom}>
          <div>  #Algorithm   #Paradigm #Design #Modular  #Expandable    #Reusable #Extensible  #Product </div>
        </div>
      </div>
    </div>

  )
}

export default StartMid ;