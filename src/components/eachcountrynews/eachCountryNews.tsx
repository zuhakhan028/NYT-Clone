
import { useState } from "react";
import search_icon from "../../assets/images/searchicon.svg"
import "./eachCountryNews.css"
import { EachCountryNewsData } from "../../assets/module";
import { EachCountryNewsDataResults } from "../../assets/module";
import { formatDate } from "../formatDate";


interface eachCountryNews {
    data: EachCountryNewsData | undefined
}
function EachCountryNews(props: eachCountryNews) {
    const [activeSection, setActiveSection] = useState<string>("Latest");

    const handleSectionClick = (section: string) => {
        setActiveSection(section);
    };
    let CountryNewsData: EachCountryNewsDataResults[] = props.data?.response?.docs || [];
    console.log(CountryNewsData)

    return (

        <section className="latest-section-each-country">
            <nav>
                <ul className="latest-section-ul">
                    <li className="latest-section-li">
                        <a
                            className={`${activeSection === "Latest"
                                ? "latest-section-clicked" && "latest-section-clicked-again"
                                : "latest-section-not-clicked"
                                }`}
                            onClick={() => handleSectionClick("Latest")}
                        >
                            Latest
                        </a>
                    </li>
                    <li className="latest-section-li">
                        <a
                            className={`${activeSection === "Search"
                                ? "latest-section-clicked"
                                : "latest-section-not-clicked"
                                }`}
                            onClick={() => handleSectionClick("Search")}
                        >
                            <span className="search-icon"><img src={search_icon} alt={"search-icon"}></img></span> Search
                        </a>
                    </li>
                </ul>
            </nav>

            {activeSection === "Latest" && <ol className="each-country-ul">
                {props.data ? <div>
                    <div>
                        {CountryNewsData.map((item, index) => (

                            <li key={index} className={"latest-section-list"}>
                                <div className="formatted-date">
                                    {formatDate(item.pub_date)
                                    }
                                </div>
                                <a className="route-next-page">
                                    <article className="article-latest-section-list">
                                        <div className="article-latest-section-inner-div">
                                            <h3 className="dispatch-title-h3">{item.headline.main}</h3>
                                            <p className="latest-list-section-abstract">{item.abstract}</p>
                                        </div>


                                        <div>
                                            <figure className="latest-list-section-figure">
                                                <div>
                                                    <div>
                                                        {item?.multimedia?.[0]?.legacy?.xlarge ? (
                                                            <img src={`https://static01.nyt.com/${item.multimedia[0].legacy.xlarge}`} alt={item.multimedia[0].caption} className="latest-list-section-img" />
                                                        ) : (
                                                            "Image not available"
                                                        )}
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>

                                    </article>
                                </a>

                            </li>
                        ))}
                    </div>

                </div> : <div></div>}
            </ol>}
            {activeSection === "Search" && <div>search</div>}

        </section>


    )
}

export default EachCountryNews



