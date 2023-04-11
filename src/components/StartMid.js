import styles from '../styles/Start.module.css';


const StartMid = () => {

  return(
    <div  className={styles.midheadcontainer} >
      <div className={styles.midheadleft} >
        <img width={680} className='ig' src="/me.jpg" />
      </div>
      <div className={styles.midheadright} >
       
        <div className={styles.midheadrighttop}>
          <span style={{ zIndex:'1' , fontSize:'25px' , fontWeight:'400'}} ><span id='student' style={{ fontSize:'30px' , fontWeight:'700' , color:'white'}} > <span style={{ width:'184px', height:'7px' , zIndex:'1' ,  display: 'inline-block' , backgroundColor:'yellow' ,top:'125px' , opacity:'0.9' , position:'absolute'}}  ></span> <span style={{zIndex:'5', textShadow: '1px 1px 1px black' , position:'relative'}}  > CS Graduate</span> </span> passionate about solving problems related to</span> <span style={{backgroundColor:'blue', color:'white'}} >Distributed Systems</span> <span style={{ fontSize:'25px' , fontWeight:'400'}} >and</span> <span style={{backgroundColor:'blue', color:'white'}} >Software</span>.
       
        </div>
        {/* <div>
          IILS ONT MIS LE CASH EN SCELLÉE
        </div> */}
        <div className={styles.midheadrightbottom}>
          <div>    #Paradigm #Design <br></br>  #Algorithm #Modular    #Reusable #Extensible #Scalable    #Product </div>
        </div>
      </div>
    </div>

  )
}

export default StartMid ;