import { useState } from 'react';
import { SortContainer, DropdownBox, DropdownAnimation } from './styles';
import { RiArrowDropDownLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

export default function SortItems({ getSortValue }) {
  const [value, setValue] = useState('Price: High-Low');
  const [dropdownToggle, setDropdownToggle] = useState(false);

  function handleSortChange(value) {
    setValue(value);
  }

  function handleDropdownToggle() {
    setDropdownToggle(!dropdownToggle);
  }

  return (
    <SortContainer>
      <div className="label">
        <p>Sort By :</p>
        <span onClick={handleDropdownToggle}>
          {value}
          <DropdownAnimation $animation={dropdownToggle}>
            <RiArrowDropDownLine size={25} />
          </DropdownAnimation>

          <DropdownBox $dropdown={dropdownToggle}>
            <div
              onClick={() => {
                handleSortChange('Price: High-Low');
                getSortValue('Price: High-Low');
              }}
            >
              Price: High-Low
            </div>
            <div
              onClick={() => {
                handleSortChange('Price: Low-High');
                getSortValue('Price: Low-High');
              }}
            >
              Price: Low-High
            </div>
            <div
              onClick={() => {
                handleSortChange('Selling Count');
                getSortValue('Selling Count');
              }}
            >
              Selling Count
            </div>
            <div
              onClick={() => {
                handleSortChange('Name: A-Z');
                getSortValue('Name: A-Z');
              }}
            >
              Name: A-Z
            </div>
            <div
              onClick={() => {
                handleSortChange('Name: Z-A');
                getSortValue('Name: Z-A');
              }}
            >
              Name: Z-A
            </div>
          </DropdownBox>
        </span>
      </div>
    </SortContainer>
  );
}

SortItems.propTypes = {
  getSortValue: PropTypes.func.isRequired,
};
