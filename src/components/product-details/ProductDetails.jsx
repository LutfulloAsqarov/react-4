import React from "react";
import "./ProductDetails.scss";

const ProductDetails = ({ data, close }) => {
    console.log(data);
    return (
        <>
            <div onClick={() => close(null)} className="product__overlay"></div>
            <div className="product__detail">
                <img className="product__img" src={data.img} alt="img" />
                <h2>{data.title}</h2>
                <img src={data.rating} alt="" />
                <p>${data.newPrice}</p>
            </div>
        </>
    );
};

export default ProductDetails;
