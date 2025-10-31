import type { GETCourseDetailResponse } from "@/api/courses/$courseId"

const exampleCourse: GETCourseDetailResponse = {
    id: 745,
    name: "이산구조",
    code: "CS.20004",
    type: "전공필수",
    department: {
        id: 9945,
        name: "전산학부",
    },
    history: [
        {
            year: 2016,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 682,
                            name: "최광무",
                        },
                    ],
                    classNo: "A",
                    lectureId: 2898,
                },
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "B",
                    lectureId: 2899,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2015,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 683,
                            name: "최성희",
                        },
                        {
                            id: 928,
                            name: "정진완",
                        },
                    ],
                    classNo: "B",
                    lectureId: 10263,
                },
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "A",
                    lectureId: 10272,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2015,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "A",
                    lectureId: 15314,
                },
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "B",
                    lectureId: 15315,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2011,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 928,
                            name: "정진완",
                        },
                    ],
                    classNo: "",
                    lectureId: 90613,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2011,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "",
                    lectureId: 95078,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2012,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 429,
                            name: "김순태",
                        },
                    ],
                    classNo: "",
                    lectureId: 99875,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2012,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 684,
                            name: "황규영",
                        },
                    ],
                    classNo: "",
                    lectureId: 104715,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2013,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 928,
                            name: "정진완",
                        },
                    ],
                    classNo: "",
                    lectureId: 109378,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2013,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "A",
                    lectureId: 113836,
                },
                {
                    professors: [
                        {
                            id: 429,
                            name: "김순태",
                        },
                    ],
                    classNo: "B",
                    lectureId: 113837,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2014,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "",
                    lectureId: 118839,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2014,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "A",
                    lectureId: 123858,
                },
                {
                    professors: [
                        {
                            id: 683,
                            name: "최성희",
                        },
                        {
                            id: 928,
                            name: "정진완",
                        },
                    ],
                    classNo: "B",
                    lectureId: 123867,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2016,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "A",
                    lectureId: 131385,
                },
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "B",
                    lectureId: 131386,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2017,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "A",
                    lectureId: 425549,
                },
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "B",
                    lectureId: 425563,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2017,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "A",
                    lectureId: 673247,
                },
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "B",
                    lectureId: 673253,
                },
                {
                    professors: [
                        {
                            id: 685,
                            name: "마틴 지글러",
                        },
                    ],
                    classNo: "C",
                    lectureId: 673254,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2010,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 684,
                            name: "황규영",
                        },
                    ],
                    classNo: "A",
                    lectureId: 916497,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2010,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 682,
                            name: "최광무",
                        },
                    ],
                    classNo: "",
                    lectureId: 921983,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2009,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 928,
                            name: "정진완",
                        },
                    ],
                    classNo: "",
                    lectureId: 926803,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2009,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "",
                    lectureId: 931557,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2018,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "A",
                    lectureId: 989049,
                },
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "B",
                    lectureId: 989050,
                },
                {
                    professors: [
                        {
                            id: 685,
                            name: "마틴 지글러",
                        },
                    ],
                    classNo: "C",
                    lectureId: 1140744,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2018,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1377865,
                },
                {
                    professors: [
                        {
                            id: 685,
                            name: "마틴 지글러",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1377870,
                },
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "D",
                    lectureId: 1377880,
                },
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "C",
                    lectureId: 1377886,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2019,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1609460,
                },
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1609461,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2019,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1715463,
                },
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1715472,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2020,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1830690,
                },
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1830691,
                },
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "C",
                    lectureId: 1830692,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2020,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1838239,
                },
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1838240,
                },
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "C",
                    lectureId: 1838241,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2021,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1842081,
                },
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1842082,
                },
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "C",
                    lectureId: 1842086,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2018,
            semester: 2,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "",
                    lectureId: 1845397,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2021,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1850182,
                },
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1850183,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2022,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "",
                    lectureId: 1855815,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2022,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "",
                    lectureId: 1862169,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2023,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "",
                    lectureId: 1866265,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2023,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 424,
                            name: "강성원",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1870651,
                },
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1870652,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2023,
            semester: 4,
            classes: [
                {
                    professors: [
                        {
                            id: 4091,
                            name: "이승철",
                        },
                    ],
                    classNo: "",
                    lectureId: 1875196,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2024,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1876608,
                },
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1876609,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2024,
            semester: 2,
            classes: [
                {
                    professors: [
                        {
                            id: 4091,
                            name: "이승철",
                        },
                    ],
                    classNo: "",
                    lectureId: 1881129,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2024,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1882913,
                },
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1882914,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2025,
            semester: 1,
            classes: [
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1887411,
                },
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1887606,
                },
            ],
            myLectureId: 0,
        },
        {
            year: 2024,
            semester: 4,
            classes: [],
            myLectureId: 0,
        },
        {
            year: 2025,
            semester: 3,
            classes: [
                {
                    professors: [
                        {
                            id: 431,
                            name: "박진아",
                        },
                        {
                            id: 431244141354,
                            name: "ㅇㄴ마에ㅏㅐㄴㅁㅇ",
                        },
                        {
                            id: 56434546354,
                            name: "ㄹㅇㄴㅁㄹㄴㄹ",
                        },
                    ],
                    classNo: "A",
                    lectureId: 1908736,
                },
                {
                    professors: [
                        {
                            id: 2689,
                            name: "이주영",
                        },
                    ],
                    classNo: "B",
                    lectureId: 1908737,
                },
            ],
            myLectureId: 0,
        },
    ],
    summary:
        "집합이론, 관계, 순열과 조합의 개념과 그 응용 전개함수, 재발관계, 유한 이산구조의 존재와 나열,Propositional and predicate logic 등 알고리즘의 설계와 분석 그리고 컴퓨터 전반에 걸쳐 필요한 추상적인개념을 다룬다.",
    classDuration: 3,
    expDuration: 0,
    credit: 3,
    creditAU: 0,
}

export default exampleCourse
