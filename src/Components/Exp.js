import React from 'react'

export default function Exp() {
    function sde(){
        document.getElementById("img1").src="https://www.servicedeskshow.com/wp-content/uploads/2023/05/Opentext-Logo.png";
        document.getElementById("header").innerHTML="Software Engineer Intern";
        document.getElementById("header4").innerHTML="-OpenText [Feb 2023 - Aug 2023]";
        document.getElementById("para1").innerHTML="Worked with multiple new technologies in the product including Cloud (Amazon S3,  Amazon Glacier and Azure) backup and restore capability.";
        document.getElementById("para2").innerHTML="Responsibilities involved developing new features based on customer-centric innovation and understanding the software development process including developing the environment and tools.Developed/Supported replication of unique data directly from one opendedupe store to another without transferring the data through a media agent.Hands-on experience in Perl and Amazon SDK's.Worked with SAFe Agile/Scrum methodology of project management";
        }
        function wde(){
            document.getElementById("img1").src="https://media.licdn.com/dms/image/C560BAQFgHU3sTF4LfQ/company-logo_200_200/0/1519895156650?e=2147483647&v=beta&t=e6J4j8gWdNCJ-Dhu6xEC2S3EB_6lcim27ymu6-zRQkg";
            document.getElementById("header").innerHTML="Web Development Intern";
            document.getElementById("header4").innerHTML="-Sparks Foundation [Jun 2021 - Jul 2021]";
            document.getElementById("para1").innerHTML="Developed a Banking Application which was a comprehensive online platform developed using HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, and SQL technologies..";
            document.getElementById("para2").innerHTML="This user-friendly website allows users to seamlessly manage their banking needs from the comfort of their homes. <br/> With features ranging from account creation to transaction tracking, this project offers a robust and secure digital banking experience.Incorporating a user-friendly interface, it showcases the integration of multiple technologies to provide a holistic banking solution for modern customers.";
            }

  return (
    <>
        <div id="Exp">
            <h1 id="exph1">Experience</h1><br /><br />
            <ul >
                <a id="anch" onClick={sde}  href='#wde'><li class="li1" style={{color:'rgb(152, 34, 34)'}}>Software Engineer Intern</li></a>
                <a id ="anch2" onClick={wde} href="#wde"><li class="li1" style={{color:'rgb(152, 34, 34)'}}>Web Development Intern</li></a>
            </ul><br />

            <div id="sde">
	        <div id="div1">
	            <img src="https://www.servicedeskshow.com/wp-content/uploads/2023/05/Opentext-Logo.png" alt="Snow"  id="img1" />
	       </div>
	       <div class="column"  id="div2">
		        <h3 id="header" >Software Engineer Intern</h3>
                <h4 id ="header4">-Opentext [Feb 2023 - Aug 2023]</h4>
                <br/>
	            <p id="para1">Worked with multiple new technologies in the product including Cloud (Amazon S3,  Amazon Glacier and Azure) backup and restore capability. </p>
	            <p id="para2">Responsibilities involved developing new features based on customer-centric innovation and understanding the software development process including developing the environment and tools.<br/>
                Developed/Supported replication of unique data directly from one opendedupe store to another without transferring the data through a media agent.<br/>
                Hands-on experience in Perl and Amazon SDK's.<br/>
                Worked with SAFe Agile/Scrum methodology of project management</p>
	        </div>
	        </div>
        </div>
    </>
  )
}
// background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrqITQdd5ZKGbiDWlKBTKjHrPLaXWoL2uMQ&usqp=CAU");