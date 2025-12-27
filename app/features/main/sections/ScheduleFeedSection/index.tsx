import { useTranslation } from "react-i18next"

import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"

import Widget from "../../../../common/primitives/Widget"

function ScheduleFeedSection() {
    const { t } = useTranslation()

    const { query } = useAPI("GET", "/schedules")

    return (
        <Widget direction="column" gap={20} align="stretch" padding="30px" flex="1 1 0">
            <FlexWrapper direction="row" gap={0}>
                <Typography type="BiggerBold" color="Text.default">
                    {t("main.scheduleFeed.title")}
                </Typography>
            </FlexWrapper>
            <FlexWrapper direction="column" align="stretch" gap={15}>
                {query.data?.schedules.map((schedule, idx) => (
                    <FlexWrapper key={idx} direction="column" align="stretch" gap={15}>
                        <FlexWrapper direction="row" justify="space-between" gap={0}>
                            <Typography type="BigBold" color="Highlight.default">
                                {schedule.from.getMonth() + 1}/{schedule.from.getDate()} -{" "}
                                {schedule.to.getMonth() + 1}/{schedule.to.getDate()}
                            </Typography>
                            <Typography type="BigBold" color="Text.default">
                                {schedule.name}
                            </Typography>
                        </FlexWrapper>
                        {idx < query.data.schedules.length - 1 ? (
                            <Line height={1} color="Line.default" />
                        ) : null}
                    </FlexWrapper>
                ))}
            </FlexWrapper>
        </Widget>
    )
}

export default ScheduleFeedSection
