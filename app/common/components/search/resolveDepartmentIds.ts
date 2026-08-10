export default function resolveDepartmentIds(
    departmentCodes: Array<string | number>,
    departments?: Array<{ id: number; code: string }>,
): number[] {
    return departmentCodes
        .map(
            (code) =>
                departments?.find((department) => department.code === String(code))?.id,
        )
        .filter((id): id is number => id !== undefined)
}
