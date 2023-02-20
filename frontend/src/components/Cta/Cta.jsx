import React from 'react'

function Cta() {
  return (
    <div className='relative grid grid-cols-2 bg-black text-white py-3'>
        <div className='flex items-center h-5 cursor-pointer my-auto space-x-6 text-center px-6'>
            <h3 className="font-bold text-xl">
                Training 5 or more people?{' '}
                <span className="font-normal text-lg">
                    Get your team access to Udemy's top 6000+ courses
                </span>
            </h3>
        </div>
        <div className="flex items-center justify-end px-6 space-x-5">
            <button className="bg-white text-black py-3 px-8">
                Get Udemy Business
            </button>
            <button className="py-2 px-8 outline outline-offset-2 outline-2">
                Dismiss
            </button>
        </div>
    </div>
  )
}

export default Cta