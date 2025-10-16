import db from '@/db'
import { advocates } from '@/db/schema'
import { advocateData } from '@/db/seed/advocates'

export async function POST() {
    //@ts-expect-error - fails TS on build but worked?
    const records = await db.insert(advocates).values(advocateData).returning()

    return Response.json({ advocates: records })
}
