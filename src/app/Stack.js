import styles from '../styles/Stack.module.css'
import LanBlock from '@/components/LanBlock';

const Stack = () => {



  return (
    <div className={styles.stack}>
      <div className={styles.tools}>
        <div>Programming languages I use</div>
      </div>

      <div className={styles.lanz}>
        <LanBlock ext=".py" lan="Python" />
        <LanBlock ext=".sh" lan="Bash" />
        <LanBlock ext=".js" lan="Javascript" />
        <LanBlock ext=".c" lan="C" />
        <LanBlock ext=".cpp" lan="C++" />
        <LanBlock ext=".java" lan="Java" />
        <LanBlock ext=".ts" lan="Typescript" />
        <LanBlock ext=".sql" lan="PLSQL" />
        <LanBlock ext=".m" lan="Matlab" />
        
      </div>
      
        
    </div>
  )
}

export default Stack ;