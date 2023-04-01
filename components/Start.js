import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../styles/Start.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Start = () => {



  return (
    <>
    <div className={styles.container} >

      <div className={styles.boxleft} >
        <div>A3</div><div>LA</div>
      </div>

      <div className={styles.boxmid} >
        <div>WHO AM I?</div>
      </div>
      
      <div className={styles.boxright} >
        <TwitterIcon />
        <GitHubIcon />
        <LinkedInIcon />
        
      </div>

    </div>
    
    </>


   
  )
}



export default Start ;