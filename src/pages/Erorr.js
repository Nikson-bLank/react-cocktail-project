import React from 'react';
import {Link } from "react-router-dom"

function Erorr() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>oops! look like you are at dead end</h1>
        <Link to="/" className="btn btn-primary">Back Home</Link>
        </div></section>
  )
}

export default Erorr