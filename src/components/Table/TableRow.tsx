import React from "react";
import Pokemon from "../../interfaces/Pokemon";
import calculatePower from "../../utils/calculatePower";

interface TableRowProps {
  pokemon: Pokemon;
}

const TableRow: React.FC<TableRowProps> = ({ pokemon }) => {
  const power = calculatePower(pokemon);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">{pokemon.id}</td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {pokemon.name}
      </td>
      <td className="px-6 py-4">{pokemon.type.join(", ")}</td>
      <td className="px-6 py-4">{pokemon.hp}</td>
      <td className="px-6 py-4">{pokemon.attack}</td>
      <td className="px-6 py-4">{pokemon.defense}</td>
      <td className="px-6 py-4">{pokemon.special_attack}</td>
      <td className="px-6 py-4">{pokemon.special_defense}</td>
      <td className="px-6 py-4">{pokemon.speed}</td>
      <td className="px-6 py-4">{power}</td>
    </tr>
  );
};

export default TableRow;
