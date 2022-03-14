import style, { font, background } from "../styles";

const Footer = () => {
    return (
        <>
            <footer>
                <nav className="navigation">
                    <div className="note">
                        1. Apple TV+는 무료 체험 기간 종료 후 월 6,500원에 이용 가능합니다. 해지는
                        무료 체험 기간 중에도 가능합니다. 가족 공유 그룹당 하나의 멤버십 이용이
                        가능합니다. 무료 체험 혜택은 2021년 11월 4일부터 대상 기기 활성화 이후 3개월
                        안에 신청 가능합니다. 멤버십은 매월 자동 갱신되며, 해지 시 종료됩니다. 제한
                        사항 및 기타 <a href="/kr/prop/">약관</a>이 적용됩니다.
                    </div>
                    <hr />
                    <div className="categories">
                        <div className="container">
                            <ul className="shopping">
                                <li className="title">쇼핑 및 알아보기</li>
                                <li className="item">스토어</li>
                                <li className="item">Mac</li>
                                <li className="item">iPad</li>
                                <li className="item">iPhone</li>
                                <li className="item">Watch</li>
                                <li className="item">AirPods</li>
                                <li className="item">TV 및 홈</li>
                                <li className="item">Ipod touch</li>
                                <li className="item">AirTag</li>
                                <li className="item">액세서리</li>
                            </ul>
                        </div>
                        <div className="container">
                            <ul className="service">
                                <li className="title">서비스</li>
                                <li className="item">Apple Music</li>
                                <li className="item">Apple TV+</li>
                                <li className="item">Apple Arcade</li>
                                <li className="item">iCloud</li>
                                <li className="item">Apple Books</li>
                                <li className="item">Apple Podcast</li>
                                <li className="item">Apple Store</li>
                            </ul>
                            <ul className="account">
                                <li className="title">계정</li>
                                <li className="item">Apple ID 관리</li>
                                <li className="item">Apple Store 계정</li>
                                <li className="item">iCloud.com</li>
                            </ul>
                        </div>
                        <div className="container">
                            <ul className="store">
                                <li className="title">Apple Store</li>
                                <li className="item">매장 찾기</li>
                                <li className="item">Genius Bar</li>
                                <li className="item">Today at Apple</li>
                                <li className="item">Apple 캠프</li>
                                <li className="item">Apple Store 앱</li>
                                <li className="item">리퍼 및 특가 제품</li>
                                <li className="item">금융 혜택</li>
                                <li className="item">Apple Trade In</li>
                                <li className="item">주문 상태</li>
                                <li className="item">쇼핑 도움말</li>
                            </ul>
                        </div>
                        <div className="container">
                            <ul className="business">
                                <li className="title">비즈니스</li>
                                <li className="item">Apple과 비즈니스</li>
                                <li className="item">비즈니스를 위한 제품 쇼핑하기</li>
                            </ul>
                            <ul className="education">
                                <li className="title">교육</li>
                                <li className="item">Apple과 교육</li>
                                <li className="item">초중고용 제품 쇼핑하기</li>
                                <li className="item">대학 생활을 위한 제품 쇼핑하기</li>
                            </ul>
                        </div>
                        <div className="container">
                            <ul className="values">
                                <li className="title">Apple의 가치관</li>
                                <li className="item">손쉬운 사용</li>
                                <li className="item">환경</li>
                                <li className="item">개인정보 보호</li>
                                <li className="item">협력업체에 대한 책임</li>
                            </ul>
                            <ul className="information">
                                <li className="title">Apple 정보</li>
                                <li className="item">Newsroom</li>
                                <li className="item">Apple 리더십</li>
                                <li className="item">채용 안내</li>
                                <li className="item">윤리 및 규정 준수</li>
                                <li className="item">이벤트</li>
                                <li className="item">일자리 창출</li>
                                <li className="item">Apple 연락처</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </footer>
            <style jsx>{`
                footer {
                    display: flex;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    background-color: ${background.footer};
                    box-sizing: border-box;
                    padding: 1rem 8rem;
                    font-size: ${font.size.md};
                    color: ${font.color.base};
                }

                .navigation {
                    display: flex;
                    max-width: 980px;
                    flex-direction: column;
                    margin: 0 auto;
                    padding: 0 22px;
                }

                a {
                    font-weight: bold;
                }

                a:hover {
                    text-decoration: underline;
                }

                .note {
                    padding: 1em 0 2em 0;
                    border-bottom: 1px solid ${style.footer.borderColor};
                }

                .categories {
                    display: flex;
                    max-width: 980px;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    margin-right: 2rem;
                }

                .container ul {
                    list-style: none;
                    padding: 0;
                    margin-right: 3rem;
                }

                .container ul li {
                    margin-bottom: 0.8rem;
                }

                .title {
                    color: ${font.color.directoryTitle};
                    font-weight: bold;
                }
            `}</style>
        </>
    );
};

export default Footer;
