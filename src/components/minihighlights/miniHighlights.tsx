import React from "react";
import { worldNewsModule, listWorldNews } from "../../assets/module";
import "./miniHighLights.css";
import { Link } from "react-router-dom";

interface MiniHighlightsProps {
  worldnews: worldNewsModule | undefined;
  startIndex: number;
  endIndex: number;
}

function MiniHighlights(props: MiniHighlightsProps) {
  let slicedResults: listWorldNews[] = [];

  if (props.worldnews) {
    slicedResults = props.worldnews.results.slice(props.startIndex, props.endIndex + 1);
  }

  return (
    <section>
      <div className="mini-highlight-div">
        <ol className="mini-highlight-list">
        {slicedResults.map((item, index) => (
         
          <li
            key={index}
            className={`mini-highlight-inner-div ${index === 0 ? "first-item" : ""} ${index === slicedResults.length - 1 ? "last-item" : ""}`}
          >
             <Link 
              to={`/article/${item.byline}`} // Replace with your desired route path
              className="route-next-page"
              state={{ item }} // Pass the worldnews prop className="route-next-page"
              >
            <div className="highlight-li-inner-div">
                <figure className="mini-highlight-figure">
                    <div>
                    <img src={item.multimedia[1].url} className="mini-highlight-img" alt={item.multimedia[0].caption}></img>
        
                    </div>
                </figure>
            <p className="mini-highlight-title"><span className="mini-highlight-title">{item.title}</span></p>
            </div>
            </Link>
          </li>
       

        ))}
        </ol>
        
      </div>
    </section>
  );
}

export default MiniHighlights;
