const possibleTrueValues = ["true", "1", "yes", "y", "on", "enable", "enabled"]

export const stringToBoolean = (value: string) => {
    return possibleTrueValues.includes(value)
}
