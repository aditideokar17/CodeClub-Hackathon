import '../css/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
          Join us and become part of a community that encourages creativity, supports personal growth, and fosters a culture of innovation.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#workshops">Workshops</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <p>facebook</p>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <p>twitter</p>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
             <p>linkedin</p>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
             <p>instagram</p>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@codeclub.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Coding Lane, DevCity, CA 98765</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 CodeClub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
