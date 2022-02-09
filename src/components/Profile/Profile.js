import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeline from '../Timeline/CustomTimeline';
import './Profile.css';

const Profile = () => {
  return(
    <div className='profile container_shadow'>
        <div className='profile_name'>
            <Typography className='name'>Carlos Diaz</Typography>
            <Typography className='title'>Desarrollador</Typography>
        </div>

        <figure className='profile_image'>
            <img src={require('../../assets/images/ImgProfile.jpg')} alt=''/>
        </figure>

        <div className='profile_information'>
            <CustomTimeline/>
            <br/>
            <button>my Button</button>
        </div>
    </div>        
  ) 
}

export default Profile;