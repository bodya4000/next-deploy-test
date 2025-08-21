import { FlightList } from '@/components/flights/catalog/flight-list'
import { PageContainer } from '@/components/ui/containers'
import { Suspense } from 'react'

export default function Catalog() {
  return (
    <>
      <Suspense fallback={<PageContainer>Loading flights...</PageContainer>}>
        <FlightList />
      </Suspense>
    </>
  )
}
