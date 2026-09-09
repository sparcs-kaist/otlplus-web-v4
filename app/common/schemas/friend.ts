import { z } from "zod"

export const FriendSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    isFavorite: z.boolean(),
})

export type Friend = z.infer<typeof FriendSchema>
