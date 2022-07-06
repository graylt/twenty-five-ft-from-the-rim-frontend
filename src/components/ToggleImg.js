import react from 'react';
import {useState, useEffect} from 'react';
import image from './../assets/3point.png';
// import DraggableComponent from '../components/DraggableComponent';



const ToggleDivImage = () => {


    /* Setup component state that tracks visibility of the image. Initially, we'll set
    the image to visible (toggled true) */
    const [toggled, setToggled] = useState(true);
  
    /* Define a function that toggles the visibility of the image */
    const toggleImage = () => setToggled(!toggled);

  
    return (
      
      <div>
       
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage}>Toggle court</button>
        
        {/* Render image if toggled is truthy */}
        {toggled && <img src={image} alt="bball" />}
        {/* <DraggableComponent/> */}
      </div>
    );
  };

  export default ToggleDivImage