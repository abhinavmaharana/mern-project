import React from 'react';

function Copyright() {
  return (
    <div className="py-8 px-10 grid grid-cols-2 2xl:mt-[180px]">
      <div className="relative flex cursor-pointer my-auto space-x-6 text-center items-center 2xl:ml-[10px]">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          className="w-[80px]"
          alt=""
        />
      </div>
      <div className="flex items-center justify-end px-6 space-x-5">
        <p>This is Udemy Clone. Made for educational Purpose</p>
      </div>
    </div>
  );
}

export default Copyright;
