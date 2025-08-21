import React from 'react'

export const PrimaryTextInput = () => {
  return (
    <div className='flex-1 flex'>
      <input
        type='text'
        className='
    grow shrink basis-[500px]
    py-2 px-2 mr-5
    border border-blue-600 rounded-md
    focus:outline-none focus:ring-0 focus:border-blue-800 focus:border-2
    active:outline-none active:ring-0 active:border-none  '
      />
    </div>
  )
}
