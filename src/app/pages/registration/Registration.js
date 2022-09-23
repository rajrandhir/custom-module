import React, { useState } from 'react';
import "../registration/Registration.css"
import { Button, Card, CardContent, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { RegisterUser } from '../../store/actions/Register.action';
import { toast } from 'react-toastify';
import validation from '../../../utils/validation/validation';


const Registration = () => {
  const [regFormData, setRegFormData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState({})
  const dispacth = useDispatch();


  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRegFormData({ ...regFormData, [name]: value })
  }
  const handleSumit = (e) => {
    e.preventDefault();
    setError(validation(regFormData))
    dispacth(RegisterUser(regFormData));
    // toast.success('register succesfully!')    
  }
  return (
    <div className='main_bx'>
      <div className="registration_bx">
        <Card>
          <CardContent>
            <form onSubmit={handleSumit}>
              <div>
                <h4>Registration Form</h4>
              </div>
              <div>
                <TextField
                  name='email'
                  label="email"
                  onChange={handleChange}
                  value={regFormData.email}
                  size="small"
                // autoComplete='off'
                />
                {error.email && <p className='reg_error'>{error.email}</p>}

              </div>
              <div style={{ marginTop: "1rem" }}>
                <TextField
                  name='password'
                  label="password"
                  onChange={handleChange}
                  value={regFormData.password}
                  size="small"
                // autoComplete='off'
                />
                {error.password && <p className='reg_error'>{error.password}</p>}
              </div>
              <div style={{ textAlign: "center", paddingTop: "1rem" }}>
                <Button variant='contained' type='submit'>Sumit</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Registration;
