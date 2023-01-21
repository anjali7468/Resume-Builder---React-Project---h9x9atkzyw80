import React from 'react'
import  TextField  from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import {Icon}  from '@material-ui/core';

function Education(props) {
    // handleInput=props.handler
    // submitForm = props.submit
  return (
    <div id="form2">
        
        <Grid container spacing={2} justify-content='center' alignItems='center' >
                <Grid item lg={12} md={12}>
                    <TextField id="college-Name" className='input' label="School/College Name" onChange={(e)=>handleInput(e.target.name, e.target.value)} variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12}>
                    <TextField id="stream" className='small-input' label="Stream" variant="outlined" />
                </Grid >
                <Grid item lg={6} md={12}>
                <TextField id="grade" className='small-input'  label="Grade" variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12}>
                    <TextField id="startDate" className='small-input' label="Start Date" variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12}>
                    <TextField id="endDate" className='small-input' label="End Date" variant="outlined" />
                </Grid>
        </Grid>
        
    </div>
  )
}

export default Education