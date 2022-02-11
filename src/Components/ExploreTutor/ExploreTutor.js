import React from 'react';
import './ExploreTutor.css'

const ExploreTutor = () => {
    return (
        <div className="bg-danger container">
            <h1 className="py-3">Explore teacher</h1>


            <div className="Explore">

                <div className="join">
                    <h3><span >Join as a </span>STUDENT</h3>
                    <ul>
                        <li>Search for online and local tutors</li>

                        <li>Communicate with any of our tutors for free</li>
                        <li>Manage your lessons through our bookings system</li>
                        <li>If you are not satisfied with your tutor we will refund our fee</li>
                    </ul>
                    <div class="joinbtn"><a class="btn btn-primary " href="#">REGISTER</a></div>
                </div>


                        {/* //teacher */}
                <div className="join">
                    <h3><span >Join as a </span>TUTOR</h3>
                    <ul>
                        <li>Search for online and local tutors</li>

                        <li>Communicate with any of our tutors for free</li>
                        <li>Manage your lessons through our bookings system</li>
                        <li>If you are not satisfied with your tutor we will refund our fee</li>
                    </ul>
                    <div class="joinbtn"><a class="btn btn-outline-danger " href="#">REGISTER</a></div>
                </div>

            </div>
             <section class="sectionnGap"></section>

        </div>
    );
};

export default ExploreTutor;