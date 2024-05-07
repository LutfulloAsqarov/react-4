import React from "react";
import { CATEGORY } from "../../static";
import "./Category.scss";

const Category = () => {
    const category = CATEGORY?.map((el) => (
        <div key={el.title} className="category__card">
            <div className="category__card__img">
                <img src={el.img} alt="img" />
            </div>
            <div className="category__card__info">
                <h2 className="category__card__title">{el.title}</h2>
                <p className="category__card__desc">{el.desc}</p>
            </div>
        </div>
    ));

    return (
        <>
            <section id="category">
                <div className="container category">
                    <div className="category__cards">{category}</div>
                </div>
            </section>
        </>
    );
};

export default Category;
