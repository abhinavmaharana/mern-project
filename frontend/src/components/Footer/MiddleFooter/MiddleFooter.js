import React from 'react';

function MiddleFooter() {
  return (
    <div className="border-b-[1px] py-8 px-10 grid grid-cols-2 ">
      <div className="relative flex cursor-pointer my-auto space-x-6 text-center mt-[-5px] ml-[-50px] xl:ml-[-80px] 2xl:ml-[-275px] items-center px-6">
        <h1 className="text-xl font-bold 2xl:ml-[252px] mt-[10px]">
          Top companies choose{' '}
          <span className="text-[#BDA6CB]">Udemy Business </span> to build
          in-demand career skills
        </h1>
      </div>
      <div className="flex items-center justify-end px-6 space-x-5">
        <img
          alt="Nasdaq"
          height="44"
          width="115"
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
        />
        <img
          alt="Volkswagen"
          height="44"
          width="44"
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
        ></img>
        <img
          alt="Box"
          height="44"
          width="67"
          src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
        ></img>
        <img
          alt="Netflix"
          height="44"
          width="101"
          src="https://s.udemycdn.com/partner-logos/v4/netflix-light.svg"
        ></img>
        <img
          alt="Eventbrite"
          height="44"
          width="115"
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
        ></img>
      </div>
    </div>
  );
}

export default MiddleFooter;
