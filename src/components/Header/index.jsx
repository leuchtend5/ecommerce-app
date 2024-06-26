import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import MenuBar from '../MenuBar';
import { HeaderContainer } from './styles';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [blurActive, setBlurActive] = useState(false);

  // hide the navbar when scrolling down, display navbar when scrolling up
  // set blur for certain scroll
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 150) {
      setBlurActive(true);
    } else {
      setBlurActive(false);
    }
  });

  return (
    <HeaderContainer
      as={motion.div}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      blurActive={blurActive}
    >
      <Link to={'/'}>
        <img src={logo} alt="logo" width={120} />
      </Link>
      <MenuBar />
    </HeaderContainer>
  );
}
