import React from 'react';
import './Footer.css';
import { Typography } from '@material-ui/core';
import resumeData  from '../../utils/resumenData';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
          <Typography className='footer_name'>{resumeData.Name}</Typography>
      </div>
      <div className='footer_right'>
         <Typography className='footer_copyright'>
              Developed for <a href='/' target='_blank'>Carlos Diaz</a> 
              <br/>
              Clone idea from <a href='' target='_blank'>Travoline</a> 
         </Typography>
      </div>
    </div>
  )
}

export default Footer;