import React from 'react'
import images from '../../assets/images/images';


const productList = [
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_One,
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Two,
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Three,
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Four
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Five,
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Six,
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Seven
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Eight
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.productOne,
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.productTwo,
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Nine
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Ten
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Eleven
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Twelve
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Thirteen
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Fourteen
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Fifteen
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Sixteen
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Seventeen
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Eighteen
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Nineteen
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_Tweenty
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_TweentyOne
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_TweentyTwo
    },
    {
        title: '[What happend] How to create',
        price: '2,500 won',
        icon: images.heart_icon,
        number: '236',
        product: images.ProductList_TweentyThree
    },
]

const ProductList = () => {
    return (
        <div className="container">
            <div className="productlist">
                <div className="productlist-flex">
                    {
                        productList.map((item, index) => {
                            const { title, price, icon, product, number } = item
                            return (
                                <div className="productlist-item" key={index}>
                                    <div className="productlist-img">
                                        <img src={product} alt="" />
                                    </div>
                                    <div className="productlist-content">
                                        <div className="productlist-title">
                                            {title}
                                        </div>
                                        <div className="productlist-desc">
                                            <div className="productlist-price">
                                                {price}
                                            </div>
                                            <div className="productlist-review">
                                                <img src={icon} alt="" className="productlist-start" />
                                                <span className="productlist-number">
                                                    {number}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="productlist-button button productlist-overlay">
                    <span>
                        See More
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductList
