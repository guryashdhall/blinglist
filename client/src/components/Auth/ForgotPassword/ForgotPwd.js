import React from 'react';
import useForm from '../../../helpers/useForm';
import validate from '../../../helpers/validateInfo';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import NavBar from '../../NavBar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Typography} from '@mui/material';

const ForgotPwd = () => {

  const { handleChange, values, handleSubmit, errors, } = useForm(validate);
  const [SecurityQuestion, setSecurityQuestion] = React.useState('');
  
  const [title, setTitle] = React.useState("Forgot Password?");
  const [color, setColor] = React.useState("#000000");
  return (
    <div>
       <Box>
        <Typography variant="h2" sx={{ p:2 }}>
        Forgot Password ?
          </Typography>
    </Box>
      {/* <h2 textAlign='center' alignItems='center'width="100%" >Forgot Password ?</h2> */}
        {/* <NavBar title={title} color={color}></NavBar> */}
      <form className='form' onSubmit={handleSubmit} 
      style={{
        display:'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <br />
        <br />
        <div className='form-inputs'>
          <label htmlFor='email'
            className='form-label'>
          </label>
          <TextField
          color="secondary"
          label="Email"
            id="email"
            type="email"
            name="email"
            className='form-input'
            placeholder='Enter your Email'
            value={values.email}
            onChange={handleChange} />
        </div>
        <br/>
        {errors.email && <p style={{ color: '#FF0000', alignItems: 'center', textAlign: 'center', margin: '5px' }}>{errors.email}</p>}
              <Box sx={{ minWidth: 225 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Security Question</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={SecurityQuestion}
          label="Security Question"
          onChange={(e)=>{
            console.log('here')
            setSecurityQuestion(e.target.value)
        }}
        >
          <MenuItem value={10}>What's your pet name?</MenuItem>
          <MenuItem value={20}>What's your mother's maiden name?</MenuItem>
          <MenuItem value={30}>What's the brand of your first car?</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br/>
        <br/>
    <div className='form-inputs'>
          <label htmlFor='Security Answer'
            className='form-label'>
          </label>
          <TextField
            label="Security Answer"
            id='securityAnswer'
            type="text"
            name="securityAnswer"
            className='form-inputs'
            placeholder='Enter Security Answer'
            value={values.firstName}
            onChange={handleChange}
            variant="outlined" />
          {errors.securityAnswer && <p style={{ color: '#FF0000', alignItems: 'center', textAlign: 'center', margin: '5px' }}>{errors.securityAnswer}</p>}
        </div>
  <br/>
  <Button href="/resetPwd" 
              className='form-input-btn'
              variant="contained"
              type='submit'
              style={{ background: '#000000' }}>Submit</Button>
      </form>
    </div>

  )
}

export default ForgotPwd;