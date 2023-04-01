

const Dots = (props) => {

  const Nb = Math.floor(props.width / (props.dotSize +props.gap))**2 ;

  const styleDot = {
    'height': props.dotSize+"px" , 
    'width': props.dotSize+"px" , 
    'background-color': props.color , 
  }

  const styleContainer = {
    'min-height': "auto" , 
    'top':props.top+"px" ,
    'left' : props.left+"px",
    'right' : props.right+"px",
    'z-index': "-3",
    'position': "absolute",
    'width': props.width+"px",
    'display': 'flex',
    'gap':props.gap+"px" ,
    'row-gap': props.gap+"px",
    'flex-wrap': 'wrap',
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