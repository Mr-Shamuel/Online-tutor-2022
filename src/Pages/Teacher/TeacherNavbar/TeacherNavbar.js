import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';

import LogoutIcon from '@mui/icons-material/Logout';
const TeacherNavbar = () => {
    const { user, logout } = useAuth();
    return (
        <div className="">

            <Navbar expand="sm" className="nav_bar p-0">


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mx-5">

                        <NavLink className="p-4  " style={{ textDecoration: 'none' }} to="/teachermain">Home</NavLink>

                        {/* <NavLink className="p-4 " style={{ textDecoration: 'none' }} to="/newsfeed">Newsfeed</NavLink> */}
                        <NavLink className="p-4 " style={{ textDecoration: 'none' }} to="/tnotification">Notification</NavLink>


                    </Nav>


                    {
                        user?.email &&
                        <NavLink to="/teacherprofile" class="login_btn  text-white d-flex align-items-center"><span class="header_icon"><LogoutIcon sx={{ fontSize: 30, mr: 2 }}></LogoutIcon></span>Profile</NavLink>


                    }




                </Navbar.Collapse>

            </Navbar>



        </div>
    );
};

export default TeacherNavbar;