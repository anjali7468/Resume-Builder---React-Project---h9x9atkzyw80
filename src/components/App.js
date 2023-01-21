import React from 'react'
import '../styles/App.css';

import Preview from './Preview';
import Form from './Form'
import { createContext,Provider } from 'react';
import { useState} from 'react';
import jsPDF from 'jspdf';

const App = () => {
  const [formdata, setFormdata] = useState({
    fullname :"",
    email:"",
    phonenumber:"",
    addimage:"No Image Selected",
    website:"",
    headline:"",
    summary:"",
    address:"",
    city:"",
    linkedin:"",
    region:"",
    country:"",
    postalcode:"",
    collegename:"",
    stream:"",
    grade:"",
    startdate:"",
    enddate:"",
    companyname:"",
    designation:"",
    projectlink:"",
    jobstartdate:"",
    jobenddate:"",
    description:"",
    skills:"",
    });
    const [show, setShow] = useState(false); 
    const [buttondata, setButtondata] = useState(true); 
    
    // useEffect(()=>{
    //   localStorage.setItem("dataKey", JSON.stringify(formdata))
    // })  

    // let str = localStorage.getItem("dataKey");
    // console.log(str)
  
    
    console.log(formdata);
    const handleInput = (name, value)=>{
      // const name = e.target.name;
      // const value = e.target.value;
      setFormdata ((prev)=>{ 
          return {...prev, [name]:value}

      })
    }  
      const submitForm =(e)=>{
        e.preventDefault();
        setShow(true)
        setButtondata(!buttondata) 
        createPDF();        
    }

    const createPDF = () => {
      const pdf = new jsPDF("portrait","px","a4");
      let data =window.document.querySelector("#preview-comp");
      pdf.html(data).then(() => {
        pdf.save("resume.pdf");
      });
    };
    
    



  return (
    <div id="main">
      <Form handler={handleInput} submit={submitForm} buttondata={buttondata} />
      {show && <Preview formdata={formdata}/>}
    </div> 
    
  )
}


export default App;