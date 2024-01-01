import React from "react";
import PokemonTable from "./Table/Table";

const Home: React.FC = () => {
  return (
    <div className="flex-1 py-4 px-1 my-4 mx-2 w-full md:w-11/12 backdrop-blur-md border border-none rounded-3xl justify-center items-center overflow-y-auto">
      <h1 className="flex font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 justify-center items-center">
        Pokédex
        <img
          className="pokeball w-16 h-16 ml-4"
          src="./pokeball.svg"
          alt="pokeball"
        />
      </h1>
      <PokemonTable />
    </div>
  );
};

export default Home;
