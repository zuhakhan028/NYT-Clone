import "./dispatches.css"
import { worldNewsModule } from "../../assets/module";
import { listWorldNews } from "../../assets/module";
import { Link } from "react-router-dom";
interface Dispatches {
  worldnews: worldNewsModule | undefined;
  startIndex: number;
  endIndex: number;
  heading: string;
  anchorText: string;
}
function Dispatches(props: Dispatches) {
  let slicedResults: listWorldNews[] = [];

  if (props.worldnews) {
    slicedResults = props.worldnews.results.slice(props.startIndex, props.endIndex + 1);
  }

  return (
    <section>
      <div className="dispatch-div">
        <header className="dispatch-header">
          <div>
           
              {props.heading}
          
          </div>
          <Link to={`${props.heading}`}className="more-in-dispatches">{props.anchorText} <small>{">"}</small><span><img></img></span></Link>
        </header>
        <ol className="dispatch-list">
          {slicedResults.map((item, index) => (
           
        
              <li
                key={index}
                className={`dispatch-inner-div ${index === 0 ? "first-item" : ""} ${index === slicedResults.length - 1 ? "last-item" : ""}`}
              >
                    <a className="route-next-page" href={item.url}  key={index}>
                <div className="dispatch-li-inner-div">
                  <figure className="dispatch-figure">
                  <div className="dispatch-img-div">
                      {item.multimedia && item.multimedia.length > 0 && item.multimedia[0] ? (
                        <img src={item.multimedia[1].url} className="dispatch-img" alt={item.multimedia[0].caption} />
                      ) : (
                        <img src={""} className="dispatch-img" alt={item.multimedia[0].caption}/>
                      )}
                    </div>
                  </figure>
                  <p className="dispatch-title">{item.title}</p>
                </div>
                </a>
              </li>
          

          ))}
        </ol>

      </div>
    </section>
  );
}

export default Dispatches;