import React from 'react';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import useAuth from '../Login/FirebaseConfig/useAuth';
import './Header.css'
import { NavLink } from 'react-router-dom';
// import tutor from '../../images/Online Tutor.png'
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className=" bg-white header  ">

            {/* top banner start here  */}

            <div class="row mx-5 py-3">
                <div class=" col-md-4  ">
                   <Link style={{textDecoration: "none",color:"black" }} to="/"> <h1 class="text-center" >Online Tutor</h1></Link>
                   {/* <h1 class="text-center" >Online Tutor</h1> */}
                    {/* <img src={tutor}alt="" /> */}
                </div>
                <div class=" col-md-8  ">

                    <h4 class=" text-center pt-2 " ><span class="header_icon"><AddIcCallOutlinedIcon sx={{ fontSize: 35, mr: 1 }}></AddIcCallOutlinedIcon></span> 01303001354  
                    {
                        user?.email ?
                            <NavLink to="/login" onClick={logout} class="login_btn  text-dark mx-5"><span class="header_icon"><LogoutIcon sx={{ fontSize: 30, mr: 1 }}></LogoutIcon></span>LogOut {user.displayName}</NavLink>

                            :
                           
                            <NavLink to="/login" class="login_btn  text-dark mx-5"><span class="header_icon"><LoginRoundedIcon sx={{ fontSize: 30, mr: 1 }}></LoginRoundedIcon></span>Login</NavLink>
                    }
                    </h4>




                </div>

            </div>




        </div>
    );
};

export default Header;