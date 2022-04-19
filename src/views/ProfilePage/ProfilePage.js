import React from 'react';
// import img1 from '@src/assets/images/slider/06.jpg';

function ProfilePage(props) {
    const userProfileStyle = {
        backgroundColor: "#f8d7da",
    };

    const manageuserStyle = {
        backgroundColor: "#d4edda",
    };

    const mNotificationStyle = {
        backgroundColor: "#e2e3e5",
    };
      

    return(
        <>
        
        <section className="Profile-grid py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                       <div className="user-profile-details border-danger rounded text-center p-5" style={userProfileStyle}>
                           
                           <h4 className="text-dark">User Profile Details</h4>
                       </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="manage-user text-center border-success rounded p-5" style={manageuserStyle}>
                           <h4 className="text-dark">Mangae User</h4>
                       </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="m-notification text-center border-secondary rounded p-5" style={mNotificationStyle}>
                           <h4 className="text-dark">Merchant Notification</h4>
                       </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
    }
export default ProfilePage;