import React from "react";
import "./latestSectionList.css";
import { worldNewsModule } from "../../assets/module";
import { formatDate } from "../formatDate";
interface LatestSectionListProps {
  index: number;
  worldnews: worldNewsModule | undefined;
}

function LatestSectionList(props: LatestSectionListProps) {


  if (props.index === 1) {
    return (
      <section>
        <div></div>
      </section>
    );
  } else {
    if (props.worldnews) {
      const numResults = props.worldnews.num_results;
      return (

        <section className="latest-section-list-section">
          <div className="latest-section-left-div">
            <ol className="latest-section-ordered-list">
              {props.worldnews.results.map((value, index) => {
                if (value.title) {
                  const isLastItem = index === numResults - 1;
                  return (

                    <li key={index} className={` ${isLastItem ? "last-list-item" : "latest-section-list"}`}
                    >

                      <div className="formatted-date">
                        {formatDate(value.created_date)}
                      </div>
                      <a href={value.url} className="route-next-page">
                        <article className="article-latest-section-list">
                          <div className="article-latest-section-inner-div">

                            <h3 className="dispatch-title-h3">{value.title}</h3>


                            <p className="latest-list-section-abstract">{value.abstract}</p>
                          </div>
                          <div>
                            <figure className="latest-list-section-figure">
                              <div>
                                <div>
                                  {value.multimedia && value.multimedia[1] ? (
                                    <div>
                                      <img
                                        src={value.multimedia[1].url}
                                        alt={value.multimedia[1].caption}
                                        className="latest-list-section-img"
                                      />
                                    </div>
                                  ) : (
                                    <img
                                      src={""}
                                      alt={""}
                                      className="latest-list-section-img"
                                    />
                                  )}
                                </div>
                              </div>
                            </figure>
                          </div>
                        </article>
                      </a>



                    </li>


                  );
                } else {
                  return null; // Skip rendering this item
                }
              })}
            </ol>
          </div>
        </section>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default LatestSectionList;
