import Lines from '../components/Lines'
const midOneStyle = {
  'position':'relative',
  'marginTop':'265px',
  'height':'auto',
  'width':'70vw',
  'backgroundColor':'#374151',
  'display':'flex',
  'border': '5px solid black' 

}

const textStyle = {
  'color':'#e2e8f0',
  'fontSize':'25px',
  'padding':"10px 50px 10px 50px",
  'alignItems':'center',
  'borderLeft': '5px solid black',
  'justifyContent':'center',
  'display':'flex',
  'flexDirection':'column',
  'gap':'30px'

}

const MidOne = () => {



  return (
  <div style={midOneStyle}>
    <div style={{width:'500px',height:'500px'}}>
    <img width={500} height={'auto'} src='/cafesetup.jpg' />
    </div>
    <Lines />
    <div style={textStyle}>
      <div>
    My expertise lies in effectively <span style={{backgroundColor:'#dc2626' , color:'white'}} >solving problems</span> and I possess a keen interest in exploring various technologies and comprehending their underlying paradigms. I prioritize attaining mastery in one skill while also ensuring proficiency in others.
    </div>
    <div>
    I am able to design and write modular, expandable and clean code that meets the requirements of the project.
    </div>
    <div>
    I believe that I would be an excellent addition to any team looking for a dedicated and curious software engineer.
    </div>
    </div>
  </div>)
}


export default MidOne ;