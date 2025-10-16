import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import db from '@/db'
import { advocates } from '@/db/schema'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export async function getAdvocates() {
    const data = await db.select().from(advocates)
    return data
}
