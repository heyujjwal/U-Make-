import React, { useState,useContext } from 'react'

import {styled,Button, Dialog, Box, TextField,Typography} from '@mui/material'

import { authenticateSignup,authenticateLogin } from '../../service/api.js';

import { DataContext } from '../context/DataProvider';

const Component = styled(Box)`
   height: 70vh;
   width: 90vh;

`;
const Wrapper = styled(Box)`
   display:flex;
   flex-direction:column;
   padding:25px 35px;
   flex:1;
   & > div ,&>button,&>p{
    margin-top:20px;
   }

`;
const Text=styled(Typography)`
  font-size:12px;
  color:#878787;

`;

const CreateAccount=styled(Typography)`
   font-size:14px;
   text-align:center;
   color:#4B008B;
   font-weight:600;
   cursor:pointer;
`;

const LoginButton=styled(Button)`
  text-transform:none;
  background:#fb6416;
  color:#fff;
  height:48px;
  border-radius:2px;

`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;
const RequestOtp=styled(Button)`
  text-transform:none;
  background:#FFF;
  color:#4B008B;
  height:48px;
  border-radius:2px;
  box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Image = styled(Box)`
   background: #4B008B url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
   height: 83%;
   width: 20%;
   padding:45px 35px;
   & > p,& >h5{
    color:#fff;
    font-weight:600;
   }
`;

const loginInitialValues = {
  username: '',
  password: ''
};

const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
};  

const accountInitialValues = {
  login: {
      view: 'login',
      heading: 'Login',
      subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
      view: 'signup',
      heading: "Looks like you're new here",
      subHeading: 'Signup to get started'
  }
}
const LoginDialog = ({open,setOpen}) => {
  const [ signup, setSignup ] = useState(signupInitialValues);
  const [ error, showError] = useState(false);
  const [ login, setLogin ] = useState(loginInitialValues);
  const [account, toggleAccount] = useState(accountInitialValues.login)
  const {setAccount}= useContext(DataContext);

    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login)
        showError(false);
    }

    const toggleSignup=()=>{
      toggleAccount(accountInitialValues.signup)
    }

    const onValueChange = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
  }
    const onInputChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value });
  }

  const signupUser = async() => {
    let response = await authenticateSignup(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.username);
}
const loginUser = async() => {
  let response = await authenticateLogin(login);
  console.log(response)
  if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
        }
}

return (
  <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
          <Box style={{display: 'flex', height: '100%'}}>
              <Image>
                  <Typography variant="h5">{account.heading}</Typography>
                  <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
              </Image>
              {
                  account.view === 'login' ? 
                  <Wrapper>
                      <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' />
                      { error && <Error>Please enter valid Email ID/Mobile number</Error> }
                      <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                      <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                      <LoginButton onClick={() => loginUser()} >Login</LoginButton>
                      <Text style={{textAlign:'center'}}>OR</Text>
                      <RequestOtp>Request OTP</RequestOtp>
                      <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                  </Wrapper> : 
                  <Wrapper>
                      <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                      <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                      <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                      <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                      <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                      <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                      <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
                  </Wrapper>
              }
          </Box>
      </Component>
  </Dialog>
)
}

export default LoginDialog 
