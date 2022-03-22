import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { Button, Grid, TextField, Typography } from '@mui/material';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const TeacherSetting = ({ modalIsOpen, closeModal }) => {
    const handleOnBlur = e => {
       
        
    }
    const handleLoginSubmit = e => {
        
        e.preventDefault();
    }



    return (
        <div>


            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="row">
                    <div className="col-md-10  ">
                        <Typography className="text-center " variant="body1" gutterBottom>Change Password</Typography>


                    </div>
                    <div className="col-md-2 text-center  ">
                        <button type="button" className=" btn btn-outline-danger " onClick={closeModal}>x</button>
                    </div>
                </div>
                <Grid container spacing={2}>

                    <Grid item sx={{ mt: 2 }} xs={12} md={12}>

                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Old Password"
                                type="password"
                                name="password"
                                onBlur ={handleOnBlur }
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="New Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur }
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="ReType  Password"
                                type="password"
                                name="password2"
                                // onBlur={}
                                variant="standard" />

                            <Button  className="btn d-flex mx-auto "sx={{ width: '50%', my: 3  }} type="submit" variant="contained">Change Password</Button>

                        </form>


                    </Grid>

                </Grid>





            </Modal>

        </div>
    );
};

export default TeacherSetting;