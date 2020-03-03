import React, { useEffect, useState} from "react";
import APIHandler from "../../src/api/APIHandler";
import PreviewAd from "../components/ad/PreviewAd";
import TabsAd from "../components/ad/TabsAds";
import Map from "../components/map/Map";
import { LoadScript } from "@react-google-maps/api";

export default function AdsDisplayed() {
  const [ads, setAds] = useState([]);
  const [locations, setLocations] = useState([]);
  const [toggleMap, setToggleMap] = useState(false);
 
  const displayMap = ()=> {
    setToggleMap(!toggleMap)
  }
  useEffect(()=>{
    APIHandler.get("/ads")
      .then(apiRes => setAds(apiRes.data))
      .catch(err => console.error(err))
  }, [])

  useEffect(()=>{
    const locationsArray = ads.map((ad, i)=>(ad.location.coordinates))
    setLocations(locationsArray)
  }, [ads])
 
  return (
    <div>
        <TabsAd mapActive={toggleMap} toggle= {displayMap}/>
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

