import React from "react";
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../assets/transit.jpg';
import MS from '../assets/ministry_science.png';
import OSD from '../assets/osd.png';
import AIS from '../assets/ais.png';
import SEDA from '../assets/seda.png';
import SUT from '../assets/sut.png';
import ST from '../assets/startup_thailand.png';
import SA from '../assets/startup-academy-logo.png';

const Img = styled.img`
  width : 300px;
  height : 300px;
  margin : 10px 0px;
`
const Wrap = styled.div`
  text-align: center;
`

const WrapForm = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding: 0;
`

const TextCustom = styled(TextField)`
&&{
  width: 70%;
  margin: 0% 0% 0% 15%;
}
`
const ButtonCustom = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 10px 0px 0px -75px;
`
const SponsorParent = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 100px;
`

const SponsorContain = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 10px;
`

const Sponsor1 = styled.img`
  width: auto;
  height: 50px;
`
const Sponsor2 = styled.img`
  width: auto;
  height: 30px;
`


const Login = () => {
  const [values, setValues] = React.useState({
    name: '',
    pa:''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
      <WrapForm>
        <Wrap>
          <Img src={Logo}   />
        </Wrap>
        <TextCustom
            id="standard-name"
            label="Citizen ID / Passport"
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
        />
        <ButtonCustom >
          <Button variant="contained">
            Login
          </Button>     
        </ButtonCustom>
        <SponsorParent>
          <SponsorContain>
            <Sponsor1 src={MS}/>
            <Sponsor1 src={ST}/>
            <Sponsor1 src={SA}/>
            <Sponsor1 src={SUT}/>
          </SponsorContain>
          <SponsorContain>
            <Sponsor2 src={SEDA}/>
            <Sponsor2 src={OSD}/>
            <Sponsor2 src={AIS}/>
          </SponsorContain>
        </SponsorParent>
    </WrapForm>
    );
};

export default Login;
