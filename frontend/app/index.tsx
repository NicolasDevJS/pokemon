import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/Header'
import PokemonSearch from '@/components/PokemonSearch';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;


export default function Home() {
  return (
    <Container>
      <Header/>
      <PokemonSearch/>
    </Container>
  );
}
