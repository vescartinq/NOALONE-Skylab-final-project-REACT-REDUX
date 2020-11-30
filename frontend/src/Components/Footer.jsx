import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="contact-links">
          <span className="contact-links__link" data-test-id="contact-link">
            About us
          </span>
          <span className="contact-links__link">Contact</span>
          <span className="contact-links__link">Sitemap</span>
          <span className="contact-links__link">Privacy policy</span>
        </div>
        <div className="social-networks">
          <span className="Facebook-icon social-networks__network">
            <FacebookIcon />
          </span>
          <span className="Youtube-icon social-networks__network">
            <YouTubeIcon />
          </span>
          <span className="Twitter-icon social-networks__network">
            <TwitterIcon />
          </span>
          <span className="Pinterest-icon social-networks__network">
            <PinterestIcon />
          </span>
          <span className="Instagram-icon social-networks__network">
            <InstagramIcon />
          </span>
        </div>
      </div>
      <hr />
      <div className="footer__copyright">
        Copyright © 2020 - NoAlone Spain SLU - Skylab Coders Academy
      </div>
    </footer>
  );
}

export default Footer;
