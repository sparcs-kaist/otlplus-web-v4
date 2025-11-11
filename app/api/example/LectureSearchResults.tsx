import { WeekdayEnum } from "@/common/enum/weekdayEnum";
import type { GETLecturesResponse } from "../lectures";

const exampleLectureSearchResults: GETLecturesResponse = {
    courses: [
        {
            name: "이산구조",
            code: "CS.20004",
            type: "전공필수",
            completed: true,
            lectures: [
                {
                    id: 100,
                    courseId: 745,
                    classNo: 'A',
                    name: "이산구조",
                    code: "CS.20004",
                    department: { id: 201, name: "전산학부" },
                    type: "전공필수",
                    limitPeople: 100,
                    numPeople: 80,
                    classDuration: 3,
                    expDuration: 0,
                    credit: 4,
                    creditAU: 0,
                    averageGrade: 0,
                    averageLoad: 0,
                    averageSpeech: 0,
                    isEnglish: true,
                    professors: [
                        {
                            id: 695,
                            name: "장용근",
                        },
                    ],
                    classes: [
                        {
                            day: 0,
                            begin: 480,
                            end: 570,
                            buildingCode: "E2",
                            placeName: "산업경영학동 1225",
                        },
                        {
                            day: 2,
                            begin: 600,
                            end: 690,
                            buildingCode: "E2",
                            placeName: "산업경영학동 1225",
                        },
                    ],
                    examTimes: [
                        {
                            day: WeekdayEnum.Mon,
                            begin: 600,
                            end: 720,
                            str: "월 10:00~12:00",
                        },
                    ],
                }
            ],
        },
        {
            name: "전산기조직",
            code: "CS.30101",
            type: "전공필수",
            completed: true,
            lectures: [
                {
                    id: 300,
                    courseId: 748,
                    classNo: 'A',
                    name: "전산기조직",
                    code: "CS.20004",
                    department: { id: 201, name: "전산학부" },
                    type: "전공필수",
                    limitPeople: 100,
                    numPeople: 80,
                    classDuration: 3,
                    expDuration: 0,
                    credit: 4,
                    creditAU: 0,
                    averageGrade: 0,
                    averageLoad: 0,
                    averageSpeech: 0,
                    isEnglish: true,
                    professors: [
                        {
                            id: 695,
                            name: "장용근",
                        },
                    ],
                    classes: [
                        {
                            day: 0,
                            begin: 480,
                            end: 570,
                            buildingCode: "E2",
                            placeName: "산업경영학동 1225",
                        },
                        {
                            day: 2,
                            begin: 600,
                            end: 690,
                            buildingCode: "E2",
                            placeName: "산업경영학동 1225",
                        },
                    ],
                    examTimes: [
                        {
                            day: WeekdayEnum.Mon,
                            begin: 600,
                            end: 720,
                            str: "월 10:00~12:00",
                        },
                    ],
                }
            ],
        },
        {
            name: "데이타구조",
            code: "CS.20006",
            type: "전공필수",
            completed: false,
            lectures: [
                {
                    id: 201,
                    courseId: 746,
                    classNo: 'A',
                    name: "데이타구조",
                    code: "CS.20006",
                    department: { id: 201, name: "전산학부" },
                    type: "전공필수",
                    limitPeople: 50,
                    numPeople: 30,
                    classDuration: 3,
                    expDuration: 0,
                    credit: 4,
                    creditAU: 0,
                    averageGrade: 0,
                    averageLoad: 0,
                    averageSpeech: 0,
                    isEnglish: true,
                    professors: [
                        {
                            id: 700,
                            name: "문은영",
                        },
                    ],
                    classes: [
                        {
                            day: 1,
                            begin: 480,
                            end: 570,
                            buildingCode: "E2",
                            placeName: "산업경영학동 1225",
                        },
                        {
                            day: 3,
                            begin: 600,
                            end: 690,
                            buildingCode: "E2",
                            placeName: "산업경영학동 1225",
                        },
                    ],
                    examTimes: [
                        {
                            day: WeekdayEnum.Tue,
                            begin: 720,
                            end: 800,
                            str: "화 12:00~14:00",
                        },
                    ],
                },
                {
                    id: 202,
                    courseId: 746,
                    classNo: 'B',
                    name: "데이타구조",
                    code: "CS.20006",
                    department: { id: 201, name: "전산학부" },
                    type: "전공필수",
                    limitPeople: 50,
                    numPeople: 30,
                    classDuration: 3,
                    expDuration: 0,
                    credit: 4,
                    creditAU: 0,
                    averageGrade: 0,
                    averageLoad: 0,
                    averageSpeech: 0,
                    isEnglish: true,
                    professors: [
                        {
                            id: 800,
                            name: "마틴 지글러",
                        },
                    ],
                    classes: [
                        {
                            day: 0,
                            begin: 570,
                            end: 660,
                            buildingCode: "N1",
                            placeName: "김병호ㆍ김삼열 IT융합 빌딩 1001",
                        },
                        {
                            day: 2,
                            begin: 690,
                            end: 780,
                            buildingCode: "N1",
                            placeName: "김병호ㆍ김삼열 IT융합 빌딩 1001",
                        },
                    ],
                    examTimes: [
                        {
                            day: WeekdayEnum.Tue,
                            begin: 720,
                            end: 800,
                            str: "화 12:00~14:00",
                        },
                    ],
                },
                {
                    id: 203,
                    courseId: 746,
                    classNo: 'C',
                    name: "데이타구조",
                    code: "CS.20006",
                    department: { id: 201, name: "전산학부" },
                    type: "전공필수",
                    limitPeople: 50,
                    numPeople: 30,
                    classDuration: 3,
                    expDuration: 0,
                    credit: 4,
                    creditAU: 0,
                    averageGrade: 0,
                    averageLoad: 0,
                    averageSpeech: 0,
                    isEnglish: true,
                    professors: [
                        {
                            id: 801,
                            name: "류석영",
                        },
                    ],
                    classes: [
                        {
                            day: 0,
                            begin: 570,
                            end: 660,
                            buildingCode: "N1",
                            placeName: "김병호ㆍ김삼열 IT융합 빌딩 1001",
                        },
                        {
                            day: 2,
                            begin: 690,
                            end: 780,
                            buildingCode: "N1",
                            placeName: "김병호ㆍ김삼열 IT융합 빌딩 1001",
                        },
                    ],
                    examTimes: [
                        {
                            day: WeekdayEnum.Tue,
                            begin: 720,
                            end: 800,
                            str: "화 12:00~14:00",
                        },
                    ],
                }
            ],
        },
    ]
}

export default exampleLectureSearchResults;