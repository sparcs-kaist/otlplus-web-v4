export interface MemberField {
    role: string
    members: {
        name: string
        nickname: string
        hover: string
    }[]
}

export interface MakersWrapper {
    mainTitle: string
    subTitle: string
    period: string
    fields: MemberField[]
}

export const MakersList: MakersWrapper[] = [
    {
        mainTitle: "LKIN",
        subTitle: "OTL의 전신",
        period: "",
        fields: [],
    },
    {
        mainTitle: "OTL",
        subTitle: "모의시간표",
        period: "2009",
        fields: [
            {
                role: "Developer",
                members: [
                    { name: "김민우", nickname: "julingks", hover: "" },
                    { name: "김종균", nickname: "truth", hover: "" },
                    { name: "김준기", nickname: "daybreaker", hover: "" },
                    { name: "유충국", nickname: "majja", hover: "" },
                ],
            },
            {
                role: "Special Thanks To",
                members: [
                    { name: "강철", nickname: "cancho", hover: "" },
                    { name: "안병욱", nickname: "elaborate", hover: "" },
                ],
            },
        ],
    },
    {
        mainTitle: "OTL",
        subTitle: "추가개발",
        period: "2010-2012",
        fields: [
            {
                role: "PM",
                members: [
                    { name: "배성경", nickname: "imai", hover: "" },
                    { name: "김재겸", nickname: "noname", hover: "" },
                ],
            },
            {
                role: "Developer",
                members: [
                    { name: "김재겸", nickname: "noname", hover: "" },
                    { name: "박일우", nickname: "overmania", hover: "" },
                    { name: "배성경", nickname: "imai", hover: "" },
                    { name: "심규민", nickname: "boolgom", hover: "" },
                    { name: "안재만", nickname: "kuss", hover: "" },
                    { name: "유민정", nickname: "alphamin", hover: "" },
                    { name: "이윤석", nickname: "gangok", hover: "" },
                    { name: "정재성", nickname: "battery", hover: "" },
                    { name: "정종혁", nickname: "sunguard", hover: "" },
                    { name: "정창제", nickname: "rodumani", hover: "" },
                    { name: "조유정", nickname: "mayflower", hover: "" },
                    { name: "진태진", nickname: "dynaman", hover: "" },
                ],
            },
        ],
    },
    {
        mainTitle: "OTL",
        subTitle: "과목사전",
        period: "2012-2013",
        fields: [
            {
                role: "PM",
                members: [
                    { name: "유민정", nickname: "alphamin", hover: "" },
                    { name: "마재의", nickname: "chaos", hover: "" },
                ],
            },
            {
                role: "Designer",
                members: [{ name: "박지향", nickname: "seal", hover: "" }],
            },
            {
                role: "Developer",
                members: [
                    { name: "김정민", nickname: "coffee", hover: "" },
                    { name: "마재의", nickname: "chaos", hover: "" },
                    { name: "박중언", nickname: "yasik", hover: "" },
                    { name: "박지혁", nickname: "naldo", hover: "" },
                    { name: "유민정", nickname: "alphamin", hover: "" },
                    { name: "윤필립", nickname: "pillibi", hover: "" },
                    { name: "이태현", nickname: "whitegold", hover: "" },
                    { name: "정종혁", nickname: "sunguard", hover: "" },
                    { name: "정창제", nickname: "rodumani", hover: "" },
                    { name: "채종욱", nickname: "aon", hover: "" },
                ],
            },
        ],
    },
    {
        mainTitle: "OTL PLUS",
        subTitle: "과목사전",
        period: "2015.09 ~ 2016.06",
        fields: [
            {
                role: "PM",
                members: [
                    { name: "황태현", nickname: "mandu", hover: "" },
                    { name: "서동민", nickname: "hood", hover: "" },
                ],
            },
            {
                role: "Designer",
                members: [{ name: "김찬욱", nickname: "daedoo", hover: "" }],
            },
            {
                role: "Developer",
                members: [
                    { name: "고지훈", nickname: "mango", hover: "" },
                    { name: "김강인", nickname: "raon", hover: "" },
                    { name: "김재성", nickname: "stein", hover: "" },
                    { name: "서동민", nickname: "hood", hover: "" },
                    { name: "이강원", nickname: "potato", hover: "" },
                    { name: "조성원", nickname: "samjo", hover: "" },
                    { name: "최정운", nickname: "coearth", hover: "" },
                    { name: "한승현", nickname: "zealot", hover: "" },
                    { name: "황태현", nickname: "mandu", hover: "" },
                ],
            },
        ],
    },
    {
        mainTitle: "OTL PLUS",
        subTitle: "모의시간표",
        period: "2016.09 ~ 2017.12",
        fields: [
            {
                role: "PM",
                members: [
                    { name: "김재성", nickname: "stein", hover: "" },
                    { name: "한승현", nickname: "zealot", hover: "" },
                ],
            },
            {
                role: "Designer",
                members: [{ name: "한승현", nickname: "zealot", hover: "" }],
            },
            {
                role: "Developer",
                members: [
                    { name: "고지훈", nickname: "mango", hover: "" },
                    { name: "김재성", nickname: "stein", hover: "" },
                    { name: "김태준", nickname: "nobrain", hover: "" },
                    { name: "서덕담", nickname: "didee", hover: "" },
                    { name: "오종훈", nickname: "leejeok", hover: "" },
                    { name: "이강원", nickname: "potato", hover: "" },
                    { name: "조형준", nickname: "george", hover: "" },
                    { name: "최정운", nickname: "coearth", hover: "" },
                    { name: "한승현", nickname: "zealot", hover: "" },
                ],
            },
        ],
    },
    {
        mainTitle: "OTL PLUS",
        subTitle: "모바일 & 리뉴얼",
        period: "2018.01 ~ 2020.01",
        fields: [
            {
                role: "PM",
                members: [{ name: "한승현", nickname: "zealot", hover: "" }],
            },
            {
                role: "Designer",
                members: [{ name: "한승현", nickname: "zealot", hover: "" }],
            },
            {
                role: "Developer",
                members: [
                    { name: "강찬규", nickname: "appleseed", hover: "" },
                    { name: "강현우", nickname: "leesia", hover: "" },
                    { name: "고지훈", nickname: "mango", hover: "" },
                    { name: "김경서", nickname: "moss", hover: "" },
                    { name: "마재의", nickname: "chaos", hover: "" },
                    { name: "문재호", nickname: "james", hover: "" },
                    { name: "박수호", nickname: "etranger", hover: "" },
                    { name: "박현우", nickname: "winrobrine", hover: "" },
                    { name: "서혜인", nickname: "bogo", hover: "" },
                    { name: "손주희", nickname: "juheeuu", hover: "" },
                    { name: "엄성하", nickname: "semi", hover: "" },
                    { name: "이선민", nickname: "allkinds", hover: "" },
                    { name: "이세연", nickname: "cheshire", hover: "" },
                    { name: "이정연", nickname: "parang", hover: "" },
                    { name: "이주영", nickname: "null", hover: "" },
                    { name: "지수환", nickname: "swan", hover: "" },
                    { name: "최윤서", nickname: "youns", hover: "" },
                    { name: "하현정", nickname: "yolo", hover: "" },
                    { name: "허미나", nickname: "hershey", hover: "" },
                    { name: "황재영", nickname: "akais", hover: "" },
                    { name: "한승현", nickname: "zealot", hover: "" },
                    { name: "한우현", nickname: "tink", hover: "" },
                ],
            },
        ],
    },
    {
        mainTitle: "OTL APP",
        subTitle: "",
        period: "2020.02 ~",
        fields: [
            {
                role: "TF Lead",
                members: [
                    { name: "박현우", nickname: "winrobrine", hover: "" },
                    { name: "오승빈", nickname: "platypus", hover: "" },
                ],
            },
            {
                role: "Designer",
                members: [{ name: "조유민", nickname: "yumyum", hover: "" }],
            },
            {
                role: "Developer",
                members: [
                    { name: "오승빈", nickname: "platypus", hover: "" },
                    { name: "문동우", nickname: "star", hover: "" },
                    { name: "정성엽", nickname: "lobe", hover: "" },
                ],
            },
        ],
    },
    {
        mainTitle: "OTL PLUS",
        subTitle: "졸업플래너",
        period: "2021.09 ~ 2023.05",
        fields: [
            {
                role: "PM",
                members: [{ name: "조유민", nickname: "yumyum", hover: "" }],
            },
            {
                role: "TF Lead",
                members: [{ name: "한승현", nickname: "zealot", hover: "" }],
            },
            {
                role: "Designer",
                members: [
                    { name: "양성현", nickname: "jade", hover: "" },
                    { name: "이혜원", nickname: "chillo", hover: "" },
                    { name: "한승현", nickname: "zealot", hover: "" },
                ],
            },
            {
                role: "Developer",
                members: [
                    { name: "김동혁", nickname: "kkoma", hover: "" },
                    { name: "김민희", nickname: "mini", hover: "" },
                    { name: "김재성", nickname: "stein", hover: "" },
                    { name: "오승빈", nickname: "platypus", hover: "" },
                    { name: "이지윤", nickname: "dora", hover: "" },
                    { name: "이진우", nickname: "jaydub", hover: "" },
                    { name: "한승현", nickname: "zealot", hover: "" },
                    { name: "홍은기", nickname: "stone", hover: "" },
                    { name: "황제욱", nickname: "jeuk", hover: "" },
                ],
            },
        ],
    },
    {
        mainTitle: "OTL PLUS",
        subTitle: "백엔드 마이그레이션",
        period: "2023.03 ~ 2024.09",
        fields: [
            {
                role: "Developer",
                members: [
                    { name: "조유민", nickname: "yumyum", hover: "" },
                    { name: "오승빈", nickname: "platypus", hover: "" },
                    { name: "김희진", nickname: "gimme", hover: "" },
                    { name: "권혁태", nickname: "larry", hover: "" },
                    { name: "이동재", nickname: "duncan", hover: "" },
                    { name: "황제욱", nickname: "jeuk", hover: "" },
                    { name: "양지웅", nickname: "tom", hover: "" },
                    { name: "김기영", nickname: "ddungiii", hover: "" },
                    { name: "박병찬", nickname: "chan", hover: "" },
                    { name: "이동엽", nickname: "doxylee", hover: "" },
                    { name: "박지호", nickname: "night", hover: "" },
                    { name: "주영미", nickname: "ava", hover: "" },
                    { name: "정동윤", nickname: "david", hover: "" },
                    { name: "남지현", nickname: "april", hover: "" },
                    { name: "문동우", nickname: "star", hover: "" },
                    { name: "권순규", nickname: "soongyu", hover: "" },
                    { name: "양채빈", nickname: "yatcha", hover: "" },
                ],
            },
        ],
    },
    {
        mainTitle: "OTL PLUS",
        subTitle: "신규 기능 및 프런트 리디자인",
        period: "2025.03 ~",
        fields: [
            {
                role: "PM",
                members: [
                    { name: "박지호", nickname: "night", hover: "" },
                    { name: "임가은", nickname: "casio", hover: "" },
                ],
            },
            {
                role: "Designer",
                members: [
                    { name: "김희진", nickname: "gimme", hover: "" },
                    { name: "서인성", nickname: "cheese", hover: "디자인 나와라 뚝딱" },
                ],
            },
            {
                role: "Developer",
                members: [
                    { name: "손성민", nickname: "happycastle", hover: "프론트 리드" },
                    { name: "임가은", nickname: "casio", hover: "" },
                    { name: "최우석", nickname: "oosoi", hover: "" },
                    { name: "이민욱", nickname: "ryan", hover: "" },
                    { name: "강재환", nickname: "yaong", hover: "여기에 쓰면 돼요?" },
                    {
                        name: "박현우",
                        nickname: "namu",
                        hover: "리디자인 많이 사랑해주세요!",
                    },
                    {
                        name: "권혁태",
                        nickname: "larry",
                        hover: "서버 리드 2023-03 ~ 2025.12",
                    },
                    { name: "권혁원", nickname: "gb", hover: "" },
                    { name: "박종석", nickname: "jk", hover: "OTL 화이팅~" },
                    { name: "배지훈", nickname: "badge", hover: "" },
                    { name: "박진웅", nickname: "jin", hover: "" },
                    { name: "박성빈", nickname: "ellen", hover: "OTL 백엔드 화이팅!!" },
                    { name: "김지혁", nickname: "kevin", hover: "열심히 하겠습니다~" },
                    {
                        name: "박승범",
                        nickname: "killerwhale",
                        hover: "커스텀 블록 남기고 갑니다",
                    },
                    {
                        name: "방승현",
                        nickname: "cyber",
                        hover: "띠링띠링 알림 나갑니다",
                    },
                    {
                        name: "이동엽",
                        nickname: "doxylee",
                        hover: "학사 DB 동기화 500배 빠르게 만든 사람",
                    },
                    {
                        name: "김현민",
                        nickname: "scotch",
                        hover: "21의라스트댄스",
                    },
                ],
            },
        ],
    },
    {
        mainTitle: "Sysops & Tech Leads",
        subTitle: "",
        period: "",
        fields: [
            {
                role: "LKIN",
                members: [
                    { name: "서창민", nickname: "reno", hover: "" },
                    { name: "이근홍", nickname: "leeopop", hover: "" },
                ],
            },
            {
                role: "OTL",
                members: [
                    { name: "배성경", nickname: "imai", hover: "" },
                    { name: "김재겸", nickname: "noname", hover: "" },
                    { name: "유민정", nickname: "alphamin", hover: "" },
                    { name: "마재의", nickname: "chaos", hover: "" },
                    { name: "황태현", nickname: "mandu", hover: "" },
                    { name: "서동민", nickname: "hood", hover: "" },
                    { name: "김재성", nickname: "stein", hover: "" },
                    { name: "한승현", nickname: "zealot", hover: "" },
                ],
            },
            {
                role: "OTL Plus",
                members: [
                    { name: "김재성", nickname: "stein", hover: "" },
                    { name: "한승현", nickname: "zealot", hover: "" },
                    { name: "오승빈", nickname: "platypus", hover: "" },
                    { name: "박지호", nickname: "night", hover: "" },
                    { name: "손성민", nickname: "happycastle", hover: "" },
                    { name: "권혁태", nickname: "larry", hover: "" },
                ],
            },
        ],
    },
]
