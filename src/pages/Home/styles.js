import styled from 'styled-components';

const FirstSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0)) /* overlay dark */,
    linear-gradient(0deg, rgba(238, 238, 238, 1) 2%, rgba(238, 238, 238, 0.1) 15%); /* fading to background */
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;
  }
`;

const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

export { FirstSection, SecondSection };
