
const linesStyle = (top,left,width,height,color) => {
  return ({
    'position':'relative' , 
    'width' : width+'px',
    'height': height+'px',
    'background-color':color,
    'top':top+'px',
    'left':left+'px'
    }
  )
}


const Lines = (props) => {



  return (
    <>
      <div style={linesStyle(240,-444,50,40,'#a1a1aa')}>
        <div style={linesStyle(0,20,10,10,'#0d9488')} />
        <div style={linesStyle(0,0,20,20,'#d4d4d8')} ></div>
        <div style={linesStyle(-20,40,10,20,'#fde047')} />
        <div style={linesStyle(-20,10,20,10,'#dc2626')} />
        <div style={linesStyle(-60,0,20,10,'#92400e')} />
      </div> 
    </>
  )
}

export default Lines ;