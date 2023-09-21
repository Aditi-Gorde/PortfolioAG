import React from 'react'
import { useState } from 'react'

export default function Skills() {
      
    const [buttonText1, setButtonText1] = useState('Java');
    const [buttonText2, setButtonText2] = useState('C');
    const [buttonText3, setButtonText3] = useState('C++');
    const [buttonText4, setButtonText4] = useState('HTML');
    const [buttonText5, setButtonText5] = useState('Javascript');
    const [buttonText6, setButtonText6] = useState('Jquery');
    const [buttonText7, setButtonText7] = useState('SQL');
    const [buttonText8, setButtonText8] = useState('Bootstrap');
    const [buttonText9, setButtonText9] = useState('React Js');
    const [buttonText10, setButtonText10] = useState('CSS');
    const [backgroundColor, setBackgroundColor] = useState('#161919');

    function handleClick1() {
        setButtonText1('Intermediate');
    }
    function handleRemove1() {
        setButtonText1('Java');
    }
    function handleClick2() {
        setButtonText2('Intermediate');
    }
    function handleRemove2() {
        setButtonText2('C');
    }
    function handleClick3() {
        setButtonText3('Intermediate');
    }
    function handleRemove3() {
        setButtonText3('C++');
    }
    function handleClick4() {
        setButtonText4('Intermediate');
    }
    function handleRemove4() {
        setButtonText4('HTML')
    }
    function handleClick5() {
        setButtonText5('Intermediate');
    }
    function handleRemove5() {
        setButtonText5('Javascript')
    }
    function handleClick6() {
        setButtonText6('Intermediate');
    }
    function handleRemove6() {
        setButtonText6('Jquery')
    }
    function handleClick6() {
        setButtonText6('Intermediate'); 
    }
    function handleRemove6() {
        setButtonText6('Jquery')
    }
    function handleClick7() {
        setButtonText7('Intermediate');
    }
    function handleRemove7() {
        setButtonText7('SQL')
    }
    function handleClick8() {
        setButtonText8('Intermediate');
    }
    function handleRemove8() {
        setButtonText8('Bootstrap')
    }
    function handleClick9() {
        setButtonText9('Beginner');
    }
    function handleRemove9() {
        setButtonText9('React Js');
    }
    function handleClick10() {
        setButtonText10('Intermediate');
    }
    function handleRemove10() {
        setButtonText10('CSS');
    }
  return (
    
    <>
        <div id="skillsD">
            <h1 id="skillsh1">Skills</h1>
            <h6 id="skillsh3">"Dedicated to continuously expanding my skill set and embracing new learning opportunities."</h6><br />
            <div id="skillsD2">
            <div class="d-grid gap-2 d-md-block col-6 mx-auto">
                 <button style={{ backgroundColor: backgroundColor }} onMouseEnter={handleClick1} onMouseLeave={handleRemove1} id = "java"class="btn btn-secondary mx-5 " type="button" value ="java" >{buttonText1}</button>
                 <button style={{ backgroundColor: backgroundColor }} onMouseEnter={handleClick2} onMouseLeave={handleRemove2} class="btn btn-secondary mx-5 " type="button" value ="C" >{buttonText2}</button>
            </div><br />

            <div class="d-grid gap-2 d-md-block col-6 mx-auto">
            <button style={{ backgroundColor: backgroundColor }} onMouseEnter={handleClick3} onMouseLeave={handleRemove3} class="btn btn-secondary mx-5 " type="button" >{buttonText3}</button>
            <button style={{ backgroundColor: backgroundColor }} onMouseEnter={handleClick4} onMouseLeave={handleRemove4} class="btn btn-secondary mx-5 " type="button" >{buttonText4}</button>
            </div><br />
            <div class="d-grid gap-2 d-md-block col-6 mx-auto">
            <button style={{ backgroundColor: backgroundColor }} onMouseEnter={handleClick5} onMouseLeave={handleRemove5} class="btn btn-secondary mx-5 " type="button" >{buttonText5}</button>
            <button style={{ backgroundColor: backgroundColor }} onMouseEnter={handleClick6} onMouseLeave={handleRemove6} class="btn btn-secondary mx-5 " type="button" >{buttonText6}</button>
            </div><br />
            <div class="d-grid gap-2 d-md-block col-6 mx-auto">
            <button style={{ backgroundColor: backgroundColor }} onMouseEnter={handleClick7} onMouseLeave={handleRemove7} class="btn btn-secondary mx-5 " type="button" >{buttonText7}</button>
            <button style={{ backgroundColor: backgroundColor }} onMouseEnter={handleClick8} onMouseLeave={handleRemove8} class="btn btn-secondary mx-5 " type="button" >{buttonText8}</button>
            </div><br />
            <div class="d-grid gap-2 d-md-block col-6 mx-auto"><button style={{ backgroundColor: backgroundColor }} onMouseEnter={handleClick9} onMouseLeave={handleRemove9} class="btn btn-secondary mx-5 " type="button" >{buttonText9}</button>
            <button style={{ backgroundColor: backgroundColor }} onMouseEnter={handleClick10} onMouseLeave={handleRemove10} class="btn btn-secondary mx-5 " type="button" >{buttonText10}</button>
            </div><br />
            </div>
        </div>
    </>
  )
}

//opendedup simplifies the setup and management of SDFS and includes web management interface to control all aspects of storage lifecycle for SDFS.
//SDFS uses local or Cloud object storage for saving data after is deduplicated. It works will all the big players such as AWS S3, AWS Glacier, Azure, Google,
//main objective is only backing up and storing the uniqe data 
//how it works ->100gb data 50 is duplicate ->mechanisem to check if this data was already backed up or not if yes then it won't back up ...so only save the unique data
//opendedupe is an open src project but microfocus owned it for DP and added additional fratures
//dp has multiple things lilke ddboost storeonce file library (these are storage types)
//we mainly worked on deduplication storage type(sdfs or opendedupe)
//dpdutils is a utiity provided to manage the sdfs stores (stores -> on-prem and cloud )
