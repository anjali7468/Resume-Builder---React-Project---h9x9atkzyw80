import React from 'react'
import  TextField  from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';

function WorkExperience() {
  return  (
    <div  id="form3">
        <Grid container spacing={2} justify-content='center' alignItems='center' >
                <Grid item lg={12} md={12}>
                    <TextField id="company-Name" className='input' label="Company Name" variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12}>
                    <TextField id="designation" className='small-input' label="Designation" variant="outlined" />
                </Grid >
                <Grid item lg={6} md={12}>
                <TextField id="postalCode" className='small-input'  label="ProjctLink" variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12}>
                    <TextField id="startDate" className='small-input' label="Start Date" variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12}>
                    <TextField id="endDate" className='small-input' label="End Date" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField id="description" className='input' label="Description" variant="outlined" />
                </Grid>
                
        </Grid>
    </div>
  )
}

export default WorkExperience