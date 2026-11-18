const SYLLABUS_URL = "https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do"

export default function getSyllabusUrl(code: string, year: number, semester: number) {
    const params = btoa(
        JSON.stringify({
            syy: String(year),
            smtDivCd: String(semester),
            subjtCd: code,
            syllabusOpenYn: "0",
        }),
    )
    return `${SYLLABUS_URL}?link=estblSubjt&params=${params}`
}
