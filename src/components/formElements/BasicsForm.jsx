import React from 'react'
import  TextField  from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Box  from '@material-ui/core/Box';
// // import {Stack} from "@material-ui/core"
import {Icon}  from '@material-ui/core';

function BasicsForm() {
  return (
    <div id='form1'>
        {/* <h1>Basics</h1>
            <div className='containerName'>
            <img src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="profile"  />
            <div>
                <TextField id="fullname" className='input' label="Full Name" variant="outlined" />
                <div><Icon color="primary">add_circle</Icon><span>Add Image</span></div>
            </div>

            </div>
                
            <div>
                <TextField id="outlined-basic" className='input' label="Email Address" variant="outlined" />
            </div>
            
            <div>
                <TextField id="phoneNumber" className='input' label="Phone Number" variant="outlined" />
                <TextField id="website" className='input' label="Website" variant="outlined" />
            </div>
            
            <div>
                <TextField id="headline" className='input' label="Headline" variant="outlined" />
            </div>
            <div>
                <TextField id="summary" className='input' label="Summary" variant="outlined" />
            </div> */}
            
           
            <Grid container spacing={2} justify-content='center' alignItems='center' >
                <Grid item lg={12} md={12}>
                    <h1>Basics</h1>
                </Grid>
                <Grid item lg={1} md={2}>
                    <img src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="profile"  />
                </Grid>
                <Grid item lg={10} md={12} sm={12} xs={12}  id="abc">
                    <TextField id="fullname" className='inputs' width="100%" label="Full Name" variant="outlined" />
                    <Button id='add-image'><Icon color="primary">add_circle</Icon><span>Add Image</span></Button>
                </Grid>
                <Grid item lg={12}md={12} sm={12} xs={12} >
                    <TextField id="email" className='input' label="Email Address" variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12} sm={12} xs={12}  >
                    <TextField id="phoneNumber" className="small-input" label="Phone Number" variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12} sm={12} xs={12}  >
                    <TextField id="website" className="small-input" label="Website" variant="outlined" />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}  >
                    <TextField id="headline" className='input' label="Headline" variant="outlined" />
                </Grid>


                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <h1>Location</h1>
                </Grid>
                <Grid item  lg={12} md={12} sm={12} xs={12} >
                    <TextField id="address" className='input' label="Address" variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12} sm={12} xs={12} >
                    <TextField id="city" className='small-input' label="City" variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12} sm={12} xs={12} >
                    <TextField id="reagion" className='small-input' label="Reagion" variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12} sm={12} xs={12} >
                    <TextField id="country" className='small-input' label="Country" variant="outlined" />
                </Grid>
                <Grid item lg={6} md={12} sm={12} xs={12} >
                <TextField id="postalCode" className='small-input'  label="Postal Code" variant="outlined" />
                </Grid>
            </Grid>
    </div>
  )
}

export default BasicsForm;