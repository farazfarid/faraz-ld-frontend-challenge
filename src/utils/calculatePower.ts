import Pokemon from "../interfaces/Pokemon";

const calculatePower = (pokemon: Pokemon): number => {
  return (
    pokemon.hp +
    pokemon.attack +
    pokemon.defense +
    pokemon.special_attack +
    pokemon.special_defense +
    pokemon.speed
  );
};

export default calculatePower;
