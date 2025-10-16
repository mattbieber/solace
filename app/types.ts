export type Advocate = {
    id: number
    firstName: NonNullable<string>
    lastName: NonNullable<string>
    city: NonNullable<string>
    degree: NonNullable<string>
    specialties: string[]
    yearsOfExperience: number
    phoneNumber: number
    createdAt: Date | null
}
