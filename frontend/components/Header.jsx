import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  background-color: #0054a8; 
  height: 80px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100; 
`;

const Logo = styled.Image`
  width: 200px;
  height: 60px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo source={require('../assets/images/img/pokemon.png')} resizeMode="contain" />
    </HeaderContainer>
  );
};

export default Header;
