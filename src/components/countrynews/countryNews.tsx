// interface CountryNews{
//     countryName:string
import "./countryNews.css"
import { EachCountryNewsData } from "../../assets/module";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EachCountryNewsDataResults } from "../../assets/module";
import LatestSections from "../latestsections/latestSections";
import Footer from "../footer/footer";
import Header from "../header/header";
import search_icon from "../../assets/images/searchicon.svg"
import EachCountryNews from "../eachcountrynews/eachCountryNews";
// }
// ... (imports)

function CountryNews() {
    const { countryname }: any = useParams();
    const [eachCountryNews, setEachCountryNews] = useState<EachCountryNewsData | null>(null);

    useEffect(() => {
        let eachCountryName = countryname.toLowerCase();
        var requestOptions: any = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=\"${eachCountryName}\"&api-key=oj5apZ1t8GGl3mvFF2mfYtddMrB9BAsM`, requestOptions)
            .then(response => response.json())
            .then(result => setEachCountryNews(result))
            .catch(error => console.log('error', error));
    }, []);

    if (eachCountryNews) {
        const CountryNewsData: EachCountryNewsDataResults[] = eachCountryNews?.response?.docs || [];

        return (
            <div className="more-dispatches">
                <div className='inner-app-div'>
                    <Header text={countryname.toUpperCase()} />
                    <section className='middle-section-each-country'>
                        <div className="news-section-each-country">
                            WORLD
                        </div>
                        <div className="news-section-dispatches-inner-div">
                            <div>
                                <h1 className="news-section-h1-each-country">
                                    {countryname}
                                </h1>
                            </div>
                            <div className="share-outer-div">
                                <a><img src={search_icon} className="share-img" alt={"share-img"}></img></a>
                            </div>
                        </div>
                        <EachCountryNews data={eachCountryNews}/>
                    </section>
               
                    <Footer />
                </div>
            </div>

        );
    } else {
        return <div>Loading...</div>;
    }
}

export default CountryNews;

//   <div>
//   {data.map((value, index) => (
//     <div key={index}>
//       {value.abstract}
//       {value.multimedia?.[0]?.legacy?.xlarge ? (
//         <img src={`https://static01.nyt.com/${value.multimedia[0].legacy.xlarge}`} alt="Image" />
//       ) : (
//         "Image not available"
//       )}
//     </div>
//   ))}
// </div>