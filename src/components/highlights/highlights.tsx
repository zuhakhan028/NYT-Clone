import React from "react";
import { worldNewsModule } from "../../assets/module";
import "./hightlights.css"
import { multiMediaList } from "../../assets/module";
import { getTimeAgo } from "../getTimeAgo";
import { formatNames } from "../formatNames";

interface highlightsData {
    worldnews: worldNewsModule | undefined;
}


function Highlights(props: highlightsData) {
  
    if (props.worldnews) {
        return (
            <section className="collection-highlight-container">
                <div>
                    <ol className="top-highlights-list">
                    
                        <li className="headline-1-li">
                        <a href={props.worldnews.results[0].url} className="route-next-page">
                            <article className="highlight-article">
                                <figure className="fig-div">
                                    <div>
                                        <img src={props.worldnews.results[0].multimedia[1].url} className="headline-1-img" alt={props.worldnews.results[0].multimedia[0].caption}></img>
                                    </div>
                                    <figcaption className="fig-caption">
                                        <span>{props.worldnews.results[0].multimedia[0].copyright.toUpperCase()}</span>
                                    </figcaption>
                                </figure>
                                <div>
                                    <h3 className="hightlights-title">{props.worldnews.results[0].title}</h3>
                                    <p className="highlight-abstract">{props.worldnews.results[0].abstract}</p>
                                    <p className="time-ago">{`${getTimeAgo(props.worldnews.results[0].created_date)} . `}{props.worldnews.results[0].byline}</p>
                                </div>
                            </article>
                            </a>
                        </li>
                     
                      

<li className="headline-2-li">
<a href={props.worldnews.results[1].url} className="route-next-page">
                            <article className="highlight-article">
                                <figure className="fig-div">
                                    <div>
                                        <img src={props.worldnews.results[1].multimedia[1].url} className="headline-2-img" alt={props.worldnews.results[1].multimedia[0].caption}></img>
                                    </div>
                                    <figcaption className="fig-caption">
                                        <span>{props.worldnews.results[1].multimedia[0].copyright.toUpperCase()}</span>
                                    </figcaption>
                                </figure>
                                <div>
                                    <h3 className="hightlights-title">{props.worldnews.results[1].title}</h3>
                                    <p className="highlight-abstract">{props.worldnews.results[1].abstract}</p>
                                    <p className="time-ago">{`${getTimeAgo(props.worldnews.results[1].created_date)} . `}<span className="byline-span">{props.worldnews.results[1].byline}</span></p>
                                </div>
                            </article>
                            </a>
                        </li>

                      

                        <li className="headline-3-li">
                           
                            <div className="highlight-right-top-div">
                            <a href={props.worldnews.results[3].url} className="route-next-page">
                                <article className="highlight-article">
                                    <div>
                                        <h3 className="hightlights-title">{props.worldnews.results[2].title}</h3>
                                        <div className="highlights-right-div">
                                            <img className="headline-3-img" src={props.worldnews.results[2].multimedia[1].url} alt={props.worldnews.results[2].multimedia[0].caption}></img>
                                        </div>
                                        <p className="highlight-abstract">{props.worldnews.results[2].abstract}</p>
                                        <p className="time-ago-right-div"><span className="byline-span">{`${getTimeAgo(props.worldnews.results[2].created_date)} . `}</span>
                                            <span className="byline-span">{props.worldnews.results[2].byline}</span>
                                        </p>
                                    </div>
                                </article>
                                </a>
                            </div>
                           
                        
                       
                         <div className="highlight-right-bottom-div">
                         <a href={props.worldnews.results[4].url} className="route-next-page">
                                <article className="highlight-article">
                                    <div>
                                        <h3 className="hightlights-title">{props.worldnews.results[3].title}</h3>
                                        <div className="highlights-right-div">
                                            <img className="headline-3-img" src={props.worldnews.results[3].multimedia[1].url} alt={props.worldnews.results[3].multimedia[0].caption}></img>
                                        </div>
                                        <p className="highlight-abstract">{props.worldnews.results[3].abstract}</p>
                                        <p className="time-ago-right-div">
                                            <span className="byline-span">{`${getTimeAgo(props.worldnews.results[3].created_date)}  `}</span>
                                            <span className="byline-span">{props.worldnews.results[3].byline}</span>
                                        </p>
                                    </div>
                                </article>
                                </a>
                            </div>
                        


                        </li>
                    </ol>
                </div>
                <div></div>
                <div></div>
            </section>
            
        )
    } else {
        return (
            <div>not here</div>
        )
    }


}

export default Highlights


{/* <div>{props.worldnews.results.map((eachArticle,index)=>{
    return(
        <div key={index}>{eachArticle.title}</div>
    )
})
}
</div> */}