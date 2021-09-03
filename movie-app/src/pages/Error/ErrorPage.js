import React from 'react';
import { Link } from 'react-router-dom';
import "./error.css";

//This page is displayed when the user searches for a pages that doesn't exist
const ErrorPage = () => {
  return (
    <section className="mt-5">
      <h1>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <Link to='/' className='btn'>
        back home
      </Link>
    </section>
  )
}

export default ErrorPage;