import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Projects() {
  return (
    <>
    <div id="ProjD">
      <div id="card1"  class="container">
        <h1 id="projecth1">Projects</h1><br />
        {/* <div className='row'>
        <div class="card col-md-4 mb-3">
        <div class="card-body" >
            <h5 class="card-title">Banking Application</h5>
            <h6 class="card-subtitle mb-4 text-body-secondary">Web Dev project</h6>
            <p class="card-text">• Developed a user-friendly Banking Application using HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, and SQL <br />
• Enabled convenient online account management, including account creation and transaction tracking for secure banking experience <br />
• Demonstrated expertise in integrating diverse technologies for a holistic digital banking solution.</p>
         </div>
        </div>
        <div class="card col-md-4 mb-3">
        <div class="card-body">
            <h5 class="card-title">Task Manager</h5>
            <h6 class="card-subtitle mb-4 text-body-secondary">JavaFX project</h6>
            <p class="card-text">• Created a JavaFX app with Java backend enabling multiple users to manage individual to-do lists, utilizing JDBC Drivers for seamless database integration. <br />
• Implemented a secure system storing user credentials and to-do list data in a database, ensuring data integrity while providing a user-friendly JavaFX front-end.</p>
         </div>
        </div>
        <div class="card col-md-4 mb-3">
        <div class="card-body">
            <h5 class="card-title">Chat Bot</h5>
            <h6 class="card-subtitle mb-4 text-body-secondary">Mobile Application</h6>
            <p class="card-text">• Built an AWS-powered chatbot on Facebook Messenger and Slack, facilitating doctor discovery, appointment booking, and appointment history access while continuously improving its vocabulary through user interactions. <br />
• Utilized AWS Lambda to bolster the chatbot's capabilities, incorporating a comprehensive database for doctors and appointments to ensure accurate responses..</p>
         </div>
        </div>
        </div> */}

    <Container>
      <Row>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Header style={{fontSize:'20px'}}>Online Bookstore</Card.Header>
            <Card.Body>
              <Card.Title style={{color:'rgb(96, 91, 91)'}}>MERN Stack</Card.Title>
              <Card.Text className='cardText'>
              • INKSTORY is an online bookstore built with the MERN stack. <br />
              • It features a vast book catalog, secure authentication, easy checkout, User login and logout using JWT ,Redux based state managment for cart. <br />
              • This platform offers essential CRUD (Create, Read, Update, Delete) capabilities for managing books and includes a shopping cart feature for convenient order placement.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Header style={{fontSize:'20px'}}>Banking Application</Card.Header>
            <Card.Body>
              <Card.Title style={{color:'rgb(96, 91, 91)'}} >Web Dev Project</Card.Title>
              <Card.Text  className='cardText' >
              • Developed a user-friendly Banking Application using HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, and SQL <br />
              • Enabled convenient online account management, including account creation and transaction tracking for secure banking experience <br />
              • Demonstrated expertise in integrating diverse technologies for a holistic digital banking solution.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Header style={{fontSize:'20px'}}>Task Manager</Card.Header>
            <Card.Body>
              <Card.Title style={{color:'rgb(96, 91, 91)'}}>JavaFX Project</Card.Title>
              <Card.Text className='cardText'>
              • Created a JavaFX app with Java backend enabling multiple users to manage individual to-do lists, utilizing JDBC Drivers for seamless database integration. <br />
              • Implemented a secure system storing user credentials and to-do list data in a database, ensuring data integrity while providing a user-friendly JavaFX front-end.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Header style={{fontSize:'20px'}}>Chat Bot Application</Card.Header>
            <Card.Body>
              <Card.Title style={{color:'rgb(96, 91, 91)'}}>Mobile Application</Card.Title>
              <Card.Text  className='cardText'>
              • Built an AWS-powered chatbot on Facebook Messenger and Slack, facilitating doctor discovery, appointment booking, and appointment history access while continuously improving its vocabulary through user interactions. <br />
              • Utilized AWS Lambda to bolster the chatbot's capabilities, incorporating a comprehensive database for doctors and appointments to ensure accurate responses..
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


    </div>
    </div>

    </>
  )
}
