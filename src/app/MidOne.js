import Lines from '../components/Lines'
const midOneStyle = {
  'position':'relative',
  'margin-top':'365px',
  'height':'auto',
  'width':'70vw',
  'background-color':'#374151',
  'display':'flex',
  'border': '5px solid black' 

}

const textStyle = {
  'color':'#e2e8f0',
  'font-size':'25px',
  'padding':"10px 50px 10px 50px",
  'align-items':'center',
  'border-left': '5px solid black',
  'justify-content':'center',
  'display':'flex',
  'flex-direction':'column',
  'gap':'30px'

}

const MidOne = () => {



  return (
  <div style={midOneStyle}>
    <img width={500} height={'auto'} src='/cafesetup.jpg' />
    <Lines />
    <div style={textStyle}>
      <div>
    My expertise lies in effectively <span style={{backgroundColor:'#dc2626' , color:'white'}} >solving problems</span> and I possess a keen interest in exploring various technologies and comprehending their underlying paradigms. I prioritize attaining mastery in one skill while also ensuring proficiency in others.
    </div>
    <div>
    I am able to design and write modular, expandable and clean code that meets the requirements of the project.
    </div>
    <div>
    I believe that I would be an excellent addition to any team looking for a dedicated and talented software engineer.
    </div>
    </div>
  </div>)
}


export default MidOne ;