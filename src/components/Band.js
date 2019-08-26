import React, { Component } from 'react';

const Band = ({ band, deleteThis }) => {
  return (
    <li>
      {band.name}
      <button onClick={deleteThis} >X</button>
    </li>
  )
}

export default Band;
