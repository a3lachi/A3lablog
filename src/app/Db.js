import styles from '../styles/Db.module.css'

const Db = () => {

  return (
    <div className={styles.db} >
      <div className={styles.dbtitle}>
        Databases I use
      </div>
      <div className={styles.list}>
        <div className={styles.imgg}>
          <img width={60} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/240px-Postgresql_elephant.svg.png" />
          <img width={160} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/500px-MongoDB_Logo.svg.png" />
          <img width={100} src="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/200px-MySQL_logo.svg.png" />
          <img width={150} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/MariaDB_colour_logo.svg/240px-MariaDB_colour_logo.svg.png" />
          

        </div>
      </div>

    </div>
  )
}

export default Db ;