import Pokemon from "../interfaces/Pokemon";

const fetchPokemonData = async (): Promise<Pokemon[]> => {
  const response = await fetch("/pokemon.json");
  const data = await response.json();
  return data as Pokemon[];
};

export default fetchPokemonData;
