import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Footer links */}
      <nav>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">FAQ</a>
      </nav>
      {/* Social media links */}
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      {/* Legal information */}
      <p>&copy; 2024 Booking.com. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
