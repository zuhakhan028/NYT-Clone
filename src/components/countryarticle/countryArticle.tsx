import "./CountryArticle.css"
import Header from "../header/header"
import { useLocation } from "react-router-dom"
import Footer from "../footer/footer"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { formatDate } from "../formatDate"
import splitStringIntoParagraphs from "../splitparagraph"
import { articleBody } from "../../assets/data"
import CommentsButton from "../commentsbutton/commentsButton"
import { formatDateTime } from "../formatDateandTime"
import CallToAction from "../calltoaction/callToAction"
import place_holder_img from "../../assets/images/placeholder-image.png"
import auth_1 from "../../assets/images/auth-1.png"

function CountryArticle(){
   window.scroll(0,0)
   const location=useLocation()
    const countryArticleNews=location.state.item
    document.title=countryArticleNews.headline.main
    return(
        <div className="each-article-main-div">
        <Header text={`${countryArticleNews.subsection_name.toUpperCase()}`} />

        <section className="each-article-section">
            <div className="each-article-top-div">
                <h1 className="article-title">
                    {countryArticleNews.headline.main}
                </h1>
                <p className="each-article-abstract">
                    {countryArticleNews.abstract}
                </p>
                <div className="article-top-div">
                <CallToAction/>
                    <div className="article-middle-div">
                        <figure className="article-figure">
                            <div>
                                <LazyLoadImage className="article-main-img" src={`https://static01.nyt.com/${countryArticleNews.multimedia[0].legacy.xlarge}`} alt={`${countryArticleNews.multimedia[1].caption}`} placeholderSrc={place_holder_img} />
                            </div>
                            <figcaption className="article-fig-caption">
                                {countryArticleNews.multimedia[1].caption?countryArticleNews.multimedia[1].caption:""}
                                <span className="article-img-copyright">{countryArticleNews.multimedia[1].copyright?countryArticleNews.multimedia[1].copyright:countryArticleNews.multimedia[1].copyright}</span>
                            </figcaption>

                        </figure>
                        <p className="article-byline"> <img src={auth_1} className="auth-img"></img>By <span className="article-byline-span">{`${countryArticleNews.byline.original.slice(3)}`}</span></p>
                        <div className="article-formatted-date">
                            {formatDate(countryArticleNews.pub_date)}
                            <span className="article-formatted-date-span">{`Updated ${formatDateTime(countryArticleNews.pub_date)}`}</span></div>

                        <p className="article-paragraph-content">
                            {splitStringIntoParagraphs(articleBody, countryArticleNews.multimedia[1].url)}
                        </p>

                    </div>
                    <CommentsButton />
                    <div className="article-end-cta-div">
                       <CallToAction/>
                    </div>

                </div>
            </div>
            <div className="each-article-bottom-div">
                
            </div>


        </section>



        <Footer />
    </div>
    )
}

export default CountryArticle