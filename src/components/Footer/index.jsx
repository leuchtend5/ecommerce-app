import { FooterContainer, CopyrightContainer, StyledLogo } from './styles';
import logo from '../../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';
import { IoLogoGithub } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-information">
        <div className="email-section">
          <div className="text-content">
            <p>Catch up with us!</p>
            <p>Receive $30* off your first purchase when you sign up for our newsletter</p>
          </div>
          <div className="input-content">
            <input type="text"></input>
            <button>Sign up</button>
          </div>
        </div>
        <div className="site-section">
          <p>Shop</p>
          <ul>
            <Link to="/" className="site-link">
              Electronics
            </Link>
            <Link to="/" className="site-link">
              Jewelery
            </Link>
            <Link to="/" className="site-link">
              Men's Clothing
            </Link>
            <Link to="/" className="site-link">
              Women's Clothing
            </Link>
          </ul>
        </div>
        <div className="contact-section">
          <img src={logo} alt="logo" />
          <div className="contact-info">
            <p>0431-12345678</p>
            <p>Jl. Lorem ipsum dolor</p>
          </div>
          <div className="contact-logo">
            <StyledLogo>
              <IoLogoGithub />
            </StyledLogo>
            <StyledLogo>
              <MdOutlineEmail />
            </StyledLogo>
          </div>
        </div>
      </div>
      <CopyrightContainer>Copyright © {new Date().getFullYear()} Leuchtend</CopyrightContainer>
    </FooterContainer>
  );
}
