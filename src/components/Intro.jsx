import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button";
import projectOnePic from '../assets/project-one.png';
import projectTwoPic from '../assets/project-two.png'
import portPic from '../assets/portfolio-pic.jpeg';
import Contact from "./Contact";


function Intro() {
  const [index, setIndex] = useState(0);
  const projects = [
    { id: 1, title: 'Gig-of-bands', description: `A full stack web application for artists and venues to connect with each
    other.`, gitlink: 'https://github.com/mrent32/gig-of-bands',
     weblink: 'https://gig-of-bands-7544c49deaea.herokuapp.com/', img: projectOnePic },
    { id: 2, title: 'JS Frameworks Blog', description: `A full stack restful blog style application for users of 
    Javascript to discuss different libraries and frameworks that they enjoy.`, gitlink: 'https://github.com/mrent32/Tech-Blog',
     weblink: 'https://my-technical-blog-8e6c28eb0f9c.herokuapp.com/', img: projectTwoPic },
    // { id: 3, title: 'Project 3', description: '', gitlink: '', weblink: '', img: projectOnePic },

  ]
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>

    <span className="d-flex justify-content-center my-3">
      <img id="port-pic" src={portPic}></img>
    </span>
      <div className="d-flex  justify-space-around w-100 my-2 ">
        <div className="project-area w-100">
          {projects.map(({ title, id, description, gitlink, weblink, img }) => {
            return (
              <div id="portfolio" key={id} >
                <h3>{title}</h3>
                <a href={weblink}><img id="picone" src={img}></img></a>
                <a className="d-flex justify-content-center my-2" href={gitlink}>Github Repository</a>
                <p className="">{description}</p>
              </div>
            )
          })}
        </div>
      </div>
      <Container fluid="md">
        <Row>
          <Col>
          <p id="about">As a dedicated software developer specializing in the MERN (MongoDB, Express.js, React, Node.js) stack,
            I bring a passion for crafting robust and user-friendly web applications. With a keen focus on back-end routing,
            I have honed my skills in building efficient and scalable server-side logic to seamlessly handle data flow and application logic.
            I have had the privilege of developing several full-stack web applications, each demonstrating my ability to architect
            and implement end-to-end solutions that meet user needs effectively. From conceptualization to deployment, I leverage my expertise in
            the MERN stack to create dynamic and responsive user interfaces while ensuring the integrity and security of the underlying data architecture.
            Committed to continuous learning and growth, I eagerly embrace new technologies and best practices to deliver innovative solutions.
            I am enthusiastic about the opportunity to contribute my skills and creativity to a forward-thinking team, where I can continue to thrive
            and make meaningful contributions in the dynamic world of software development. Below is a contact form to reach me for any inquiries. 
            </p>
            </Col>

        </Row>
        <div className="d-flex justify-content-around pt-5">
          <a href="https://linkedin.com/in/martin-renteria-b8744029a"><img className="d-flex justify-content-center width max-content" src="https://img.shields.io/badge/LinkedIn-blue?logo={martin-renteria-b8744029a}&logoColor=white&style=for-the-badge" />
          </a>
          <a href="https://www.youtube.com/channel/UCs7V-640lAJ2worjxJxYxbg">
            <img className="d-flex justify-content-center" src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo={martinrenteria4513}&logoColor=white" />
          </a>
          <a href="https://github.com/mrent32"><img src="https://img.shields.io/badge/Github-grey?&logo={mrent32}&logoColor=black"></img>
          </a>
        </div>
      </Container>
          <Contact />

    </>
  )
}

export default Intro