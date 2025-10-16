'use client'

import {
    useState,
    createContext,
    useEffect,
    useMemo,
    type ReactNode,
} from 'react'
import { Advocate } from './types'

export interface AdvocateSearchCriteria {
    specialty: string
    city: string
    degree: string
}

export interface AdvocatesContextType {
    advocates: Advocate[]
    cities: Array<string>
    degrees: Array<string>
    filterAdvocates: (criteria: Partial<AdvocateSearchCriteria>) => void
}
export const AdvocatesContext = createContext<AdvocatesContextType | null>(null)

export function AdvocatesContextProvider({
    children,
}: {
    children: ReactNode
}) {
    const [advocates, setAdvocates] = useState<Advocate[]>([])

    const filterAdvocates = async (
        criteria: Partial<AdvocateSearchCriteria>,
    ) => {
        const res = await fetch('/api/advocates', {
            method: 'POST',
            body: JSON.stringify(criteria),
        })

        const result = await res.json()
        setAdvocates(result.data)
    }

    const cities = useMemo(() => {
        if (advocates) {
            const uniqueCities = new Set<string>()
            advocates.forEach((adv) => uniqueCities.add(adv.city))
            const orderedCities = Array.from(uniqueCities).sort()
            orderedCities.unshift('')
            return orderedCities
        } else {
            return []
        }
    }, [advocates])

    const degrees = useMemo(() => {
        if (advocates) {
            const uniqueDeg = new Set<string>()
            advocates.forEach((adv) => uniqueDeg.add(adv.degree))
            const orderedDegs = Array.from(uniqueDeg).sort()
            orderedDegs.unshift('')
            return orderedDegs
        } else {
            return []
        }
    }, [advocates])

    useEffect(() => {
        filterAdvocates({})
    }, [])

    return (
        <AdvocatesContext.Provider
            value={{ advocates, cities, degrees, filterAdvocates }}>
            {children}
        </AdvocatesContext.Provider>
    )
}
