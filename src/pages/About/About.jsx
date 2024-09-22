import React from 'react';
import './About.css';
import aboutImg from '../../images/about-img.jpg';
import thumbnail1 from '../../images/thumbnail1.jpg';
import thumbnail2 from '../../images/thumbnail2.jpg';
import thumbnail3 from '../../images/thumbnail3.jpg';
import thumbnail4 from '../../images/thumbnail4.jpg'; // Pastikan untuk mengimpor gambar ini
import thumbnail5 from '../../images/thumbnail5.jpg'; // Pastikan untuk mengimpor gambar ini

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About Us</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt='About Us' className='img-effect' />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Discover Falcon Bookhood</h2>
            <p className='fs-17'>At Falcon Bookhood, we believe that every book has a story to tell, and we're here to connect readers with those stories. From timeless classics to contemporary bestsellers, our platform is designed for passionate readers.</p>
            <p className='fs-17'>At Falcon Bookhood, we’re passionate about nurturing a vibrant community of readers who share their love for books. Whether you're seeking a quiet escape or a lively discussion, our platform brings together voices and stories that inspire and entertain.</p>
            <button className='btn-primary'>Learn More</button>
          </div>
        </div>

        {/* Bagian baru untuk thumbnail YouTube */}
        <div className='youtube-thumbnails'>
          <h3 className='thumbnail-title'>Check Out Our YouTube!</h3>
          <div className='thumbnail-scroll'>
            <a href='https://youtube.com/shorts/K0NYtL7OOYA?si=0NR4LYqAsjZidbfA' target='_blank' rel='noopener noreferrer'>
              <img src={thumbnail1} alt='Thumbnail 1' className='thumbnail' />
            </a>
            <a href='https://youtube.com/shorts/K0NYtL7OOYA?si=0NR4LYqAsjZidbfA' target='_blank' rel='noopener noreferrer'>
              <img src={thumbnail2} alt='Thumbnail 2' className='thumbnail' />
            </a>
            <a href='https://youtube.com/shorts/K0NYtL7OOYA?si=0NR4LYqAsjZidbfA' target='_blank' rel='noopener noreferrer'>
              <img src={thumbnail3} alt='Thumbnail 3' className='thumbnail' />
            </a>
            <a href='https://youtube.com/shorts/e8wrqwF8cOA?si=l0WeRgvQrDaKHP-p' target='_blank' rel='noopener noreferrer'>
              <img src={thumbnail4} alt='Thumbnail 4' className='thumbnail' />
            </a>
            <a href='https://youtube.com/shorts/tlIe2aRlwfo?si=FY1HXmjBHbGrqq_E' target='_blank' rel='noopener noreferrer'>
              <img src={thumbnail5} alt='Thumbnail 5' className='thumbnail' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
