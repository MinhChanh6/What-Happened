import React from 'react'
import images from '../../assets/images/images';




const BestProduct = () => {

    const dataProduct = [
        {
            number: images.one,
            productImg: images.productOne,
            label: "How to create mobile-optimized",
            text: "go"
        },
        {
            number: images.two,
            productImg: images.productTwo,
            label: "How to create mobile-optimized",
            text: "go"
        },
        {
            number: images.three,
            productImg: images.productThree,
            label: "How to create mobile-optimized",
            text: "go"

        },
    ]

    return (
        <div className="product" >
            <div>
                <div className="product-title">
                    <div className="container">
                        <div className="product-heading">
                            best product
                        </div>
                        <div className="product-desc">
                            How to create mobile-optimized videos in minutes. Not a designer,
                            every team makes a lot of videos Can be trimmed. Take the first
                        </div>
                    </div>
                </div>
                <div className="product-content" style={{
                    backgroundImage: `url(${images.bestproduct_pg2})`,
                }}>
                    <div className="container">
                        <div className="product-list">
                            {
                                dataProduct.map((item, index) => {
                                    const { number, productImg, text, label } = item;
                                    return (
                                        <div className="product-item" key={index}>
                                            <img src={number} alt="" className="product-number" />
                                            <img src={productImg} alt="" className="product-img" />
                                            <div className="product-bottom">
                                                <div className="product-button">
                                                    <div className="product-label">{label}</div>
                                                    <div className="product-text">
                                                        {text}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestProduct
