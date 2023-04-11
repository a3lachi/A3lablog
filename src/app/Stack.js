import styles from '../styles/Stack.module.css'
import LanBlock from '@/components/LanBlock';

const Stack = () => {



  return (
    <div className={styles.stack}>
      <div className={styles.tools}>
        <div>Programming languages I use</div>
      </div>

      <LanBlock ext=".cpp" lan="C++" />
      
        
    </div>
  )
}

export default Stack ;