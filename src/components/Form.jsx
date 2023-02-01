import React from 'react'
import  TextField  from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Icon}  from '@material-ui/core';


function Form(props) {
    // const [education, setEducation] = useState(false);
    // const [experience, setExperience] = useState(false);

  
    const handleInput = props.handler;
        
    const submitForm = props.submit;
    const buttondata = props.buttondata;
    // const handleEducation=()=>{
    //     setEducation(true);
    // }
    // const handleExperience=()=>{
    //     setExperience(true);
    // }

    
  return (
        <div id="form-component">
           
            
            <form onSubmit={submitForm} id='form'>
                <div id='form1'>
                <h1 id="heading">Resume-Builder</h1>
                    <Grid container spacing={2}  >
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1>Basics</h1>

                        </Grid>
                        <Grid item lg={1} md={2}>
                         <img id="img" src="data:image/jpeg;base64,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" alt="profile"  />
                        </Grid>
                        <Grid item lg={10} md={12} sm={12} xs={12}  id="abc">
                             <TextField  type="text" id="fullname" name="fullname" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='inputs' width="100%" label="Full Name" variant="outlined" required   />
                             <TextField   type="file" component="label" name="addimage" id='add-image' onChange={async(e)=>handleInput(e.target.name, e.target.value)}><Icon color="primary">add_circle</Icon>Add-Imagerequired </TextField>

                        </Grid>
                        <Grid item lg={12}md={12} sm={12} xs={12} >
                             <TextField  type="email"  id="email" name="email" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Email Address" variant="outlined" required  />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12}  >
                             <TextField  type="number" id="phoneNumber" name="phonenumber" onChange={(e)=>handleInput(e.target.name, e.target.value)} className="small-input" label="Phone Number" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12}  >
                             <TextField  type="url" id="website" name="website" onChange={(e)=>handleInput(e.target.name, e.target.value)} className="small-input" label="Website" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}  >
                             <TextField  type="text" id="headline" name="headline" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Headline" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}  >
                             <TextField  type="text" id="summary" name="summary" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Summary" variant="outlined" required   />
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <h1>Location</h1>
                           

                        </Grid>
                        <Grid item  lg={12} md={12} sm={12} xs={12} >
                             <TextField  type="text" id="address" name="address" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Address" variant="outlined" required   />
                        </Grid>
                        <Grid item  lg={12} md={12} sm={12} xs={12} >
                             <TextField  type="url" id="linkedIn" name="linkedin" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="linkedIn" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12} >
                             <TextField  type="text" id="city" name="city" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="City" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12} >
                             <TextField  type="text" id="reagion" name="region" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Reagion" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12} >
                             <TextField  type="text" id="country" name="country" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Country" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12} >
                         <TextField  type="number" id="postalCode" name="postalcode" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input'  label="Postal Code" variant="outlined" required   />
                        </Grid>
                    </Grid>
                </div>    

                <div className="form2">
                    <Grid container spacing={2} justify-content='center' alignItems='center' >
                        <Grid item lg={12} md={12}>
                            <h1>Education</h1>
                            {/* <Button onClick={handleEducation}><Icon color="primary">add_circle</Icon></Button> */}
                        </Grid>
                        <Grid item lg={12} md={12}>
                             <TextField  type="text" id="college-Name" name="collegename" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="School/College Name" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField  type="text" id="stream" name="stream" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Stream" variant="outlined" required   />
                        </Grid >
                        <Grid item lg={6} md={12}>
                         <TextField  type="text" id="grade" name="grade" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input'  label="Grade" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField   id="startDate" name="startdate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Start Date" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField  id="endDate" name="enddate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="End Date" variant="outlined" required   />
                        </Grid>
                    </Grid>
                </div> 

                <div  id="form3">
                    <Grid container spacing={2} justify-content='center' alignItems='center' >
                        <Grid item lg={12} md={12}>
                            <h1>Work Experience</h1>
                            {/* <Button onClick={handleExperience}><Icon color="primary">add_circle</Icon></Button> */}
                        </Grid>
                        <Grid item lg={12} md={12}>
                             <TextField  type="text" id="company-Name" name="companyname" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Company Name" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField  type="text" id="designation" name="designation" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Designation" variant="outlined" required   />
                        </Grid >
                        <Grid item lg={6} md={12}>
                         <TextField  type="url" id="projectlink" name="projectlink" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input'  label="ProjctLink" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField   id="startDate"  name="jobstartdate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Start Date" variant="outlined" required   />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField   id="endDate" name="jobenddate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="End Date" variant="outlined" required   />
                        </Grid>
                        <Grid item>
                             <TextField  type="text" id="description" name="description" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Description" variant="outlined" required  />
                        </Grid>
                        
                    </Grid>
                </div>

                <div  id="form4" >
                    <Grid container spacing={2} justify-content='center' alignItems='center' >
                        <Grid item lg={12} md={12}>
                                <h1>Skills</h1>
                        </Grid>
                        <Grid item lg={12} md={12}>
                             <TextField  type="text" id="skill" name="skills" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input'  label="Add Skills" variant="outlined" required   />
                        </Grid>
                    </Grid>
                </div>
                
                <Grid container spacing={2} justify-content='center' alignItems='center' >
                    <Grid id="btn" item lg={12} md={12} sm={12} xs={12}>
                        <Button id="button" type='submit' variant="contained" >{buttondata?"Preview":"Download"}</Button>
                    </Grid>
                </Grid>
                

            </form>
        </div>
  )
}

export default Form