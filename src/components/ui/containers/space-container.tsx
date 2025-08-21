import React from 'react'

interface Props {
  show?: boolean
}

export const SpaceContainer = ({ show }: Props) => {
  return <div className={`flex-1 h-1 w-1 ${show && 'bg-red-600'}`} />
}
