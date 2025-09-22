import { Github, Mail, Linkedin } from 'lucide-react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <h2>CodeHive</h2>
        </div>

        {/* <div className="footer-links">
          <a href="/features">Features</a>
          <a href="/about">About</a>
          <a href="/docs">Docs</a>
          <a href="/contact">Contact</a>
        </div> */}

        <div className="footer-socials">
          <a href="https://github.com/jagdep-singh" target="_blank" rel="noopener noreferrer">
            <Github size={24} color="white" />
          </a>
          {/* <a href="mailto:jagdeep">
            <Mail size={24} color="white" />
          </a> */}
          <a href="https://www.linkedin.com/in/jagdeep-singh-jazz/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} color="white" />
          </a>
        </div>

        <p>© {new Date().getFullYear()} CodeHive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
