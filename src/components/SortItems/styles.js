import styled from 'styled-components';

const SortContainer = styled.div`
  position: relative;

  .label {
    display: flex;
    gap: 5px;
    align-items: center;

    p {
      font-size: 1.2rem;
    }
  }

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
  }
`;

const DropdownBox = styled.div`
  display: ${(props) => (props.$dropdown === true ? 'flex' : 'none')};
  flex-direction: column;
  background-color: white;
  width: max-content;
  position: absolute;
  top: 100%;
  left: -10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 24px 0px;
  padding: 10px;
  border-radius: 4px;

  & > div:hover {
    color: grey;
  }
`;

const DropdownAnimation = styled.div`
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  transform: ${(props) => (props.$animation === true ? 'rotate(-180deg)' : 'rotate(0deg)')};
`;

export { SortContainer, DropdownBox, DropdownAnimation };
