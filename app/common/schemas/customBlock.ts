import { z } from "zod"

import { WeekdayEnum } from "@/common/enum/weekdayEnum"

export const CustomBlockTimeSchema = z.object({
    day: z.enum(WeekdayEnum),
    begin: z.number().int().min(0).max(1439),
    end: z.number().int().min(1).max(1440),
})

export const CustomBlockSchema = z.object({
    id: z.number().int(),
    block_name: z.string(),
    place: z.string(),
    times: z.array(CustomBlockTimeSchema).min(1),
})

export type CustomBlock = z.infer<typeof CustomBlockSchema>
