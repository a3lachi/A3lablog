import styles from '../styles/Lines.module.css'





const linesStyle = (top,left,width,height,color) => {
  return ({
    'position':'absolute' , 
    'width' : 'auto',
    'height': height+'px',
    'backgroundColor':color,
    'top':top+'px',
    'left':left+'px',
    'color':'#e5e7eb',
    }
  )
}




const Lines = (props) => {



  return (
      <div  style={linesStyle(235,40,'',40,'#dc2626')}>
        
        <div className={styles.textlins}>
          <div className={styles.textlinsone}>Mo7amed</div>
          <div className={styles.textlinstwo}>A3lachi</div>
          
        </div>
      </div>
  )
}

export default Lines ;