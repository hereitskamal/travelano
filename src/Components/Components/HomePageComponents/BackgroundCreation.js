import React from 'react'

const BackgroundCreation = () => {
  return (
    <>
    <div className="relative w-100 h-96 bg-gray-200 overflow-hidden">
      <div className="absolute top-30 left-30 w-full h-full  overflow-hide">
        <div className="w-16 h-12 border-2 border-red-500 "></div>
        <div className="w-16 h-12 border-2 border-red-500 "></div>
        <div className="w-16 h-12 border-2 border-red-500 "></div>
        <div className="w-16 h-12 border-2 border-red-500 "></div>
        <div className="w-16 h-12 border-2 border-red-500 "></div>
        <div className="w-16 h-12 border-2 border-red-500 "></div>
        <div className="w-16 h-12 border-2 border-red-500 "></div>
        {/* Add more tilted squares as needed */}
      </div>
    </div>
    </>
  )
}

export default BackgroundCreation