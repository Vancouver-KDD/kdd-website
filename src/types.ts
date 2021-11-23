import type {UnitType} from 'dayjs'
import type {unitOfTime} from 'moment'
import type * as memberSocialIcons from 'assets/members'
export interface StrapiDocument {
    id: number
    published_at: string // ISO String
    created_at: string // ISO String
    updated_at: string // ISO String
}

export interface SponsorsType extends StrapiDocument {
    name: string
    url: string
    logo: Image[]
}

export interface UseDocument<T> {
    data: T | null
    loading: boolean
    error: Error | null
}

export interface UseCollection<T> {
    data: T[] | null
    loading: boolean
    error: Error | null
    loadMore: () => void
}

interface Image {
    name: string
    url: string
    formats: {
        large?: {
            url: string
        }
        medium?: {
            url: string
        }
        small?: {
            url: string
        }
        thumbnail?: {
            url: string
        }
    }
}

export interface PhotoType extends StrapiDocument {
    title: string
    description: string
    uploader_name: string
    photo: Image[]
}

export interface MemberType extends StrapiDocument {
    name: string
    title: string
    description: string
    profilePic: Image[]
    socialList: [
        {
            link: string
            type: keyof typeof memberSocialIcons
        },
    ]
}

export interface EventType extends StrapiDocument {
    date: string // ISO String
    title: string
    poster: Image[]
    durationVal: number
    durationType: UnitType & unitOfTime.DurationConstructor // Insection between moment and strapi date types
    joinLink: string
    description: string
    location: string
    photos: PhotoType[]
}

export interface StatisticsType extends StrapiDocument {
    meetups: number
    members: number
    developers: Array<{
        name: string
        link: string
    }>
    supporters: Array<{
        name: string
        link: string
    }>
}
