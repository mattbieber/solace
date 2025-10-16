'use client'
import React, { useContext, useState, type FormEvent } from 'react'
import { AdvocatesContext, AdvocateSearchCriteria } from '../providers'
import { ChevronsDown } from 'lucide-react'

const AdvocateFilter = () => {
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>('')
    const [selectedCity, setSelectedCity] = useState<string>('')
    const [selectedDegree, setSelectedDegree] = useState<string>('')

    // @ts-expect-error - not seeing property on the context
    const { cities, degrees, filterAdvocates } = useContext(AdvocatesContext)

    const handleSpecialtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSpecialty(e.target.value)
    }

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(e.target.value)
    }
    const handleDegreeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDegree(e.target.value)
    }

    const applyFilters = () => {
        const criteria: AdvocateSearchCriteria = {
            specialty: selectedSpecialty,
            city: selectedCity,
            degree: selectedDegree
        }
        filterAdvocates(criteria)
    }

    const clearFilters = () => {
        setSelectedCity('')
        setSelectedDegree('')
        setSelectedSpecialty('')

        filterAdvocates({})
    }

    return (

            <div className="flex w-full">
                <div>
                    <label
                        htmlFor="search"
                        className="mb-2 ml-1 block text-sm font-medium text-gray-900">
                        Specialty
                    </label>
                    <input
                        type="text"
                        id="specialty"
                        name="specialty"
                        value={selectedSpecialty}
                        onChange={handleSpecialtyChange}
                        className="block w-80 rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-sm font-bold text-gray-900 focus:border-lime-400 focus:ring-3 focus:!ring-lime-400 focus:outline-none"
                    />
                </div>
                <div className="ml-8">
                    <label
                        htmlFor="city"
                        className="mb-2 ml-1 block text-sm font-medium text-gray-900">
                        City
                    </label>
                    <div className="relative">
                        <ChevronsDown className="absolute top-1/2 right-0.5 -translate-y-1/2 text-zinc-400" />
                        <select
                            id="city"
                            name="city"
                            value={selectedCity}
                            onChange={handleCityChange}
                            className="block min-w-40 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-400 focus:ring-3 focus:!ring-lime-400 focus:outline-none">
                            {cities &&
                                cities.map((city: string) => (
                                    <option
                                        key={city}
                                        className="cursor-pointer"
                                        value={city}>
                                        {city}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
                <div className="ml-8">
                    <label
                        htmlFor="degree"
                        className="mb-2 ml-1 block text-sm font-medium text-gray-900">
                        Degree
                    </label>
                    <div className="relative">
                        <ChevronsDown className="absolute top-1/2 right-0.5 -translate-y-1/2 text-zinc-400" />
                        <select
                            id="degree"
                            name="degree"
                            onChange={handleDegreeChange}
                            value={selectedDegree}
                            className="block min-w-30 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-400 focus:ring-3 focus:!ring-lime-400 focus:outline-none">
                            {degrees &&
                                degrees.map((deg: string) => (
                                    <option
                                        key={deg}
                                        className="cursor-pointer"
                                        value={deg}>
                                        {deg}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
                <div className="ml-auto">
                    <label
                        htmlFor="filter"
                        className="mb-2 ml-1 block text-sm font-medium text-gray-900 opacity-0">
                        {'-'}
                    </label>
                    <button
                        type="button"
                        id="clear"
                        name="clear"
                        onClick={clearFilters}
                        className="block min-w-30 cursor-pointer appearance-none rounded-sm border border-lime-400 bg-gray-50 p-2.5 text-sm font-extrabold text-gray-900 ring-2 ring-lime-400 hover:bg-lime-50 focus:outline-none">
                        Clear Filters
                    </button>
                </div>
                <div className="ml-4">
                    <label
                        htmlFor="filter"
                        className="mb-2 ml-1 block text-sm font-medium text-gray-900 opacity-0">
                        {'-'}
                    </label>
                    <button
                        type="button"
                        id="filter"
                        name="filter"
                        onClick={applyFilters}
                        className="block min-w-30 cursor-pointer appearance-none rounded-sm border border-lime-400 bg-gray-50 p-2.5 text-sm font-extrabold text-gray-900 ring-2 ring-lime-400 hover:bg-lime-50 focus:outline-none">
                        Apply Filters
                    </button>
                </div>
            </div>
    )
}

export default AdvocateFilter
