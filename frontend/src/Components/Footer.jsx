import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import './footer.css'

function Footer() {
	return (
		<footer className="footer">
			<Link to={'/'} className="noAlone-logo-link">
				<img
					className="noAlone-logo"
					alt="NoAlone logo"
					src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbbd4196bb5e92529d09cb2/ac996a4073e723f5585ccadc0ab58085/Logo_transparente1.png"
				/>
			</Link>
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
			<div className="footer__copyright">
				Copyright © 2020 - NoAlone Spain SLU - Skylab Coders Academy
			</div>
		</footer>
	);
}

export default Footer;
