import React, { useState } from 'react';

import { Container, Typography, TextField, Button,Grid, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../FirebaseConfig/useAuth';
import Navbars from '../Navbars/Navbars';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user,loginUser,Loading,authError} = useAuth();
    
    
    const  location =useLocation();
    const history =useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData); 
    }
    //form submit
    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password,location,history);
    
        e.preventDefault();
    }

    
    const handleGoogleSignIn = () => {
       alert("Google")
    }
    return (
   <div className="login">

<Navbars></Navbars>
        <Grid container spacing={2}>
            <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard" />

                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                    {Loading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>
                <p>------------------------</p>
                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src="{login}" alt="" />
            </Grid>
        </Grid>

   </div>
    );
};

export default Login;