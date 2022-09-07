import React, { useState } from 'react';
import "../registration/Registration.css"
import { Button, Card, CardContent, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/Login.action';
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email!").required("required!"),
  password: Yup.string().required("This field is required!")
  
});

const Registration = () => {


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispacth(loginUser(values));
      // toast.success('login success!!')  

    },
  });


  const dispacth = useDispatch();
  // const handleChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   setFormData({ ...formData, [name]: value })
  // }
  // const handleSumit = (e) => {
  //   e.preventDefault();

  // }

  return (
    <div className='main_bx'>
      <div className="registration_bx">
        <Card>
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <h4>Login Form</h4>
              </div>
              <div>
                <TextField
                  name='email'
                  label="email"
                  {...formik.getFieldProps("email")}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}


                  size="small"
                // autoComplete='off'
                />

              </div>
              <div style={{ marginTop: "1rem" }}>
                <TextField
                  name='password'
                  label="password"
                  {...formik.getFieldProps("password")}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                size="small"
                // autoComplete='off'
                />
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



