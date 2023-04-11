import styles from '../styles/Db.module.css'

const Db = () => {

  return (
    <div className={styles.db} >
      <div className={styles.dbtitle}>
        Databases I use
      </div>
      <div className={styles.list}>
        <div className={styles.imgg}>
          <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/240px-Postgresql_elephant.svg.png" />
          <img width={140} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/500px-MongoDB_Logo.svg.png" />
          <img width={80} src="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/200px-MySQL_logo.svg.png" />

        </div>
      </div>

    </div>
  )
}

export default Db ;