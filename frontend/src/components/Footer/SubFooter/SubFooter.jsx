import React from 'react'

function SubFooter() {
  return (
    <div className="border-b-[1px] py-6 px-12 grid grid-cols-2">
      <div className="relative flex flex-col h-5 cursor-pointer my-auto space-x-6 space-y-1 text-center mt-[-5px] ml-[-50px] xl:ml-[-80px] 2xl:ml-[-270px] items-center px-6">
        <h1 className="text-xl font-bold 2xl:ml-[-328px]">
          Teach the world online
        </h1>
        <p className="">
          Create an online video course, reach students across the globe, and
          earn money
        </p>
      </div>
      <div className="flex items-center justify-end px-6 space-x-5">
        <button className=" py-3 px-8 outline outline-offset-2 outline-2">
          Dismiss
        </button>
      </div>
    </div>
  )
}

export default SubFooter