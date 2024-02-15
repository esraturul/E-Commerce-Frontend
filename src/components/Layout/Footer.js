import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../pages/Contact';
import Policy from '../../pages/Policy';

const Footer = () => {
  return (
    <div className='footer' style={{ marginTop: '60px' }}>
      <h4 className='text-center'>All Right Reserved @Ekinoks</h4>
      <p className='text-center mt-2'>
        <Link to="/about">About</Link>||<Link to="/contact">Contact</Link>||<Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
