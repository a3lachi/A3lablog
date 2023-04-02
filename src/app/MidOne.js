import Lines from '../components/Lines'
const midOneStyle = {
  'position':'relative',
  'top':'375px',
  'height':'auto',
  'width':'70vw',
  'background-color':'#374151',
  'display':'flex',

}

const MidOne = () => {



  return (
  <div style={midOneStyle}>
    <img width={500} src='/cafesetup.jpg' />
    <Lines />
  </div>)
}


export default MidOne ;