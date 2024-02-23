import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import picOne from '../assets/screenshot.png'
function Portfolio() {
    const [index, setIndex] = useState(0);
    const projects = [
        {id: 1, title: 'Project 1', description: '', gitlink: '', weblink: '', img:picOne},
        {id: 2, title: 'Project 2', description: '', gitlink: '', weblink: '', img:picOne},
        {id: 3, title: 'Project 3', description: '', gitlink: '', weblink: '', img:picOne},
        
    ]
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
    return (
        
            <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect} style={{maxWidth: '600px'}}>
              {projects.map(({title, id, description, weblink, gitlink, img})=> (
                <Carousel.Item title={title} key={id} description={description}  weblink={weblink} gitlink={gitlink} img={img}>
                    <img src={img} style={{width: '100%'}}></img>
                  <Carousel.Caption  style={{backgroundColor: 'white'}}id="caption-box">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Button className="carousel-button" variant="dark" target="_blank" href={gitlink}>Github Repository</Button>
                  <Button className="carousel-button" variant="dark" target="_blank" href={weblink}>Live Website</Button>
                </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          );
    
}
export default Portfolio