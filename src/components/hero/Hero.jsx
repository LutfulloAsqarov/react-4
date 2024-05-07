import React from "react";
import { IoSearch } from "react-icons/io5";
import heroImg from "../../assets/images/hero/hero-img.png";
import "./Hero.scss";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container hero">
                <div className="hero__left">
                    <h1 className="hero__title">
                        Discover Most Suitable Watches
                    </h1>
                    <p className="hero__desc">
                        Find the best, reliable, and cheap smart watches here.
                        We focus on product quality. Here you can find smart
                        watches of almost all brands. So why you are waiting?
                        Just order now!
                    </p>
                    <form className="hero__form">
                        <div className="hero__input">
                            <label htmlFor="hero-input">
                                <IoSearch />
                            </label>
                            <input
                                type="text"
                                placeholder="Find the best brands"
                                id="hero-input"
                            />
                        </div>
                        <button className="hero__btn">Search</button>
                    </form>
                </div>
                <div className="hero__right">
                    <img src={heroImg} alt="Img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
