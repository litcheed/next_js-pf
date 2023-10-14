"use client"

import React from 'react'

const error = ({ reset }: { reset: () => void}) => {
  return (
    <div className='bg-red-100 border-l-4 border-red-500 text-red-700 mt-4 p-3 rounded shadow-md mx-auto'>
        <h3 className='font-bold mb-2'>エラーが発生しました。</h3>
        <button onClick={() => reset()} className='bg-red-600 text-white px-4 py-2 rounded hover: bg-red-500 transition duration-200'>更新する</button>
    </div>
  )
}

export default error