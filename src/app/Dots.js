'use client'

const Dots = (props) => {

  const Nb = Math.floor(props.width / (props.dotSize +props.gap))**2 ;

  console.log('fghhgfd$$$$$$$',Nb)

  const styleDot = {
    'height': props.dotSize+"px" , 
    'width': props.dotSize+"px" , 
    'background-color': 'aqua' , 
  }

  const styleContainer = {
    'min-height': "auto" , 
        'top':props.top+"px" ,
        'left' : props.left+"px",
        'z-index': "-3",
        'opacity': "0.4",
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