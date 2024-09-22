import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = ({ title, author, edition_count, first_publish_year, cover_img, id }) => {

  // Fungsi untuk memotong nama penulis jika melebihi 3 kata
  const truncateAuthor = (author) => {
    const maxWords = 3;
    if (author.length > maxWords) {
      return author.slice(0, maxWords).join(", ") + "..."; // Membatasi hingga 3 kata
    }
    return author.join(", ");
  };

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={cover_img} alt="cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${id}`}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{truncateAuthor(author)}</span> {/* Gunakan fungsi untuk memotong nama */}
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{first_publish_year}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
