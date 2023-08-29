// ArticleDetail.js
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import "./articleDetails.css"
import gift_icon from "../../assets/images/gift.svg"
import share_icon from "../../assets/images/share.svg"
import save_icon from "../../assets/images/save.svg"
function ArticleDetail() {
    const location = useLocation();
    const worldnews = location.state.item;

    // Now you can access the worldnews data passed from the MiniHighlights component
    // and display the details of the selected article
    console.log(worldnews)
    return (
        <div className="each-article-main-div">
            <Header text={`${worldnews.subsection.toUpperCase()}`} />
            <section className="each-article-centre-section">
                <h1 className="article-title">
                    {worldnews.title}
                </h1>
                <p className="each-article-abstract">
                    {worldnews.abstract}
                </p>
                <div className="article-top-div">
                    <div className="article-cta-div">
                        <div className="share-full-article">
                            <img src={gift_icon} alt={"gift-icon"} className="gift-icon"></img>
                            <span>Share full article</span>
                        </div>
                    <div className="article-share-div"> <img  src={share_icon} className="article-share-icon" alt={"share-icon"}></img></div> 
                    <div className="article-share-div"> <img  src={save_icon} className="article-save-icon" alt={"save-icon"}></img></div> 

                    </div>
                    <div className="article-middle-div">
                                <figure className="article-figure">
                                    <div>
                                        <img src={worldnews.multimedia[1].url} alt={`${worldnews.multimedia[1].caption}`}></img>
                                    </div>
                                    <figcaption className="article-fig-caption">
                                        {worldnews.multimedia[1].caption}
                                    </figcaption>
                                    <div className="article-img-copyright">{worldnews.multimedia[1].copyright}</div>
                                </figure>
                    </div>

                </div>
            </section>

        </div>
    );
}

export default ArticleDetail;
