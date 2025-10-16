'use client'

import { useContext } from 'react'
import { AdvocatesContext } from '../providers'

const columns = [
    'First',
    'Last',
    'City',
    'Degree',
    'Specialties',
    'Yrs. Exp.',
    'Phone',
]

function formatPhone(num: number):string {
    const numAsString = num.toString()
    return `(${numAsString.slice(0,3)}) ${numAsString.slice(3,6)}-${numAsString.slice(-4)}`
}

export default function AdvocateTable() {
    const data = useContext(AdvocatesContext)

    if (!data || !data?.advocates) {
        return <div>No data available</div>
    }

    const { advocates } = data
    const cls = "border-blue-gray-50 p-4 align-top"
    
    return (
        <div>
            <div className="relative mt-8 flex w-full flex-col bg-white text-gray-700 mb-20 rounded-sm">
                {advocates && advocates.length > 0 && (
                    <table className="table-auto text-left">
                        <thead className="border-b-6 border-lime-200">
                            <tr>
                            {columns.map((col) => {
                                return (
                                    <th key={col} className="border-blue-gray-100 bg-blue-gray-50 p-4 font-bold">
                                        {col}
                                    </th>
                                )
                            })}
                            </tr>
                        </thead>
                        <tbody>
                            {advocates.map((adv) => {
                                return (
                                    <tr key={adv.id} className="text-sm border-b border-b-lime-100">
                                        <td className={`${cls}`}>
                                            {adv.firstName}
                                        </td>
                                        <td className={`${cls}`}>
                                            {adv.lastName}
                                        </td>

                                        <td className={`${cls}`}>
                                            {adv.city}
                                        </td>

                                        <td className={`${cls}`}>
                                            {adv.degree}
                                        </td>

                                        <td className={`${cls}`}>
                                            {adv.specialties.map((sp, i) => (
                                                <div key={i}>{sp}</div>
                                            ))}
                                        </td>

                                        <td className={`${cls}`}>
                                            {adv.yearsOfExperience}
                                        </td>

                                        <td className={`${cls} text-nowrap`}>
                                           { formatPhone(adv.phoneNumber) }
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
