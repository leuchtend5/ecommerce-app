import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  height: 200px;
  margin-top: 150px;
  font-size: 1.2rem;
  background-color: #a1a1a1;
  color: white;

  .email-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 60px;

    .text-content {
      display: flex;
      flex-direction: column;
      gap: 20px;

      & > p:nth-child(1) {
        font-weight: bold;
        font-size: 1.5rem;
      }

      & > p:nth-child(2) {
        font-size: 1rem;
      }
    }

    .input-content {
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        width: 70%;
        height: 35px;
        border: none;
        outline: none;
        font-size: 1rem;
        padding: 5px;
      }

      button {
        background-color: #2e2d2d;
        border: none;
        height: 35px;
        cursor: pointer;
        padding: 10px;
        color: white;

        &:hover {
          background-color: #545454;
        }
      }
    }
  }

  .site-section {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    & > p {
      font-weight: bold;
      font-size: 1.5rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 1rem;
      width: fit-content;

      .site-link {
        text-decoration: none;

        &:hover {
          filter: brightness(30%);
        }

        &:visited {
          color: white;
        }
      }
    }
  }

  .contact-section {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    img {
      width: 120px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 5px;

      font-size: 1rem;
    }

    .contact-logo {
      display: flex;
      gap: 10px;
      font-size: 1.6rem;
    }
  }
`;

const CopyrightContainer = styled.div`
  text-align: center;
  background-color: #a1a1a1;
  color: white;
  padding-top: 60px;
  padding-bottom: 20px;
`;

const StyledLogo = styled.div`
  cursor: pointer;

  &:hover {
    filter: brightness(30%);
  }
`;

export { FooterContainer, CopyrightContainer, StyledLogo };
