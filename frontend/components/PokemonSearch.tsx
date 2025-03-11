import React from 'react';
import styled from 'styled-components/native';
import PokemonCard from './PokemonCard';
import { usePokemon } from '../hooks/usePokemon';

const Container = styled.View`
  flex: 1;
  margin-top: 120px;
  align-items: center;
`;

const Input = styled.TextInput`
  height: 40px;
  width: 80%;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: #ccc;
  padding-horizontal: 8px;
`;

const SearchButton = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const NotFoundContainer = styled.View`
  width: 90%;
  padding: 16px;
  border-radius: 8px;
  margin: 8px auto;
  align-items: center;
  background-color: #ff69b4; /* rosa */
`;

const NotFoundText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export default function PokemonSearch() {
  const { search, setSearch, pokemon, handleSearch } = usePokemon();

  return (
    <Container>
      <Input
        placeholder="Digite o nome do Pokémon"
        value={search}
        onChangeText={setSearch}
      />
      <SearchButton onPress={handleSearch}>
        <ButtonText>Pesquisar</ButtonText>
      </SearchButton>
      {pokemon ? (
        pokemon.name ? (
          <PokemonCard
            name={pokemon.name}
            photo={pokemon.photo}
            color={pokemon.color}
            abilities={pokemon.abilities}
            stats={pokemon.stats}
          />
        ) : (
          <NotFoundContainer>
            <NotFoundText>POKEMON NÃO ENTRADO</NotFoundText>
          </NotFoundContainer>
        )
      ) : null}
    </Container>
  );
}
