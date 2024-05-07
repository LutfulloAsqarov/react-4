import React from "react";
import newsletterImg from "../../assets/images/product/img1.png";
import "./Newslatter.scss";

const Newslatter = () => {
    return (
        <section id="newsletter">
            <div className="container newsletter">
                <div className="newsletter__left">
                    <h1 className="newsletter__title">
                        Subscribe To Newsletter
                    </h1>
                    <p className="newsletter__desc">
                        Get free guide about smart watches daily.
                    </p>
                    <form className="newsletter__form">
                        {/* <div className="newsletter__input"> */}
                        <input
                            type="text"
                            placeholder="Enter Email Address"
                            id="newsletter-input"
                        />
                        {/* </div> */}
                        <button className="newsletter__btn">Subscribe</button>
                    </form>
                </div>
                <div className="newsletter__right">
                    <img src={newsletterImg} alt="Img" />
                </div>
            </div>
        </section>
    );
};

export default Newslatter;
