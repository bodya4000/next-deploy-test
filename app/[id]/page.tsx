import FlightService from '@/services/FlightService'
import { IFlight } from '@/types/IFlight'
import React from 'react'

export default async function FlightPage({ params }: any) {
  const { id } = params
  const flight: IFlight = await FlightService.getFlightById(id)

  return (
    <div className='flex justify-center items-center min-h-screen px-4'>
      <div className='w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200'>
        <div className='bg-blue-600 text-white px-6 py-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold tracking-wide'>{flight.airline}</h1>
          <span className='text-lg font-semibold'>Ticket #{flight.id}</span>
        </div>

        <div className='px-6 py-6 grid grid-cols-2 gap-6'>
          <div className='text-center'>
            <p className='text-gray-500 text-sm'>From</p>
            <p className='text-3xl font-bold'>{flight.from}</p>
            <p className='text-gray-600'>{flight.departureTime}</p>
          </div>

          <div className='text-center'>
            <p className='text-gray-500 text-sm'>To</p>
            <p className='text-3xl font-bold'>{flight.to}</p>
            <p className='text-gray-600'>{flight.arrivalTime}</p>
          </div>
        </div>

        <div className='border-t border-dashed border-gray-400 mx-6'></div>

        <div className='px-6 py-6 grid grid-cols-3 gap-4 text-center'>
          <div>
            <p className='text-gray-500 text-sm'>Terminal</p>
            <p className='font-semibold'>{flight.terminal}</p>
          </div>
          <div>
            <p className='text-gray-500 text-sm'>Gate</p>
            <p className='font-semibold'>{flight.gate}</p>
          </div>
          <div>
            <p className='text-gray-500 text-sm'>Price</p>
            <p className='font-semibold text-blue-600'>${flight.price}</p>
          </div>
        </div>

        {/* Tickets info */}
        <div className='px-6 pb-6 flex justify-between items-center'>
          <p className='text-gray-600 text-sm'>
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

          <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
