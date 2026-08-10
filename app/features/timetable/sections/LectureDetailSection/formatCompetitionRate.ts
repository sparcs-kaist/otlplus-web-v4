export default function formatCompetitionRate(
    numPeople: number | null,
    limitPeople: number,
): string {
    if (limitPeople === 0) return "0.00:1"
    if (numPeople == null) return "-"
    return `${(numPeople / limitPeople).toFixed(2)}:1`
}
