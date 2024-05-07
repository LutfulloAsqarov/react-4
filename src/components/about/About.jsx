import React from "react";
import img1 from "../../assets/images/about/img1.png";
import rating from "../../assets/images/product/rate.png";
import "./About.scss";

const About = () => {
    return (
        <section id="about">
            <div className="container about">
                <div className="section__top">
                    <h5 className="subtitle">
                        Here are our some of the best clients.
                    </h5>
                    <h2 className="title">What People Say About Us</h2>
                </div>
                <div className="about__cards">
                    <div className="about__card">
                        <img src={img1} alt="" />
                        <div className="about__card__info">
                            <h3 className="about__card__title">Hamza Faizi</h3>
                            <p className="about__card__desc">
                                Don’t waste time, just order! This is the best
                                website to puschase smart watches.
                            </p>
                            <img src={rating} alt="" />
                        </div>
                    </div>
                    <div className="about__card">
                        <img src={img1} alt="" />
                        <div className="about__info">
                            <h3 className="about__card__title">Hamza Faizi</h3>
                            <p className="about__card__desc">
                                Don’t waste time, just order! This is the best
                                website to puschase smart watches.
                            </p>
                            <img src={rating} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
