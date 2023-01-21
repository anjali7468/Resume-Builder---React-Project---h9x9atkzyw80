import React from 'react'

function Preview(props) {
    // console.log(props.formdata);

  return (
    <div className='previewContainer'>
        <div id="preview-comp">
            <div className='name-container'>
                {/* <img id='img-preview' src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="profile"  /> */}
                <h2 id="name">{props.formdata.fullname}</h2>
                <div className="lighter-text">{props.formdata.headline}</div>
                <br />
                
            </div>
            <hr />

            <div className='contacts-container'>
                <div className="light-text">{props.formdata.email}</div>
                <div className="light-text">{props.formdata.phonenumber}</div>
                <div className="light-text">{props.formdata.website}</div>
            </div>
            <hr />
            <br />

            <div className='add-container'>
                <div className="light-text">{props.formdata.address}, {props.formdata.city}, {props.formdata.region}, {props.formdata.country}, {props.formdata.postalcode}</div>
                <div className="light-text">{props.formdata.linkedin}</div>
            </div>
            <br />
            <hr />
            <div className="light-text" id="summ-container">
                <div>{props.formdata.summary}</div>
            </div>
            <hr/>
            <div className='exp-container'>
                <div  id='exp-heading'>Work Experience</div>
                <hr />
                <div className="bold-text" >{props.formdata.companyname}</div>
                <div className="light-text">{props.formdata.designation}</div>
                <div className="lighter-text">{props.formdata.jobstartdate} - {props.formdata.jobenddate}</div>
                <div className="light-text" id='work-desc'>
                    {props.formdata.description}
                </div>
            </div>
            <hr />

            <div className='edu-container'>
                
                <div id='edu-heading'>Education</div>
                <hr />
                <div className="bold-text">{props.formdata.collegename}</div>
                <div className="light-text">{props.formdata.stream}</div>
                <div className="light-text">{props.formdata.grade}</div>
                <div className="lighter-text">{props.formdata.startdate} - {props.formdata.enddate}</div>
            </div>
            <hr />

            <div className='skills-container'>
            <div className="bold-text" id='skills-heading'>Skills</div>
                 <hr />
                <div id="list">
                        {
                            
                        props.formdata.skills.split(",").map(e =><div id='list-items'>{e}</div>)
                        
                        }
                       
                    </div>      
            </div>
        </div>
    </div>
    
  )
}

export default Preview