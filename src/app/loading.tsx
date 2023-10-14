import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='w-20 h-20 border-t-4 border-green-500 rounded-full animate-spin'></div>
    </div>
  )
}

export default Loading