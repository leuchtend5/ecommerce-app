import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  height: 200px;
  margin-top: 100px;

  .email-section {
    background-color: pink;
  }

  .site-section {
    background-color: mintcream;
  }

  .contact-section {
    background-color: orange;
  }
`;

export default FooterContainer;
