import React, { useState } from "react";
import { PRODUCTS } from "../../static";
import "./Product.scss";
import ProductDetails from "../product-details/ProductDetails";

const Product = () => {
    const [product, setProduct] = useState(null);

    const products = PRODUCTS?.map((el) => (
        <div key={el.title} className="products__card">
            <div className="products__card__img">
                <img onClick={() => setProduct(el)} src={el.img} alt="img" />
            </div>
            <div className="products__card__info">
                <h3 className="products__card__title">{el.title}</h3>
                <img
                    className="products__card__rating"
                    src={el.rating}
                    alt=""
                />
                <div className="products__card__price">
                    <del>${el.oldPrice}</del>
                    <h3>${el.newPrice}</h3>
                </div>
            </div>
        </div>
    ));
    return (
        <>
            <section id="products">
                <div className="container products">
                    <div className="section__top">
                        <h5 className="subtitle">
                            Find your favourite smart watch.
                        </h5>
                        <h2 className="title">Our Latest Products</h2>
                    </div>
                    <div className="products__cards">{products}</div>
                </div>
            </section>
            {product ? (
                <ProductDetails data={product} close={setProduct} />
            ) : (
                <></>
            )}
        </>
    );
};

export default Product;
