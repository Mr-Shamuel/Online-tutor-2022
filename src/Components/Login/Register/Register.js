import { Typography, TextField, Button, CircularProgress, Alert, FormLabel, FormControl } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, } from 'react-router-dom';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth'

import register from '../../../images/register.webp'
import Navbars from '../../Navbars/Navbars';






const Register = () => {



    const [loginData, setLoginData] = useState({});

    const { user, registerUser, Loading, authError } = useAuth();


    const handleOnBlur = e => {
        console.log(e);
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password)
      console.log(loginData);
        e.preventDefault();
    }
    return (


        <div className="register">
           <Navbars></Navbars>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!Loading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <FormControl>

                            <RadioGroup
                             onBlur={handleOnBlur}
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="Gender">
                                <FormLabel id="demo-row-radio-buttons-group-label " sx={{ width: '20%', m: 2 }} >Gender</FormLabel>
                                <FormControlLabel value="female"   name="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male"   name="male"  control={<Radio />} label="Male" />

                            </RadioGroup>
                        </FormControl>
                                
                                <br />

                        <FormControl>

                            <RadioGroup
                            onBlur={handleOnBlur}
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="role">
                                <FormLabel id="demo-row-radio-buttons-group-label " sx={{ m: 2 }} >Log in As a </FormLabel>
                                <FormControlLabel value="teacher" name="teacher" control={<Radio />} label="Teacher" />
                                <FormControlLabel value="student" name="student" control={<Radio />} label="Student" />

                            </RadioGroup>
                        </FormControl>



                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {
                        Loading && <CircularProgress />
                    }


                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={register} alt="" />
                </Grid>
            </Grid>
        </div>

    );
};

export default Register;