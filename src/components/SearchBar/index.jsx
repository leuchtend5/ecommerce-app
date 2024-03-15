import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchContainer from './styles';
import { useState } from 'react';

export default function SearchBar() {
  const [inputActive, setInputActive] = useState(false);

  function handleFocus() {
    setInputActive(true);
  }

  function handleBlur() {
    setInputActive(false);
  }

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder={!inputActive ? 'Search for products' : ''}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </SearchContainer>
  );
}
