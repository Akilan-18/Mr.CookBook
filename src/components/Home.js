import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from "../images/logo2.png";
const Home = () => {
  return (
    <>
    <div id="section-1" className="section section-1">
        <img src={logo2} className="logo-2"/>
        <div className="quote-1">
            <blockquote class="blockquote-1">
                <i>A recipe has no soul. You, as the cook, must bring soul to the recipe.</i>
                <br/>
                <span className="author-name">
                - Thomas Keller
                </span>
            </blockquote>
        </div>
    </div>
    <div id="section-2" className="section section-2">
        <h1>MOST RECOMMENDED RECIPES</h1>
        <div>
            <h6>
                <a href="https://www.themealdb.com/meal.php?c=52806">Tandoori chicken</a>
            </h6>
            <img src="./images/1.jpg" alt="" data-image-width="700" data-image-height="700" />
        </div>
    </div>
    <div id="section-3" className="section section-3">
        <h1>RRS</h1>
    </div>
    <div id="section-4" className="section section-4">
        <h1>RRS</h1>
    </div>
    <div id="section-5" className="section section-5">
        <h1>RRS</h1>
    </div>
    </>
  )
}

export default Home;