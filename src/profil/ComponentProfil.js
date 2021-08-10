import React from 'react';
import PropTypes from "prop-types";


const ComponentProfil = props=>{
    const handleClick = () => {
     
        alert("Fullname: " + props.fullName);
      };

      
    
    return (
        <>
       <h1 style={props.style}> Fullname:  {props.fullName}</h1>
       <h1> Bio:  {props.bio}</h1>
       <h1> Profession: { props.profession}</h1>
       <h1>Photo: {props.children}</h1>
       <a  href="#" onClick={handleClick}>   Clique ici    </a>
        </>

    );

};



ComponentProfil.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    
   };



export default ComponentProfil;