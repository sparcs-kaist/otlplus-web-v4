import { useCallback, useEffect, useState } from "react"

import type { ScoreEnum } from "@/common/enum/scoreEnum"
import type { Review } from "@/common/schemas/review"

export interface ReviewFormValues {
    text: string
    grade: ScoreEnum
    load: ScoreEnum
    speech: ScoreEnum
}

export interface ReviewFormPayload {
    content: string
    grade: ScoreEnum
    load: ScoreEnum
    speech: ScoreEnum
}

const EMPTY_VALUES: ReviewFormValues = {
    text: "",
    grade: 0,
    load: 0,
    speech: 0,
}

export function useReviewForm(initialReview: Review | null) {
    const [values, setValues] = useState<ReviewFormValues>(EMPTY_VALUES)

    const reset = useCallback(() => {
        setValues(EMPTY_VALUES)
    }, [])

    useEffect(() => {
        if (initialReview) {
            setValues({
                text: initialReview.content,
                grade: initialReview.grade,
                load: initialReview.load,
                speech: initialReview.speech,
            })
        } else {
            setValues(EMPTY_VALUES)
        }
    }, [initialReview])

    const setText = useCallback((text: string) => setValues((v) => ({ ...v, text })), [])
    const setGrade = useCallback(
        (grade: ScoreEnum) => setValues((v) => ({ ...v, grade })),
        [],
    )
    const setLoad = useCallback(
        (load: ScoreEnum) => setValues((v) => ({ ...v, load })),
        [],
    )
    const setSpeech = useCallback(
        (speech: ScoreEnum) => setValues((v) => ({ ...v, speech })),
        [],
    )

    const canSubmit =
        values.text.trim().length > 0 &&
        values.grade !== 0 &&
        values.load !== 0 &&
        values.speech !== 0

    const toPayload = useCallback(
        (): ReviewFormPayload => ({
            content: values.text,
            grade: values.grade,
            load: values.load,
            speech: values.speech,
        }),
        [values],
    )

    return {
        values,
        setText,
        setGrade,
        setLoad,
        setSpeech,
        reset,
        canSubmit,
        toPayload,
    }
}
