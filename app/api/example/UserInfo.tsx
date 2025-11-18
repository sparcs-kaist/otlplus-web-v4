import type { GETUserInfoResponse } from "@/api/users/info"

const exampleUserInfo: GETUserInfoResponse = {
    id: 0,
    name: "Sample User",
    mail: "test@kaist.ac.kr",
    studentNumber: 20123456,
    degree: "학사과정",
    majorDepartments: [
        {
            id: 9945,
            name: "전산학부",
        },
    ],
    interestedDepartments: [
        {
            id: 9945,
            name: "전산학부",
        },
        {
            id: 833,
            name: "수리과학과",
        },
    ],
}

export default exampleUserInfo
