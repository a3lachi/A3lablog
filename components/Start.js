import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled.div`
  margin-bottom: auto;
  border: 5px solid black ;
  width:70vw;
  height:100%;
  display: flex;
`

const BoxLeft = styled.div`
  align-text: center;
  border-right: 5px solid black;
  display: inline-block;
  padding: 10px 10px 10px 10px;
`

const BoxMid = styled.div`
  align-text: center;
  border-right: 5px solid black;
  padding: 10px 10px 10px 10px;
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
`

const BoxRight = styled.div`
  align-text: center;
  padding: 10px 10px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Start = () => {



  return (

    <Container>
      <BoxLeft>
        <div>A3</div><div>LA</div>
      </BoxLeft>

      <BoxMid>
        <div>WHO AM I?</div>
      </BoxMid>

      <BoxRight>
        <TwitterIcon />
        
      </BoxRight>
    </Container>
  )
}



export default Start ;