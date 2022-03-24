import React from 'react';
import Header from '../../../Components/Header/Header';
import Newsfeed from '../Newsfeed/Newsfeed';

import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';


const TeacherMain = () => {
    return (
        <div>
            <Header></Header>
           <TeacherNavbar></TeacherNavbar>
           <Newsfeed></Newsfeed>
           
         

          
      
        </div>
    );
};

export default TeacherMain;