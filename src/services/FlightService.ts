import { IFlight } from '../types/IFlight'

class FlightService {
  private BASE_URL = 'https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights'

  async getFlights(): Promise<IFlight[]> {
    const res = await fetch(this.BASE_URL, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch flights')
    return res.json()
  }

  async getFlightById(id: string): Promise<IFlight> {
    const res = await fetch(`${this.BASE_URL}/${id}`, { cache: 'no-store' })
    if (!res.ok) throw new Error(`Failed to fetch flight ${id}`)
    return res.json()
  }
}

export default new FlightService()
