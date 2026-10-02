import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"

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

export const FriendListItemSchema = FriendSchema.extend({
    hasScheduleNow: z.boolean().nullable().optional(),
})

export type FriendListItem = z.infer<typeof FriendListItemSchema>

export const OverlapFriendSchema = FriendSchema.extend({
    timetable: z.object({
        id: z.number().int().positive().nullable(),
        year: z.number().int().positive(),
        semester: z.enum(SemesterEnum),
    }),
})

export type OverlapFriend = z.infer<typeof OverlapFriendSchema>
