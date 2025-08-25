import { PageContainer } from '@/components/ui/containers'
import FlightService from '@/services/FlightService'
import React from 'react'
import { FlightListClient } from './flight-list-client'

export const FlightList = async () => {
  const data = await FlightService.getFlights()
  return (
    <PageContainer className='flex flex-wrap gap-3'>
      <FlightListClient flights={data} />
    </PageContainer>
  )
}
