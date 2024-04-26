import { useState } from 'react';
import logo from '../../assets/images/logo/logo.png';
import MenuBar from '../MenuBar';
import HeaderContainer from './styles';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [blurActive, setBlurActive] = useState(false);

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
      <img src={logo} alt="logo" width={120} />
      <MenuBar />
    </HeaderContainer>
  );
}
