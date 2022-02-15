import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/CustomTimeline';
import resumenData from '../../utils/resumenData';
import PersonOutlineOutlinedIcon  from '@material-ui/icons/PersonOutlineOutlined';
import './Profile.css';
import { TimelineContent } from '@mui/lab';
import { TimelineItem } from '@mui/lab';
import CustomButton from '../Button/CustomButton';
import GetAppIcon from '@material-ui/icons/GetApp';



const CustomTimelineItem = ({ title , text, link}) => (
  <TimelineItem>
    <CustomTimelineSeparator/>
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ):(
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {
  return(
    <div className="profile container_shadow">
        <div className="profile_name">
            <Typography className="name">{resumenData.name}</Typography>
            <Typography className="title">{resumenData.title}</Typography>
        </div>

        <figure className="profile_image">
            <img src={require('../../assets/images/ImgProfile.jpg')} alt=''/>
        </figure>


        <div className='profile_information'>
            <CustomTimeline icon={<PersonOutlineOutlinedIcon/>}>
              <CustomTimelineItem title='name' text={resumenData.name}/>
              <CustomTimelineItem title='Title' text={resumenData.title}/>
              <CustomTimelineItem title='Email' text={resumenData.email}/>

              {Object.keys(resumenData.socials).map((key) => (
                <CustomTimelineItem title={key} text = {resumenData.socials[key].text} link={resumenData.socials[key].link}/>
              ))}
              
            </CustomTimeline>
            <div className='button_container'>
              <CustomButton text={"Dowloader CV"} icon={<GetAppIcon/>}/>
            </div>
        </div>
    </div>        
  ) 
}

export default Profile;