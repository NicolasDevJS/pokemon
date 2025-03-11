// hooks/usePokemon.ts
import { useState } from 'react';

export type PokemonData = {
  name: string;
  photo: string;
  color: string;
  abilities: string[];
  stats: { stat: string; base: number }[];
};

export function usePokemon() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    fetch(`http://10.0.2.2:3000/pokemon/${search.toLowerCase()}`)
      .then((res) => res.json())
      .then((data: PokemonData) => setPokemon(data))
      .catch((err) => {
        console.error(err);
        setPokemon(null);
      });
  };

  return { search, setSearch, pokemon, handleSearch };
}
