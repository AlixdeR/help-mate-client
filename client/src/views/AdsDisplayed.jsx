import React, { useEffect, useState} from "react";
import APIHandler from "../../src/api/APIHandler";
import PreviewAd from "../components/ad/PreviewAd";
import TabsAd from "../components/ad/TabsAds";
import Map from "../components/map/Map";
import { LoadScript } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import '../styles/adsPreview.css'
import {withRouter} from "react-router-dom";


export default withRouter(function AdsDisplayed({ history, location, match, adsSearched, max }) {
  const [ads, setAds] = useState([]);
  const [locations, setLocations] = useState([]);
  const [toggleMap, setToggleMap] = useState(false);
  const [toggleFilters, setToggleFilters] = useState(false)
  const displayMap = ()=> {
    setToggleMap(!toggleMap)
  }
  function displayFilters(){
    setToggleFilters(!toggleFilters)
  }
  
  useEffect(()=>{
    APIHandler.get("/ads")
      .then(apiRes => setAds(apiRes.data))
      .catch(err => console.error(err))
  }, [])

  
  useEffect(() => {
    if (max) {
      const adsFiltered = ads.filter((ad,i) => i < max )
      console.log(adsFiltered)
      setAds(adsFiltered)
    }
    
    const query = location.search.replace("?search=", "");
    APIHandler.get(`ads/search?q=${query}`)
    .then(apiRes => {
      if (max) {
        const adsFiltered = apiRes.data.dbRes.filter((ad,i) => i < max )
        setAds(adsFiltered)
      } else {
        setAds(apiRes.data.dbRes)
      }
      
    })
    .catch(err => console.error(err))
  }, [location])

  useEffect(()=>{

    if(adsSearched && adsSearched.length!==0) {
      setAds(adsSearched)
    }
  
    const locationsArray = ads.map((ad, i)=>(ad.location.coordinates))
    setLocations(locationsArray)
  }, [ads, adsSearched])

  const handleCategories = e => {
          let catSelected = e.target.id;
          console.log(catSelected)
          let loc = location.search;
          history.push({
              pathname: "/annonces",
              search: `${loc}&category=${catSelected}`
          });
  }
 
  return (
    <div>
        <TabsAd handleCategories={handleCategories} mapActive={toggleMap} filtersActive={toggleFilters} toggleFilters={displayFilters} toggle={displayMap}/>
        <div className={toggleFilters?"withfilters": "nofilter"}>
        <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_APIKEY}
        >
        {toggleMap && <Map locations={locations} />}
        </LoadScript>
        
        <div className="ads-preview-container">
        {ads.length ? (
          ads.map((ad, i) => <PreviewAd data={ad} />)
        ) : (
          <p>Aucune annonce à afficher...</p>
        )}
        </div>

        </div>
    </div>
  )
})
