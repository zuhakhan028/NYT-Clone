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
function ArticleDetail() {
    const location = useLocation();
    const worldnews = location.state.item;

    document.title = worldnews.title
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
                            <img src={gift_icon} alt={"gift-icon"} className="gift-icon" ></img>
                            <span>Share full article</span>
                        </div>
                        <div className="article-share-div"> <img src={share_icon} className="article-share-icon" alt={"share-icon"}></img></div>
                        <div className="article-share-div"> <img src={save_icon} className="article-save-icon" alt={"save-icon"}></img></div>

                    </div>
                    <div className="article-middle-div">
                        <figure className="article-figure">
                            <div>
                                <img className="article-main-img" src={worldnews.multimedia[1].url ? worldnews.multimedia[1].url : ""} alt={`${worldnews.multimedia[1].caption}`}></img>
                            </div>
                            <figcaption className="article-fig-caption">
                                {`${worldnews.multimedia[1].caption} `}
                                <span className="article-img-copyright">{worldnews.multimedia[1].copyright}</span>
                            </figcaption>

                        </figure>
                        <p className="article-byline"> <img src={auth_1} className="auth-img"></img>By <span className="article-byline-span">{`${worldnews.byline.slice(3)}`}</span></p>
                        <div className="article-formatted-date">
                            {formatDate(worldnews.created_date)}
                            <span className="article-formatted-date-span">{`Updated ${formatDateTime(worldnews.updated_date)}`}</span></div>

                        <p className="article-paragraph-content">
                            Sixteen people have died and over 150 have been hospitalized in southeastern Poland in an outbreak of Legionnaires’ disease, a severe strain of bacterial pneumonia, local health authorities said Wednesday.<br></br>

                            The outbreak has been concentrated in the southeastern city of Rzeszow, which lies about 60 miles from the border with neighboring Ukraine, although some cases have been registered elsewhere. The Polish health ministry said this week that the most likely source of infection was Rzeszow’s municipal water network.<br></br>

                            Once relatively quiet, Rzeszow has become an important hub for the international response to Russia’s invasion of Ukraine, hosting American soldiers and thousands of Ukrainian refugees. The deaths, which have occurred over the past week, <br></br>sparked unfounded rumors in Poland of Russian responsibility for the outbreak that the authorities have tried to tamp down.<br></br>

                            Stanislaw Zaryn, a deputy minister who oversees the country’s intelligence services, said Friday that the Polish internal security service was pursuing a routine <br>
                            </br>investigation into the circumstances behind the infection to rule out “potential intentional action in this case.”
                           
                            In a statement on Monday, Representative Michael McCaul of Texas, the Republican chairman of the House Foreign Affairs Committee, bemoaned the transfer of funds to “the world’s top state sponsor of terrorism.” Gov. Ron DeSantis of Florida, a Republican candidate for president, posted on social media that the agreement<br>
                            </br> “bankrolls nuclear ambitions, hostage takers, and extremists who hate America.” And Senator Ted Cruz, Republican of Texas, blasted what he called President Biden’s “ransom” payment to Iran.

                            At a daily news briefing, the State Department spokesman, Matthew Miller, strongly rebutted such criticism after confirming an Associated Press report that Mr. Blinken had signed waivers on Friday allowing the transfer of money from South Korean accounts to Qatar, which has agreed to provide what amounts to an escrow service.
                        </p>

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
            </section>
            <Footer />
        </div>
    );
}

export default ArticleDetail;
