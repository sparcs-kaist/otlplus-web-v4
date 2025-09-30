export interface MemberField {
  role: string
  members: {
    name: string
    nickname: string
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
    mainTitle: "OTL",
    subTitle: "모의시간표",
    period: "2009",
    fields: [
      {
        role: "Developer",
        members: [
          { name: "김민우", nickname: "julingks" },
          { name: "김종균", nickname: "truth" },
          { name: "김준기", nickname: "daybreaker" },
          { name: "유충국", nickname: "majja" },
        ],
      },
      {
        role: "Special Thanks To",
        members: [
          { name: "강철", nickname: "cancho" },
          { name: "안병욱", nickname: "elaborate" },
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
          { name: "배성경", nickname: "imai" },
          { name: "김재겸", nickname: "noname" },
        ],
      },
      {
        role: "Developer",
        members: [
          { name: "김재겸", nickname: "noname" },
          { name: "박일우", nickname: "overmania" },
          { name: "배성경", nickname: "imai" },
          { name: "심규민", nickname: "boolgom" },
          { name: "안재만", nickname: "kuss" },
          { name: "유민정", nickname: "alphamin" },
          { name: "이윤석", nickname: "gangok" },
          { name: "정재성", nickname: "battery" },
          { name: "정종혁", nickname: "sunguard" },
          { name: "정창제", nickname: "rodumani" },
          { name: "조유정", nickname: "mayflower" },
          { name: "진태진", nickname: "dynaman" },
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
          { name: "유민정", nickname: "alphamin" },
          { name: "마재의", nickname: "chaos" },
        ],
      },
      {
        role: "Designer",
        members: [{ name: "박지향", nickname: "seal" }],
      },
      {
        role: "Developer",
        members: [
          { name: "김정민", nickname: "coffee" },
          { name: "마재의", nickname: "chaos" },
          { name: "박중언", nickname: "yasik" },
          { name: "박지혁", nickname: "naldo" },
          { name: "유민정", nickname: "alphamin" },
          { name: "윤필립", nickname: "pillibi" },
          { name: "이태현", nickname: "whitegold" },
          { name: "정종혁", nickname: "sunguard" },
          { name: "정창제", nickname: "rodumani" },
          { name: "채종욱", nickname: "aon" },
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
          { name: "황태현", nickname: "mandu" },
          { name: "서동민", nickname: "hood" },
        ],
      },
      {
        role: "Designer",
        members: [{ name: "김찬욱", nickname: "daedoo" }],
      },
      {
        role: "Developer",
        members: [
          { name: "고지훈", nickname: "mango" },
          { name: "김강인", nickname: "raon" },
          { name: "김재성", nickname: "stein" },
          { name: "서동민", nickname: "hood" },
          { name: "이강원", nickname: "potato" },
          { name: "조성원", nickname: "samjo" },
          { name: "최정운", nickname: "coearth" },
          { name: "한승현", nickname: "zealot" },
          { name: "황태현", nickname: "mandu" },
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
          { name: "김재성", nickname: "stein" },
          { name: "한승현", nickname: "zealot" },
        ],
      },
      {
        role: "Designer",
        members: [{ name: "한승현", nickname: "zealot" }],
      },
      {
        role: "Developer",
        members: [
          { name: "고지훈", nickname: "mango" },
          { name: "김재성", nickname: "stein" },
          { name: "김태준", nickname: "nobrain" },
          { name: "서덕담", nickname: "didee" },
          { name: "오종훈", nickname: "leejeok" },
          { name: "이강원", nickname: "potato" },
          { name: "조형준", nickname: "george" },
          { name: "최정운", nickname: "coearth" },
          { name: "한승현", nickname: "zealot" },
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
        members: [{ name: "한승현", nickname: "zealot" }],
      },
      {
        role: "Designer",
        members: [{ name: "한승현", nickname: "zealot" }],
      },
      {
        role: "Developer",
        members: [
          { name: "강찬규", nickname: "appleseed" },
          { name: "강현우", nickname: "leesia" },
          { name: "고지훈", nickname: "mango" },
          { name: "김경서", nickname: "moss" },
          { name: "마재의", nickname: "chaos" },
          { name: "문재호", nickname: "james" },
          { name: "박수호", nickname: "etranger" },
          { name: "박현우", nickname: "winrobrine" },
          { name: "서혜인", nickname: "bogo" },
          { name: "손주희", nickname: "juheeuu" },
          { name: "엄성하", nickname: "semi" },
          { name: "이선민", nickname: "allkinds" },
          { name: "이세연", nickname: "cheshire" },
          { name: "이정연", nickname: "parang" },
          { name: "이주영", nickname: "null" },
          { name: "지수환", nickname: "swan" },
          { name: "최윤서", nickname: "youns" },
          { name: "하현정", nickname: "yolo" },
          { name: "허미나", nickname: "hershey" },
          { name: "황재영", nickname: "akais" },
          { name: "한승현", nickname: "zealot" },
          { name: "한우현", nickname: "tink" },
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
          { name: "박현우", nickname: "winrobrine" },
          { name: "오승빈", nickname: "platypus" },
        ],
      },
      {
        role: "Designer",
        members: [{ name: "조유민", nickname: "yumyum" }],
      },
      {
        role: "Developer",
        members: [
          { name: "오승빈", nickname: "platypus" },
          { name: "문동우", nickname: "star" },
          { name: "정성엽", nickname: "lobe" },
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
        members: [{ name: "조유민", nickname: "yumyum" }],
      },
      {
        role: "TF Lead",
        members: [{ name: "한승현", nickname: "zealot" }],
      },
      {
        role: "Designer",
        members: [
          { name: "양성현", nickname: "jade" },
          { name: "이혜원", nickname: "chillo" },
          { name: "한승현", nickname: "zealot" },
        ],
      },
      {
        role: "Developer",
        members: [
          { name: "김동혁", nickname: "kkoma" },
          { name: "김민희", nickname: "mini" },
          { name: "김재성", nickname: "stein" },
          { name: "오승빈", nickname: "platypus" },
          { name: "이지윤", nickname: "dora" },
          { name: "이진우", nickname: "jaydub" },
          { name: "한승현", nickname: "zealot" },
          { name: "홍은기", nickname: "stone" },
          { name: "황제욱", nickname: "jeuk" },
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
          { name: "조유민", nickname: "yumyum" },
          { name: "오승빈", nickname: "platypus" },
          { name: "김희진", nickname: "gimme" },
          { name: "권혁태", nickname: "larry" },
          { name: "이동재", nickname: "duncan" },
          { name: "황제욱", nickname: "jeuk" },
          { name: "양지웅", nickname: "tom" },
          { name: "김기영", nickname: "ddungiii" },
          { name: "박병찬", nickname: "chan" },
          { name: "이동엽", nickname: "doxylee" },
          { name: "박지호", nickname: "night" },
          { name: "주영미", nickname: "ava" },
          { name: "정동윤", nickname: "david" },
          { name: "남지현", nickname: "april" },
          { name: "문동우", nickname: "star" },
          { name: "권순규", nickname: "soongyu" },
          { name: "양채빈", nickname: "yatcha" },
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
          { name: "박지호", nickname: "night" },
          { name: "임가은", nickname: "casio" },
        ],
      },
      {
        role: "Daily TF",
        members: [
          { name: "권혁원", nickname: "gb" },
          { name: "임가은", nickname: "casio" },
          { name: "박승범", nickname: "killerwhale" },
        ],
      },
      {
        role: "Lab TF",
        members: [{ name: "권혁태", nickname: "larry" }],
      },
      {
        role: "Designer",
        members: [
          { name: "김희진", nickname: "gimme" },
          { name: "서인성", nickname: "cheese" },
        ],
      },
      {
        role: "Developer",
        members: [
          { name: "손성민", nickname: "happycastle" },
          { name: "임가은", nickname: "casio" },
          { name: "최우석", nickname: "oosoi" },
          { name: "이민욱", nickname: "ryan" },
          { name: "강재환", nickname: "yaong" },
          { name: "박현우", nickname: "namu" },
          { name: "권혁태", nickname: "larry" },
          { name: "권혁원", nickname: "gb" },
          { name: "박종석", nickname: "jk" },
          { name: "배지훈", nickname: "badge" },
          { name: "박진웅", nickname: "jin" },
          { name: "박성빈", nickname: "ellen" },
          { name: "김지혁", nickname: "kevin" },
          { name: "박승범", nickname: "killerwhale" },
        ],
      },
    ],
  },
]
