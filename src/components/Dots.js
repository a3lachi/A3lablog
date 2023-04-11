

const Dots = (props) => {

  const Nb = Math.floor(props.width / (props.dotSize +props.gap))**2 ;

  const styleDot = {
    'height': props.dotSize+"px" , 
    'width': props.dotSize+"px" , 
    'backgroundColor': props.color , 
  }

  const styleContainer = {
    'minHeight': "auto" , 
    'top':props.top+"px" ,
    'left' : props.left+"px",
    'right' : props.right+"px",
    'zIndex': "-3",
    'position': "absolute",
    'width': props.width+"px",
    'display': 'flex',
    'gap':props.gap+"px" ,
    'rowGap': props.gap+"px",
    'flexXrap': 'wrap',
  }

  return (
    <div style={styleContainer}>
      {Array.from({ length: Nb }).map((_, i) => (
        <div style={styleDot} key={i}></div>
      ))}
    </div> 
  )
  
}



export default Dots ;