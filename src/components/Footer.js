import Link from "next/link";
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
                                <li className="item">
                                    <Link href="/store">스토어</Link>
                                </li>
                                <li className="item">
                                    <Link href="/mac">Mac</Link>
                                </li>
                                <li className="item">
                                    <Link href="/ipad">iPad</Link>
                                </li>
                                <li className="item">
                                    <Link href="/iphone">iPhone</Link>
                                </li>
                                <li className="item">
                                    <Link href="/watch">Watch</Link>
                                </li>
                                <li className="item">
                                    <Link href="/airpods">AirPods</Link>
                                </li>
                                <li className="item">
                                    <Link href="/tv-home">TV 및 홈</Link>
                                </li>
                                <li className="item">
                                    <Link href="/ipod-touch">Ipod touch</Link>
                                </li>
                                <li className="item">
                                    <Link href="/airtag">AirTag</Link>
                                </li>
                                <li className="item">
                                    <Link href="/accessories">액세서리</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="container">
                            <ul className="service">
                                <li className="title">서비스</li>
                                <li className="item">
                                    <Link href="/apple-music">Apple Music</Link>
                                </li>
                                <li className="item">
                                    <Link href="/apple-tv-plus">Apple TV+</Link>
                                </li>
                                <li className="item">
                                    <Link href="/apple-arcade">Apple Arcade</Link>
                                </li>
                                <li className="item">
                                    <Link href="/icloud">iCloud</Link>
                                </li>
                                <li className="item">
                                    <Link href="/apple-books">Apple Books</Link>
                                </li>
                                <li className="item">
                                    <Link href="/apple-podcasts">Apple Podcast</Link>
                                </li>
                                <li className="item">
                                    <Link href="/app-store">Apple Store</Link>
                                </li>
                            </ul>
                            <ul className="account">
                                <li className="title">계정</li>
                                <li className="item">
                                    <Link href="/">Apple ID 관리</Link>
                                </li>
                                <li className="item">
                                    <Link href="/">Apple Store 계정</Link>
                                </li>
                                <li className="item">
                                    <Link href="/">iCloud.com</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="container">
                            <ul className="store">
                                <li className="title">Apple Store</li>
                                <li className="item">
                                    <Link href="/retail">매장 찾기</Link>
                                </li>
                                <li className="item">
                                    <Link href="/retail/geniusbar">Genius Bar</Link>
                                </li>
                                <li className="item">
                                    <Link href="/today">Today at Apple</Link>
                                </li>
                                <li className="item">
                                    <Link href="/today/camp">Apple 캠프</Link>
                                </li>
                                <li className="item">
                                    <Link href="/">Apple Store 앱</Link>
                                </li>
                                <li className="item">
                                    <Link href="/shop/refurbished">리퍼 및 특가 제품</Link>
                                </li>
                                <li className="item">
                                    <Link href="/shop/browse/financing">금융 혜택</Link>
                                </li>
                                <li className="item">
                                    <Link href="/trade-in">Apple Trade In</Link>
                                </li>
                                <li className="item">
                                    <Link href="/">주문 상태</Link>
                                </li>
                                <li className="item">
                                    <Link href="/shop/help">쇼핑 도움말</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="container">
                            <ul className="business">
                                <li className="title">비즈니스</li>
                                <li className="item">
                                    <Link href="/business">Apple과 비즈니스</Link>
                                </li>
                                <li className="item">
                                    <Link href="/retail/business">
                                        비즈니스를 위한 제품 쇼핑하기
                                    </Link>
                                </li>
                            </ul>
                            <ul className="education">
                                <li className="title">교육</li>
                                <li className="item">
                                    <Link href="/education">Apple과 교육</Link>
                                </li>
                                <li className="item">
                                    <Link href="/education/k12/how-to-buy">
                                        초중고용 제품 쇼핑하기
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link href="/shop/education-pricing">
                                        대학 생활을 위한 제품 쇼핑하기
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="container">
                            <ul className="values">
                                <li className="title">Apple의 가치관</li>
                                <li className="item">
                                    <Link href="/accessibility">손쉬운 사용</Link>
                                </li>
                                <li className="item">
                                    <Link href="/environment">환경</Link>
                                </li>
                                <li className="item">
                                    <Link href="/privacy">개인정보 보호</Link>
                                </li>
                                <li className="item">
                                    <Link href="/supplier-responsibility">
                                        협력업체에 대한 책임
                                    </Link>
                                </li>
                            </ul>
                            <ul className="information">
                                <li className="title">Apple 정보</li>
                                <li className="item">
                                    <Link href="/newsroom">Newsroom</Link>
                                </li>
                                <li className="item">
                                    <Link href="/leadership">Apple 리더십</Link>
                                </li>
                                <li className="item">
                                    <Link href="/careers">채용 안내</Link>
                                </li>
                                <li className="item">
                                    <Link href="/compliance">윤리 및 규정 준수</Link>
                                </li>
                                <li className="item">
                                    <Link href="/apple-events">이벤트</Link>
                                </li>
                                <li className="item">
                                    <Link href="/job-creation">일자리 창출</Link>
                                </li>
                                <li className="item">
                                    <Link href="/contact">Apple 연락처</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="note">
                        다양한 쇼핑 방법:{" "}
                        <Link href="/retail">
                            <a className="blue">Apple Store를 방문</a>
                        </Link>
                        하거나,{" "}
                        <Link href="/locate">
                            <a className="blue">리셀러</a>
                        </Link>
                        를 찾아보거나, 080-330-8877번으로 전화하세요.
                    </div>
                    <div className="legal">
                        <div className="copyrights">
                            <div className="copyright">
                                Copyright © 2022 Apple Inc. 모든 권리 보유.
                            </div>
                            <div className="sites">
                                <Link href="/legal/privacy">
                                    <a>개인정보 처리방침 |</a>
                                </Link>
                                <Link href="/legal/internet-services/terms/site">
                                    <a> 웹 사이트 이용 약관 |</a>
                                </Link>
                                <Link href="/shop/browse/open/salespolicies">
                                    <a> 판매 및 환불 |</a>
                                </Link>
                                <Link href="/legal">
                                    <a> 법적 고지 |</a>
                                </Link>
                                <Link href="sitemap">
                                    <a> 사이트 
                                맵</a>
                                </Link>
                            </div>
                            <div className="country">대한민국</div>
                        </div>
                    </div>
                    <p className="location">
                        <span>사업자등록번호 : 120-81-84429 | </span>
                        <span>통신판매업신고번호 : 제 2011-서울강남-00810호 | </span>
                        <span>대표이사 : PETER DENWOOD | </span>
                        <span>주소 : 서울 특별시 강남구 영동대로 517 | </span>
                        <span>대표전화 : 02-6712-6700 | </span>
                        <span>팩스 : 02-6928-0000</span>
                    </p>
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
                    padding: 1rem 0;
                    font-size: ${font.size.md};
                    color: ${font.color.base};
                }

                .navigation {
                    display: flex;
                    max-width: 980px;
                    flex-direction: column;
                    margin: 0 auto;
                    padding: 0;
                }

                a:hover,
                .item:hover,
                .legal > a {
                    text-decoration: underline;
                }

                .note {
                    width: 100%;
                    padding: 1em 0 1em 0;
                    border-bottom: 1px solid ${style.footer.borderColor};
                }

                .note > .blue {
                    color: ${font.color.href};
                }

                .categories {
                    position: relative;
                    display: flex;
                    max-width: 980px;
                }

                .container {
                    display: flex;
                    wrap-space: nowrap;
                    flex-direction: column;
                    margin-right: 3rem;
                    white-space: nowrap;
                }

                .container ul {
                    list-style: none;
                    padding: 0;
                    margin-right: 3rem;
                }

                .container ul li {
                    color: ${font.color.link};
                    margin-bottom: 0.8rem;
                }

                .container ul .title {
                    color: ${font.color.directoryTitle};
                    font-weight: bold;
                    cursor: default;
                }

                .legal .copyrights {
                    position: relative;
                    display: flex;
                    width: 100%;
                    margin: 1rem auto;
                }

                .copyrights .copyright {
                    position: absolute;
                    left: 0;
                }

                .copyrights .sites {
                    color: ${font.color.link};
                    margin: 0 auto;
                }

                .copyrights .country {
                    position: absolute;
                    right: 0;
                }

                .location {
                    font-size: 10px;
                    color: #999;
                }

                .location span {
                    font-size: 1em;
                    white-space: nowrap;
                }
            `}</style>
        </>
    );
};

export default Footer;
