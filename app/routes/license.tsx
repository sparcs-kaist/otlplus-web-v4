import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Widget from "@/common/primitives/Widget"

const StyledWidget = styled(Widget)`
    width: 100%;
    max-width: 1000px;
    padding: 20px;
    align-items: center;
    height: 100%;
    flex: 1 0 auto;
    overflow-y: auto;
    scrollbar-width: none;
`

const MarkdownContent = styled.div`
    width: 100%;
    height: 100%;
    text-align: left;
    color: ${({ theme }) => theme.colors.Text.default};

    h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 10px;
        line-height: 1.6;
    }

    ul {
        list-style-type: disc;
        padding-left: 20px;
        margin-bottom: 10px;
    }

    li {
        margin-bottom: 5px;
    }

    a {
        color: #007bff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`

export default function License() {
    return (
        <FlexWrapper
            direction="column"
            gap={0}
            align="center"
            padding="20px"
            style={{ minHeight: "calc(100vh - 60px)" }}
        >
            <StyledWidget direction="column" gap={20}>
                <MarkdownContent>
                    <h1>이용약관</h1>

                    <h2>제1조 (목적)</h2>

                    <p>
                        이 약관은 KAIST 학부 총학생회 산하 자치단체 SPARCS 소속 OTL
                        개발팀(이하 &quot;개발팀&quot;)이 제공하는 과목사전 및 모의시간표
                        서비스 OTL(이하 &quot;서비스&quot;)의 이용과 관련하여
                        &quot;개발팀&quot;과 이용자(이하 &quot;사용자&quot;) 간의 권리,
                        의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    </p>

                    <h2>제2조 (정의)</h2>

                    <ul>
                        <li>
                            &quot;서비스&quot;란 &quot;개발팀&quot;이 제공하는 과목사전,
                            강의 후기, 모의시간표 등의 기능을 포함하는 웹 및 모바일
                            애플리케이션을 의미합니다.
                        </li>
                        <li>
                            &quot;사용자&quot;란 &quot;서비스&quot;에 접속하여
                            &quot;서비스&quot;를 이용하는 자를 의미합니다.
                        </li>
                        <li>
                            &quot;회원&quot;이란 SPARCS SSO를 통해 로그인하여
                            &quot;서비스&quot;를 이용하는 자를 의미합니다.
                        </li>
                    </ul>

                    <h2>제3조 (약관의 효력 및 변경)</h2>

                    <ul>
                        <li>
                            이 약관은 &quot;서비스&quot;를 이용하고자 하는 모든
                            &quot;사용자&quot;에게 적용됩니다.
                        </li>
                        <li>
                            &quot;개발팀&quot;은 필요한 경우 관련 법령을 위배하지 않는
                            범위 내에서 이 약관을 변경할 수 있으며, 변경된 약관은
                            &quot;서비스&quot; 내에 공지함으로써 효력을 발생합니다.
                        </li>
                        <li>
                            &quot;사용자&quot;가 변경된 약관에 동의하지 않는 경우
                            &quot;서비스&quot; 이용을 중단할 수 있으며, 변경된 약관의 효력
                            발생일 이후에도 &quot;서비스&quot;를 계속 이용하는 경우 변경된
                            약관에 동의한 것으로 간주합니다.
                        </li>
                    </ul>

                    <h2>제4조 (서비스의 제공)</h2>

                    <p>
                        &quot;개발팀&quot;은 다음과 같은 &quot;서비스&quot;를 제공합니다.
                    </p>

                    <ul>
                        <li>과목사전: 과목 정보 검색 및 조회</li>
                        <li>강의 후기: 수강한 강의에 대한 후기 작성 및 조회</li>
                        <li>모의시간표: 시간표 작성, 관리 및 공유</li>
                        <li>위시리스트: 관심 과목 저장 및 관리</li>
                        <li>기타 &quot;개발팀&quot;이 추가로 개발하여 제공하는 기능</li>
                    </ul>

                    <h2>제5조 (서비스 이용)</h2>

                    <ul>
                        <li>
                            &quot;서비스&quot;의 일부 기능은 SPARCS SSO를 통한 로그인
                            없이도 이용할 수 있습니다.
                        </li>
                        <li>
                            강의 후기 작성, 모의시간표 저장 등 일부 기능은 SPARCS SSO를
                            통한 로그인이 필요합니다.
                        </li>
                        <li>
                            &quot;서비스&quot;는 원칙적으로 연중무휴, 1일 24시간
                            제공됩니다. 다만, 시스템 점검, 증설 및 교체, 기타 운영상의
                            사유로 &quot;서비스&quot;를 일시적으로 중단할 수 있으며, 이
                            경우 사전에 공지합니다.
                        </li>
                    </ul>

                    <h2>제6조 (사용자의 의무)</h2>

                    <ul>
                        <li>
                            &quot;사용자&quot;는 다음 행위를 하여서는 안 됩니다.
                            <ul>
                                <li>
                                    타인의 정보를 도용하거나, 허위 정보를 등록하는 행위
                                </li>
                                <li>
                                    &quot;서비스&quot;의 운영을 방해하거나 안정성을 해치는
                                    행위
                                </li>
                                <li>타인의 명예를 손상시키거나 불이익을 주는 행위</li>
                                <li>
                                    욕설, 비방, 차별, 혐오, 음란 등 공공질서 및 미풍양속에
                                    반하는 내용의 후기를 작성하는 행위
                                </li>
                                <li>
                                    &quot;서비스&quot;를 이용하여 얻은 정보를
                                    &quot;개발팀&quot;의 사전 승낙 없이 복제, 유통,
                                    상업적으로 이용하는 행위
                                </li>
                                <li>기타 관련 법령에 위배되는 행위</li>
                            </ul>
                        </li>
                    </ul>

                    <h2>제7조 (후기 관련)</h2>

                    <ul>
                        <li>
                            &quot;사용자&quot;가 작성한 후기의 저작권은 해당
                            &quot;사용자&quot;에게 귀속됩니다.
                        </li>
                        <li>
                            &quot;개발팀&quot;은 &quot;서비스&quot; 운영 목적 범위 내에서
                            후기를 사용할 수 있습니다.
                        </li>
                        <li>
                            &quot;개발팀&quot;은 다음에 해당하는 후기를 사전 통보 없이
                            삭제하거나 비공개 처리할 수 있습니다.
                            <ul>
                                <li>관련 법령에 위배되는 내용</li>
                                <li>욕설, 비방, 차별, 혐오, 음란 등의 부적절한 내용</li>
                                <li>해당 강의와 무관한 내용이거나 광고성 내용</li>
                                <li>다른 &quot;사용자&quot;의 신고가 접수된 경우</li>
                            </ul>
                        </li>
                    </ul>

                    <h2>제8조 (서비스 이용 제한)</h2>

                    <ul>
                        <li>
                            &quot;개발팀&quot;은 &quot;사용자&quot;가 제6조의 의무를
                            위반한 경우, 사전 통보 없이 &quot;서비스&quot; 이용을
                            제한하거나 이용 계약을 해지할 수 있습니다.
                        </li>
                    </ul>

                    <h2>제9조 (면책조항)</h2>

                    <ul>
                        <li>
                            &quot;개발팀&quot;은 천재지변, 전쟁, 기간통신사업자의 서비스
                            중지 등 불가항력적인 사유로 &quot;서비스&quot;를 제공할 수
                            없는 경우 책임이 면제됩니다.
                        </li>
                        <li>
                            &quot;개발팀&quot;은 &quot;사용자&quot;의 귀책사유로 인한
                            &quot;서비스&quot; 이용 장애에 대하여 책임을 지지 않습니다.
                        </li>
                        <li>
                            &quot;개발팀&quot;은 &quot;사용자&quot;가 작성한 후기의
                            정확성, 신뢰성에 대하여 책임을 지지 않습니다.
                        </li>
                        <li>
                            &quot;서비스&quot;에서 제공하는 과목 정보 및 강의 정보는
                            참고용이며, &quot;개발팀&quot;은 해당 정보의 정확성을 보장하지
                            않습니다.
                        </li>
                    </ul>

                    <h2>제10조 (개인정보 보호)</h2>

                    <p>
                        &quot;개발팀&quot;은 &quot;사용자&quot;의 개인정보를 보호하기 위해
                        노력합니다. 개인정보의 수집, 이용, 제공 등에 관한 사항은 별도의{" "}
                        <a href="/privacy-policy">개인정보취급방침</a>에 따릅니다.
                    </p>

                    <h2>제11조 (저작권 및 지적재산권)</h2>

                    <ul>
                        <li>
                            &quot;서비스&quot;에 대한 저작권 및 지적재산권은
                            &quot;개발팀&quot;에 귀속됩니다.
                        </li>
                        <li>
                            &quot;사용자&quot;는 &quot;서비스&quot;를 이용하여 얻은 정보를
                            &quot;개발팀&quot;의 사전 승낙 없이 복제, 전송, 출판, 배포,
                            방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게
                            이용하게 하여서는 안 됩니다.
                        </li>
                    </ul>

                    <p>
                        {`Copyright © 2016-${new Date().getFullYear()}, SPARCS OTL Team. All rights reserved.`}
                    </p>

                    <h2>제12조 (문의)</h2>

                    <p>
                        &quot;서비스&quot; 이용과 관련한 문의사항은 아래 연락처로 문의하실
                        수 있습니다.
                    </p>

                    <ul>
                        <li>이메일: otlplus@sparcs.org</li>
                    </ul>

                    <h2>부칙</h2>

                    <p>이 약관은 2022년 2월 15일부터 시행합니다.</p>
                </MarkdownContent>
            </StyledWidget>
        </FlexWrapper>
    )
}
