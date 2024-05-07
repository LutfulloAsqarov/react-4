import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Category from "./components/category/Category";
import Product from "./components/product/Product";
import About from "./components/about/About";
import Newslatter from "./components/newslatter/Newslatter";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Hero />
            <Category />
            <Product />
            <About />
            <Newslatter />
            <footer
                style={{
                    background: "black",
                    color: "white",
                    textAlign: "center",
                    padding: 25,
                }}
            >
                Copyright @ 2022 | Lutfullo
            </footer>
        </>
    );
}

export default App;
