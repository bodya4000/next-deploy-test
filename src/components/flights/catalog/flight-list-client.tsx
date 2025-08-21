'use client'

import { PageContainer } from '@/components/ui/containers'
import React from 'react'
import { FlightItem } from './flight-item'
import { IFlight } from '@/types/IFlight'

interface Props {
  flights: IFlight[]
}

export const FlightListClient = ({flights}: Props) => {
  return (
    <PageContainer className='flex flex-wrap gap-3'>
      {flights.map(flight => (
        <FlightItem key={flight.id} flight={flight} />
      ))}
      {flights.length === 0 && <p className='text-center text-gray-500'>No flights available</p>}
    </PageContainer>
  )
}
