import { IFlight } from '@/types/IFlight'
import { formatDate } from '@/utils'
import React from 'react'
import Link from 'next/link'

interface Props {
  flight: IFlight
}

export const FlightItem = ({ flight }: Props) => {
  return (
    <Link
      href={flight.id}
      className='shrink-0 grow-0 basis-[calc(25%-1rem)] border rounded-lg shadow-md p-4 mb-4 bg-white hover:shadow-lg transition'
    >
      <div className='flex justify-between items-center mb-2'>
        <h2 className='text-xl font-bold'>{flight.airline}</h2>
        <p className='text-lg font-semibold text-blue-600'>${flight.price}</p>
      </div>

      <div className='flex-col items-center justify-between mb-4'>
        <div>
          <p className='text-gray-700 font-semibold'>{flight.from}</p>
          <p className='text-sm text-gray-500'>{formatDate(flight.departureTime)}</p>
        </div>

        <div>
          <p className='text-gray-700 font-semibold'>{flight.to}</p>
          <p className='text-sm text-gray-500'>{formatDate(flight.arrivalTime)}</p>
        </div>
      </div>

      <div className='flex flex-wrap justify-between items-center text-sm gap-4'>
        <p className='text-gray-600'>
          Tickets left:{' '}
          <span
            className={
              flight.tickets.remaining > 5
                ? 'text-green-600 font-semibold'
                : 'text-red-600 font-semibold'
            }
          >
            {flight.tickets.remaining}/{flight.tickets.total}
          </span>
        </p>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded transition'>
          Book Now
        </button>
      </div>
    </Link>
  )
}
