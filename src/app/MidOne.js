import Lines from '../components/Lines'
const midOneStyle = {
  'position':'relative',
  'top':'375px',
  'height':'auto',
  'width':'70vw',
  'background-color':'#374151',
  'display':'flex',

}

const textStyle = {
  'color':'#e2e8f0',
  'font-size':'40px',
  'padding':"40px 40px 10px 40px",
  'align-items':'center',
}

const MidOne = () => {



  return (
  <div style={midOneStyle}>
    <img width={500} height={'auto'} src='/cafesetup.jpg' />
    <Lines />
    <div style={textStyle}>
    My expertise lies in effectively <span style={{backgroundColor:'#dc2626'}} >tackling problems</span> and I possess a keen interest in exploring various technologies and comprehending their underlying paradigms. I prioritize attaining mastery in one skill while also ensuring proficiency in others.
    </div>
  </div>)
}


export default MidOne ;