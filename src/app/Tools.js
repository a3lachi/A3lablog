import styles from '../styles/Tools.module.css'


const Tools = () => {



  return(
    <div className={styles.tools} >
      <div className={styles.toolstitle} >
        Tools I use
      </div>

      <div className={styles.list}>
        <div className={styles.imgg}>
        <img width={70} src="https://cdn-icons-png.flaticon.com/512/2/2235.png" />
        <img width={70} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/150px-Visual_Studio_Code_1.35_icon.svg.png" />
        <img width={80} src="https://upload.wikimedia.org/wikipedia/commons/3/31/ITerm2_v3.4_icon.png" />
        <img width={70} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/240px-Vimlogo.svg.png" />
        <img width={70} src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" />
        <img width={70} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png" />
        <img width={120} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png" />
        <img width={120} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png" />
        <img width={70} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/240px-Google_Chrome_icon_%28February_2022%29.svg.png" />

        </div>

      </div>
    </div>
  )
}

export default Tools ;