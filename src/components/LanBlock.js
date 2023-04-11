
import styles from '../styles/LanBlock.module.css'




const LanBlock = (props) => {



  return (
    <div className={styles.lanblock} >
      <div className={styles.lanimg}>
        <div className={styles.cut}>

        </div>
        <div className={styles.undercut} >

        </div>
        <div  className={styles.exte}>
          {props.ext}
        </div>
      </div>
      <h4>{props.lan}</h4>
       
    </div>
  )
}


export default LanBlock ;