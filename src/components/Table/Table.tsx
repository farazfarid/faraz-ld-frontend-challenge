import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "../Common/Pagination";
import fetchPokemonData from "../../services/ApiService";
import calculatePower from "../../utils/calculatePower";
import Pokemon from "../../interfaces/Pokemon";
import SearchInput from "../Common/SearchInput";

const PAGE_SIZE = 5;

const Table: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchName, setSearchName] = useState("");
  const [searchThreshold, setSearchThreshold] = useState("");
  const [minPower, setMinPower] = useState<number | null>(null);
  const [maxPower, setMaxPower] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonData();
      setPokemonData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredAndPaginatedData = pokemonData
      .filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchName.toLowerCase())
      )
      .filter(
        (pokemon) =>
          !searchThreshold ||
          calculatePower(pokemon) >= parseInt(searchThreshold, 10)
      )
      .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    const paginatedPowers = filteredAndPaginatedData.map((pokemon) =>
      calculatePower(pokemon)
    );

    setMinPower(Math.min(...paginatedPowers));
    setMaxPower(Math.max(...paginatedPowers));
  }, [pokemonData, currentPage, searchName, searchThreshold]);

  const handleSort = (column: string) => {
    setSortedColumn(column);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");

    const sortedData = filteredData.slice().sort((a, b) => {
      const order = sortOrder === "asc" ? 1 : -1;
      if (column === "power") {
        const powerA = calculatePower(a);
        const powerB = calculatePower(b);
        return powerA > powerB ? order : -order;
      } else {
        return a[column] > b[column] ? order : -order;
      }
    });

    setPokemonData(sortedData);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const handleSearchThresholdChange = (threshold: string) => {
    setCurrentPage(1);
    setSearchThreshold(threshold);
  };

  const filteredData = pokemonData
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter(
      (pokemon) =>
        !searchThreshold ||
        calculatePower(pokemon) >= parseInt(searchThreshold, 10)
    );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="flex flex-col p-8">
      <div className="flex justify-evenly items-center  dark:border-gray-700 p-4">
        <label>
          <SearchInput
            value={searchName}
            onChange={setSearchName}
            placeholder="🔍 Search by Name..."
          />
        </label>

        <label>
          <SearchInput
            value={searchThreshold}
            onChange={handleSearchThresholdChange}
            placeholder="⚡ Search by Power..."
          />
        </label>
      </div>

      <div className="mx-auto flex justify-center items-center bg-white/30 rounded-md p-4 w-2/3 mb-4">
        <p className="">
          Min Power: {minPower !== null ? minPower : "N/A"} | Max Power:{" "}
          {maxPower !== null ? maxPower : "N/A"}
        </p>
      </div>

      <div className="text-text flex flex-col items-center justify-center w-full h-full mb-4">
        <div className="flex flex-col flex-grow w-full overflow-hidden">
          <div className="flex flex-col flex-grow overflow-x-auto">
            <table className="w-full text-xs text-gray-500 dark:text-gray-400 overflow-hidden">
              <TableHeader onSort={handleSort} sortedColumn={sortedColumn} />
              <tbody>
                {paginatedData.map((pokemon) => (
                  <TableRow key={pokemon.id} pokemon={pokemon} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        pageSize={pageSize}
        totalItems={filteredData.length}
        handlePageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default Table;
