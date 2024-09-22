import React, { useRef, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  // Daftar rekomendasi buku
  const popularBooks = [
    "Origin",
    "To Kill a Mockingbird",
    "The Great Gatsby",
    "The Catcher in the Rye",
    "Assassin's"
  ];

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
      setSearchTerm("the origin of species");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  const handleBookClick = (book) => {
    searchText.current.value = book; // Masukkan judul yang diklik ke kolom search
    setSearchTerm(book); // Perbarui search term
    navigate("/book"); // Navigasi ke halaman hasil
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input
                type="text"
                className='form-control'
                placeholder='The origin of species ...'
                ref={searchText}
              />
              <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-purple' size={32} />
              </button>
            </div>
          </form>

          {/* Rekomendasi Buku */}
          <div className='popular-books'>
            {popularBooks.map((book, index) => (
              <span key={index} className='book-recommendation' onClick={() => handleBookClick(book)}>
                {book}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
