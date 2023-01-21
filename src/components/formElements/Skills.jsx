import React from 'react'
import  TextField  from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';

function Skills() {
  return (
    <div  id="form4" >
        <Grid container spacing={2} justify-content='center' alignItems='center' >
            <Grid item lg={12} md={12}>
                    <h1>Skills</h1>
            </Grid>
            <Grid item lg={12} md={12}>
                <TextField id="skill" className='input'  label="Add Skills" variant="outlined" />
            </Grid>
        </Grid>
    </div>
  )
}

export default Skills