import type { Metadata } from 'next'

import { Lato } from 'next/font/google'
import { AdvocatesContextProvider } from './providers'
import './globals.css'

const lato = Lato({
    subsets: ['latin'],
    variable: '--font-lato',
    display: 'swap',
    weight: ['100', '300', '400', '700', '900']
})



export const metadata: Metadata = {
    title: 'Solace Candidate Assignment',
    description: 'Show us what you got',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${lato.className}  antialiased`}>
                <div className="relative isolate min-h-screen bg-neutral-100 transition-colors duration-300">
                    <div className="absolute inset-0 -z-10">
                        <div
                            className="absolute inset-0 opacity-40"
                            style={{
                                backgroundImage:
                                    'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }}></div>
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    'radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                            }}></div>
                    </div> 
                    <AdvocatesContextProvider>
                        {children}
                    </AdvocatesContextProvider>
                </div>
            </body>
        </html>
    )
}
