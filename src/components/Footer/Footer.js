import React from 'react'
import images from '../../assets/images/images';

const data = [
    {
        title: "about us", menu: [
            { item: "회사 소개", },
            { item: "인재 채용" },
            { item: "상시 할인 혜택" },
        ]
    },
    {
        title: "my order", menu: [
            { item: "내 주문" },
            { item: "주문 배송" },
            { item: "취소 / 교환 / 반품 내역" },
            { item: "상품 리뷰 내역" },
            { item: "증빙 서류 발급" },
        ]
    },
    {
        title: "my account", menu: [
            { item: "회원 정보 수정" },
            { item: "회원 등급" },
            { item: "마일리지 현황" },
            { item: "쿠폰" },
        ]
    },
    {
        title: "help", menu: [
            { item: "1 : 1 상담 내역" },
            { item: "상품 Q & A 내역" },
            { item: "공지 사항" },
            { item: "자주하는 질문" },
            { item: "고객의 소리" },
        ]
    }
]

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer-flex">
                        <div className="footer-logo">
                            <div className="footer-heading">
                                what happend
                            </div>
                            <div className="footer-desc">
                                [공지] 개인 정보 처리 방침 변경 사전 안내 <br />
                                [공지] 29CM 강남 스토어 영업 종료<br />
                                [공지] 개인 정보 처리 방침 변경 사전 안내<br />
                                [공지] iOS 10 이하 버전 지원 중단 안내<br />
                                [공지] 개인 정보 처리 방침 변경 사전 안내
                            </div>
                        </div>
                        <div className="footer-list">
                            {
                                data.map((item, index) => {
                                    const { title, menu } = item;
                                    return (
                                        <div className="footer-item">
                                            <div className="footer-heading" key={item}>
                                                {title}
                                            </div>
                                            <div className="footer-desc">
                                                {
                                                    menu.map((el, idx) => {
                                                        const { item } = el;
                                                        return (
                                                            <div>
                                                                <a href="" className="footer-link">{item}</a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="footer-coppy">
                    <div className="coppy-flex">
                        <div className="coppy-content">
                            <div className="coppy-symbol">
                                © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                            </div>
                            <div className="coppy-fax">
                                서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
                            </div>
                        </div>
                        <div className="coppy-social">
                            <div className="coppy-icon">
                                <img src={images.social1} alt="" />
                            </div>
                            <div className="coppy-icon">
                                <img src={images.social2} alt="" />
                            </div>
                            <div className="coppy-icon">
                                <img src={images.social3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
