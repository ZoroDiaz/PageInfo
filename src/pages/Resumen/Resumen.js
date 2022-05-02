import { Grid, Icon, Paper, Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/CustomTimeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import resumenData from '../../utils/resumenData';
import './Resumen.css';
import { TimelineItem} from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import CustomButton  from '../../components/Button/CustomButton';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from '@mui/lab';
const Resumen = () => {
  return (
    <>
      {/* Aboute me */}
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Sobre me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme_text'>{resumenData.about}</Typography>
        </Grid>
      </Grid>

      {/* Education and experiences */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Resumen</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* experiencia */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Experiencia de trabajo' icon={<WorkIcon />}>
                {resumenData.experences.map((experences) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{experences.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{experences.date}</Typography>
                      <Typography variant='body2' className='timeline_description'>{experences.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Historial educativo' icon={<SchoolIcon />}>
                {resumenData.education.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>
                        {education.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {education.date}
                      </Typography>
                      <Typography variant='body2' className='timeline_description'>
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Service */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Mi Servicios</h6>
        </Grid>

        <Grid Item xs={12}>
          <Grid container spacing={3} justify='space-around'>
            {
              resumenData.services.map(service => (
                <Grid item xs={12} sm={6} md={3}>
                  <div className='service'>
                    <Icon className='service_icon'>
                      {service.icon}
                    </Icon>
                    <Typography className='service_title'>
                      {service.title}
                    </Typography>
                    <Typography className='service_description' variant='body2'>
                      {service.description}
                    </Typography>
                  </div>
                </Grid>
              ))
            }
          </Grid>
        </Grid>

      </Grid>

      {/* Skill */}
      <Grid container className="section graybg pb_45 p_50">
          <Grid item xs={12}>
            <Grid container justify='space-between' spacing={3}>
                {
                resumenData.skills.map( skill => (
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={0} className='skill'>
                        <Typography variant='h6' className='skill_title'>
                          {skill.title}
                        </Typography>  
                        {skill.description.map(
                          element => (
                            <Typography variant='body2' className='skill_description'>
                                <TimelineDot variant={'outlined'} className='timeline_dot'/>
                                {element}                            
                            </Typography>
                          )
                        )}
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
      </Grid>

      {/* Contact */}
      <Grid container  spacing={6} className='section pt_45 pb_45'>
            {/* contact form */}
            <Grid item xs={12} lg={7}>
                <Grid container >
                   <Grid item className='section_title mb_30'>
                     <span></span>
                     <h6 className='section_title_text'>Formulario de Contacto</h6>
                   </Grid>

                   <Grid item xs={12}>
                     <Grid container spacing={3}>
                       <Grid item xs={12} sm={6}>
                         <TextField fullwidth name="name" label="Nombre" />
                       </Grid>
                       <Grid item xs={12} sm={6}>
                         <TextField fullwidth name="email" label="E-mail" />
                       </Grid>
                       <Grid item xs={12}>
                         <TextField fullwidth name="message" label="Mensaje" multiline rows={4} />
                       </Grid>
                       <Grid item xs={12}>
                         <CustomButton text='Submit'/>
                       </Grid>
                     </Grid>
                   </Grid>
                </Grid>
            </Grid>
            {/* contact information */}
            <Grid item xs={12} lg={5}>
              <Grid container>
                <Grid item className='section_title mb_30'>
                  <span></span>
                  <h6 className='section_title_text'>Información de contacto</h6>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography className='contactInfo_item'>
                        <span>Dirección: </span>{resumenData.Address}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className='contactInfo_item'>
                        <span>Telefono: </span>{resumenData.Phone}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className='contactInfo_item'>
                        <span>E-mail: </span>{resumenData.Email}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container className ='contactInfo_socialsContainer'>
                     {Object.keys(resumenData.socials).map(key => (
                       <Grid item className='contactInfo_social'>
                          <a href={resumenData.socials[key].link}>
                            {resumenData.socials[key].icon}
                          </a>
                       </Grid>
                     ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
      </Grid>
    </>

  )
}

export default Resumen
