import type {UnitType} from 'dayjs'

export interface EventType {
    id: number
    date: string // ISO String
    title: string
    poster: any
    durationVal: number
    durationType: UnitType
    joinLink: string
    description: string
    location: string
}
