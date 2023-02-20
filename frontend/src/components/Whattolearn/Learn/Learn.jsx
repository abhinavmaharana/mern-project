import React from 'react'

function Learn({id,title,image,author,rating,review,price,originalprice, tag}) {
  return (
    <div className='relative flex flex-col space-y-1 p-4'>
        <img src={image} alt="" />
        <h4 className='text-lg font-bold'>{title}</h4>
        <p className="text-gray-600 text-sm">{author}</p>
        <p className="text-yellow-600 text-sm">{rating}<span className="text-gray-600">{review}</span></p>
        <p className='font-bold'>{price} <span className="line-through text-gray-600">{originalprice}</span></p>
        <button className='bg-yellow-500 text-black py-2 px-2 w-20 rounded-sm'>{tag}</button>
    </div>
  )
}

export default Learn