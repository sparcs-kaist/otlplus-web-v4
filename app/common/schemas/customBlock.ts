import { z } from "zod"

import { WeekdayEnum } from "@/common/enum/weekdayEnum"

export const CustomBlockSchema = z.object({
    id: z.number().int(),
    blockName: z.string(),
    place: z.string(),
    day: z.nativeEnum(WeekdayEnum).or(z.number().int()),
    begin: z.number().int().min(0).max(1440),
    end: z.number().int().min(0).max(1440),
})

export type CustomBlock = z.infer<typeof CustomBlockSchema>
