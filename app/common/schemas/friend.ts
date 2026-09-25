import { z } from "zod"

export const FriendCodeSchema = z
    .string()
    .trim()
    .toUpperCase()
    .regex(/^[ACDEFHJKLMNPQRTUVWXY3479]{6}$/)

export const FriendSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    isFavorite: z.boolean(),
})

export type Friend = z.infer<typeof FriendSchema>
