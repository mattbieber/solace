import AdvocateFilter from './components/advocate-filter'
import AdvocateTable from './components/advocate-table'
import localFont from 'next/font/local'

const mollie = localFont({
    src: './fonts/mollie-glaston.woff2',
    variable: '--font-mollie',
})

export default function Home() {
    return (
        <main className="isolate flex-col p-4">
            <div className="absolute inset-0 -z-10">
                <div
                    className={`absolute top-0 -left-1/4 h-1/2 w-1/2 rounded-full bg-lime-400 opacity-20 blur-3xl`}></div>
            </div>
            <div className="m-auto max-w-full xl:max-w-3/4">
                <h1 className={`${mollie.className} my-20 text-6xl font-bold`}>
                    Solace Advocates
                </h1>

                <AdvocateFilter />
                <AdvocateTable />
            </div>
        </main>
    )
}
