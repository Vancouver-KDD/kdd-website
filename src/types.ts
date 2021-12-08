import type {UnitType} from 'dayjs'
import type {unitOfTime} from 'moment'
import type * as socialIcons from 'assets/socialIcons'

export interface FooterType extends StrapiDocument {
    developers: Array<{id: number; name: string; link: string}>
    supporters: Array<{id: number; name: string; link: string}>
}

export interface StrapiDocument {
    id: number
    published_at: string // ISO String
    created_at: string // ISO String
    updated_at: string // ISO String
}

export interface SponsorsType extends StrapiDocument {
    name: string
    url: string
    logo: Image
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

export interface OrganizerType extends StrapiDocument {
    name: string
    title: string
    description: string
    profilePic: Image
    socialList: [
        {
            link: string
            type: keyof typeof socialIcons
        },
    ]
}

export interface EventType extends StrapiDocument {
    date: string // ISO String
    title: string
    poster: Image
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
}

export interface JobType extends StrapiDocument {
    title: string
    description: string
    applicationUrl: string
    companyName: string
    companyUrl: string
}
