import FooterContainer from './styles';

export default function Footer() {
  return (
    <div>
      <FooterContainer>
        <div className="email-section">
          <p>Join us</p>
          <p>Sign in up for 10% discount</p>
          <input type="text"></input>
          <button>Sign up</button>
        </div>
        <div className="site-section">Site Map</div>
        <div className="contact-section">Contact</div>
      </FooterContainer>
      <div>copyright</div>
    </div>
  );
}
