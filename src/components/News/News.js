import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
    Mousewheel
} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import images from '../../assets/images/images';

// install Swiper modules
SwiperCore.use([Mousewheel]);


const data = [
    { id: 'item_one', title: 'B Brand', image: images.new_img02 },
    { id: 'item_two', title: 'C Brand', image: images.new_img03 },
    { id: 'item_three', title: 'D Brand', image: images.new_img04 },
    { id: 'item_four', title: 'E Brand', image: images.new_img05 },
    { id: 'item_one', title: 'B Brand', image: images.new_img02 },
    { id: 'item_two', title: 'C Brand', image: images.new_img03 },
    { id: 'item_three', title: 'D Brand', image: images.new_img04 },
    { id: 'item_four', title: 'E Brand', image: images.new_img05 },
]


const NewsItem = ({ image, title, id }) => {
    return (
        <div className="news-item" id={id}>
            <div className="news-item__title">{title}</div>
            <div className="news-item__img">
                <img src={image} alt="" />
            </div>
        </div>
    )
}


const News = () => {

    return (
        <div className="news" >
            <div className="news-heading">
                <div className="news-title">
                    Happened’s issue
                </div>
                <div className="news-desc">
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다.브랜드의 성공을 위한 첫 걸음을  내딛어보세요.비디오를 단 몇 분 만에 제작해보세요.
                </div>
                <div className="story-button button news-overlay">
                    <span>
                        See More
                    </span>
                </div>
            </div>
            <div className="news-main">
                <div className="news-flex">
                    <div className="news-left">
                        <div className="news-left__title">
                            WHPN <br />ISSUE
                        </div>
                        <div className="news-left__cta">
                            →
                        </div>
                    </div>
                    <div className="news-right">
                        <Swiper
                            slidesPerView='auto'
                            className="news-swiper"
                            loop={true}
                            mousewheel={true}
                            speed={1500}
                        >
                            {
                                data.map((item, index) => {
                                    const { title, image, id } = item;
                                    return (
                                        <SwiperSlide className="news-slide">
                                            <NewsItem image={image} title={title} key={index} id={id} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default News
