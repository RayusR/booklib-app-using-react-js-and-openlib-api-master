import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>FIND YOUR BOOK OF CHOICE</h2><br />
                <p className='header-text fs-18 fw-3'>Looking for your next great read? Dive into our collection where every book is a new adventure waiting for you. Whether you're into thrillers, romances, or anything in between, we've got something just for you!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header