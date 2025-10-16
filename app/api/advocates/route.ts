import db from '@/db'
import { advocates } from '@/db/schema'
import type {AdvocateSearchCriteria} from '@/app/providers'
import {eq, and, sql } from 'drizzle-orm'
export async function GET() {
    const data = await db.select().from(advocates)

    return Response.json({ data })
}

export async function POST(request: Request) {
    const { specialty, city, degree } = await request.json() as AdvocateSearchCriteria


    // @ts-expect-error - not recognizing 'where'
    const data = await db.select().from(advocates).where(
        and(
            city ? eq(advocates.city, city) : undefined,
            degree ? eq(advocates.degree, degree) : undefined,
            specialty ? sql`EXISTS (
            SELECT 1 FROM jsonb_array_elements_text(${advocates.specialties}) AS elem
            WHERE elem ILIKE ${`%${specialty}%`}
        )` : undefined
        )
    )
    return Response.json({ data })
}
