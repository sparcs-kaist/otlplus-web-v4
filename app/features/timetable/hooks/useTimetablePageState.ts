import { useState } from "react"

import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"

export function useTimetablePageState() {
    const [hover, setHover] = useState<Lecture[]>([])
    const [selected, setSelected] = useState<Lecture | null>(null)
    const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

    const clearSelection = () => {
        setSelected(null)
        setHover([])
    }

    return {
        hover,
        setHover,
        selected,
        setSelected,
        timeFilter,
        setTimeFilter,
        mobileSearchOpen,
        setMobileSearchOpen,
        clearSelection,
    }
}
