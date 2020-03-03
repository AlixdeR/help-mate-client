import React, { useEffect, useState} from "react";
import APIHandler from "../../src/api/APIHandler";
import PreviewAd from "../components/ad/PreviewAd";
import Map from "../components/map/Map";
import { LoadScript } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";

<<<<<<< HEAD
export default class Ads extends Component {
  state = {
    ads: [],
    message: ""
  };

  filterAds = e => {
    APIHandler.get(`/ads/search?q=${e.target.value}`)
    .then(APIRes => {
        console.log(APIRes.data)
        console.log(e.target.value)
        this.setState({ads: APIRes.data})
        this.setState({message: "Pas de résultat..."})
    })
    .catch(APIErr=>console.log(APIErr))
}

  componentDidMount() {
    APIHandler.get("/ads")
    .then(apiRes => {
      this.setState({ ads: apiRes.data });
    })
    .catch(err => console.error(err));
=======
export default function AdsDisplayed() {
  const [ads, setAds] = useState([]);
  const [locations, setLocations] = useState([]);
  const [toggleMap, setToggleMap] = useState(false);
 
  const displayMap = ()=> {
    setToggleMap(!toggleMap)
>>>>>>> 3e852c85cd2f5139977a54756f83f396e71c8826
  }
  useEffect(()=>{
    APIHandler.get("/ads")
      .then(apiRes => setAds(apiRes.data))
      .catch(err => console.error(err))
  }, [])

<<<<<<< HEAD
  render() {
    return (

      <React.Fragment>

        <h1 className="title">Toutes les annonces</h1>

        <input onChange={this.filterAds} id="search-bar" className="input" type="text" placeholder="Recherche..."></input>

        {Boolean((this.state.ads).length) ? this.state.ads.map((ad, i) => (
          <PreviewAd data={ad}/>
        )) : <p>Aucune annonce...</p>}
=======
  useEffect(()=>{
    const locationsArray = ads.map((ad, i)=>(ad.location.coordinates))
    console.log(locationsArray)
    setLocations(locationsArray)
  }, [ads])
 
  return (
    <div>
      <h1 className="title">Toutes les annonces</h1>
        <div class="tabs is-centered">
          <ul>
            <li class="is-active">
              <a>Bricolage</a>
            </li>
            <li>
              <a>Visites</a>
            </li>
            <li>
              <a>Courses</a>
            </li>
            <li>
              <a>Free Hugs</a>
            </li>
            <li>
            <FontAwesomeIcon
        onClick={displayMap}
        className="is-hoverable"
        icon={faMapMarkedAlt}/>
            </li>
          </ul>
        </div>
        <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_APIKEY}
        >
        {toggleMap && <Map locations={locations} />}
        </LoadScript>
        {Boolean(ads.length) ? (
          ads.map((ad, i) => <PreviewAd data={ad} />)
        ) : (
          <p>Aucune annonce...</p>
        )}
    </div>
  )
}
>>>>>>> 3e852c85cd2f5139977a54756f83f396e71c8826

