// ArticleDetail.js
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import "./articleDetails.css"
import gift_icon from "../../assets/images/gift.svg"
import share_icon from "../../assets/images/share.svg"
import save_icon from "../../assets/images/save.svg"
import { formatDate } from "../formatDate";
import { formatDateTime } from "../formatDateandTime";
import Footer from "../footer/footer";
import auth_1 from "../../assets/images/auth-1.png"
import CommentsButton from "../commentsbutton/commentsButton";
import { articleBody } from "../../assets/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import place_holder_img from "../..//assets/images/placeholder-image.png"
import splitStringIntoParagraphs from "../splitparagraph";
import { useState, useEffect } from "react";
import { EachCountryNewsData } from "../../assets/module";






function ArticleDetail() {
    window.scrollTo(0, 0); 
    const location = useLocation();
    const worldnews = location.state ? (location.state.item ? location.state.item : location.state) : null;    
    document.title = worldnews.title
   
const metaDescription = document.querySelector('meta[name="news"]');


if (metaDescription) {
  metaDescription.setAttribute("content", worldnews.title);
}
    

    return (
        <div className="each-article-main-div">
            <Header text={`${worldnews.subsection.toUpperCase()}`} />

            <section className="each-article-section">
                <div className="each-article-top-div">
                    <h1 className="article-title">
                        {worldnews.title}
                    </h1>
                    <p className="each-article-abstract">
                        {worldnews.abstract}
                    </p>
                    <div className="article-top-div">
                        <div className="article-cta-div">
                            <div className="share-full-article">
                                <img src={gift_icon} alt={"gift-icon"} className="gift-icon" ></img>
                                <span>Share full article</span>
                            </div>
                            <div className="article-share-div"> <img src={share_icon} className="article-share-icon" alt={"share-icon"}></img></div>
                            <div className="article-share-div"> <img src={save_icon} className="article-save-icon" alt={"save-icon"}></img></div>

                        </div>
                        <div className="article-middle-div">
                            <figure className="article-figure">
                                <div>
                                    <LazyLoadImage className="article-main-img" src={worldnews.multimedia[1].url ? worldnews.multimedia[1].url : ""} alt={`${worldnews.multimedia[1].caption}`} placeholderSrc={place_holder_img} />
                                </div>
                                <figcaption className="article-fig-caption">
                                    {`${worldnews.multimedia[1].caption} `}
                                    <span className="article-img-copyright">{worldnews.multimedia[1].copyright}</span>
                                </figcaption>

                            </figure>
                            <div className="article-byline"> <img src={auth_1} className="auth-img"></img>By<span className="article-byline-span">{` ${ worldnews.byline.slice(3)}`}</span></div>
                            <div className="article-formatted-date">
                                {formatDate(worldnews.created_date)}
                                <span className="article-formatted-date-span">{`Updated ${formatDateTime(worldnews.updated_date)}`}</span></div>

                            <div className="article-paragraph-content">
                                {splitStringIntoParagraphs(articleBody, worldnews.multimedia[1].url,worldnews.multimedia[1].caption)}
                            </div>

                        </div>
                        <CommentsButton />
                        <div className="article-end-cta-div">
                            <div className="article-cta-div">
                                <div className="share-full-article">
                                    <img src={gift_icon} alt={"gift-icon"} className="gift-icon"></img>
                                    <span>Share full article</span>
                                </div>
                                <div className="article-share-div"> <img src={share_icon} className="article-share-icon" alt={"share-icon"}></img></div>
                                <div className="article-share-div"> <img src={save_icon} className="article-save-icon" alt={"save-icon"}></img></div>

                            </div>
                        </div>

                    </div>
                  
                </div>
                <div className="each-article-bottom-div">
                <Footer /> 
                </div>

            
            </section>


 

                
        </div>
    );
}

export default ArticleDetail;
