import { IFlight } from './IFlight'

export interface ISeat {
  id: string
  status: string
  flight?: IFlight
}
