import styled from 'styled-components';
import { devices } from '../../utils/breakpoints';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #a1a1a1;
  color: white;
  margin-top: auto;

  .footer-information {
    display: grid;
    text-align: center;
    gap: 40px;
    padding: 30px 30px;
  }

  .email-section {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .text-content {
      display: flex;
      flex-direction: column;
      gap: 20px;

      & > p:nth-child(1) {
        font-weight: bold;
        font-size: 1.3rem;
      }

      & > p:nth-child(2) {
        font-size: 0.9rem;
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

  .site-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    & > p {
      font-weight: bold;
      font-size: 1.3rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 0.9rem;
      width: fit-content;

      .site-link {
        text-decoration: none;
        color: white;

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
      font-size: 0.9rem;
    }

    .contact-logo {
      display: flex;
      gap: 10px;
      font-size: 1.6rem;
    }
  }

  @media screen and (${devices.tablet}) {
    .footer-information {
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    .email-section {
      button {
        padding: 6px;
      }
    }
  }

  @media screen and (${devices['tablet-lg']}) {
    .email-section {
      button {
        padding: 10px;
      }
    }
  }

  @media screen and (${devices.desktop}) {
    .email-section {
      padding: 40px 60px;

      .text-content {
        & > p:nth-child(1) {
          font-size: 1.5rem;
        }

        & > p:nth-child(2) {
          font-size: 1.1rem;
        }
      }
    }

    .site-section {
      padding: 40px;

      & > p {
        font-size: 1.5rem;
      }

      ul {
        font-size: 1.1rem;
      }
    }

    .contact-section {
      padding: 40px;

      .contact-info {
        font-size: 1.1rem;
      }
    }
  }
`;

const CopyrightContainer = styled.div`
  text-align: center;
  background-color: #a1a1a1;
  color: white;
  padding-bottom: 20px;
  font-size: 1rem;

  @media screen and (${devices.tablet}) {
    padding-top: 30px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 1.2rem;
  }
`;

const StyledLogo = styled.div`
  cursor: pointer;

  &:hover {
    filter: brightness(30%);
  }
`;

export { FooterContainer, CopyrightContainer, StyledLogo };
