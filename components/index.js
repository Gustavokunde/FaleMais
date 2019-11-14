import React from 'react';
import { Link} from 'react-router-dom';

import { Container} from './styles';

import logo from '../src/assets/falemais.png';

function Header({ cartSize, cart, total, location }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" width={350} />
      </Link>

     </Container>
  );
}

export default Header();
