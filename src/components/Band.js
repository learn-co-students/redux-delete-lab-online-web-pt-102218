import React, { Component } from 'react';

const Band = props => {
  
 
    return(
      <div>
        <li><span></span><button onClick={()=> props.delete(props.band.id)} > {props.band.name} DELETE</button></li> 
      </div>
    );
};

export default Band;
