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
  const [categorySelected, setCategorySelected] = useState('')
  const [typeSelected, setTypeSelected]= useState('')
  const [apiRes, setApiRes]= useState([])
  const [inputAddress, setInputAddress] = useState("Paris");
  const [latitude, setLatitude] = useState(48.8534);
  const [longitude, setLongitude] = useState(2.3488);
  const [maxDistance, setMaxDistance] = useState(10);

<<<<<<< HEAD
  const isHome = location.pathname === '/';
  console.log('ads', ads)
=======
  const changeMaxDistance = e => {
    setMaxDistance(e.target.value)
    console.log('max dist',e.target.value)
  }
  const handleinput =e =>{
    setInputAddress (e.target.value)
  }

  const handleSubmit =e=>{
    console.log('add', inputAddress)
    e.preventDefault();
    const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: inputAddress }, (results, status)=> {
        if (status == "OK") {
          console.log(results, "this is results");
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          console.log('results',lat, lng);
          setLatitude(lat);
          setLongitude(lng);
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
  })
}
  function getUserlocation (){
    console.log('youhou je veux ta localisation')
    var infoWindow;
    infoWindow = new window.google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        console.log("voici ta localisation bitch",position.coords.latitude,",", position.coords.longitude)
        // infoWindow.open(map);
        // map.setCenter(pos);
      }, function() {
        window.handleLocationError(true);
        // map.getCenter()
      });
    } else {
      // Browser doesn't support Geolocation
      window.handleLocationError(false);
      // map.getCenter()
    }
  }
  function distance(lat1, lon1, lat2, lon2) {
    console.log('lat voulue', lat1);
    console.log('lat comparée', lat2);
    console.log('lng voulue', lon1);
    console.log('lng comparée', lon2);
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344
      console.log('dist',dist)
      return dist;
    }
  }
>>>>>>> 2e4460df226ed670833ed9c707c237d9eaa427d1

  const displayMap = ()=> {
    setToggleMap(!toggleMap)
  }
  function displayFilters(){
    setToggleFilters(!toggleFilters)
  }
  
  useEffect(() => {
    if (max) {
      const adsFiltered = ads.filter((ad,i) => i < max )
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
        setApiRes(apiRes.data.dbRes)
      }
    })
    .catch(err => console.error(err))
  }, [location])

  useEffect(()=>{
    console.log('setlatitude', latitude, 'setlongitude', longitude)
    console.log('max dist', maxDistance)
      const newArray =  apiRes.filter((ad, i)=>(ad.adType.includes(typeSelected) && ad.category.includes(categorySelected) && distance(latitude, longitude, ad.location.coordinates[1],ad.location.coordinates[0])<=maxDistance))
      // console.log('filter type',typeArray);
      setAds(newArray)
  },[typeSelected, categorySelected, maxDistance, latitude, longitude])

  useEffect(()=>{
    if(adsSearched && adsSearched.length!==0) {
      setAds(adsSearched)
    }
    
    const locationsArray = ads.map((ad, i)=>(ad.location.coordinates))
    setLocations(locationsArray)
  }, [adsSearched, ads])
 
 
  const handleCategories =  e => {
    setCategorySelected(e.target.id);
    console.log('categorychanged', categorySelected)
}
const handleType = e => {
setTypeSelected(e.target.value);
console.log('type changed', typeSelected)
}
  return (
    <div>
<<<<<<< HEAD
      {
        !isHome && <TabsAd
          mapActive={toggleMap}
          filtersActive={toggleFilters}
          toggleFilters={displayFilters}
          toggle={displayMap}
        />
      }
      
      <div className={toggleFilters?"withfilters": "nofilter"}>
        {
          !isHome && <LoadScript
            id="script-loader"
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_APIKEY}
          >
            {toggleMap && <Map locations={locations} />}
          </LoadScript>
        }
      
=======
        <TabsAd getUserlocation={getUserlocation} maxDistance={maxDistance} changeMaxDistance= {changeMaxDistance} handleinput={handleinput} handleSubmit={handleSubmit} setCategorySelected={handleCategories} setTypeSelected={handleType} mapActive={toggleMap} filtersActive={toggleFilters} toggleFilters={displayFilters} toggle={displayMap}/>
        <div className={toggleFilters?"withfilters": "nofilter"}>
        <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_APIKEY}
        >
        {toggleMap && <Map locations={locations} />}
        </LoadScript>
        
>>>>>>> 2e4460df226ed670833ed9c707c237d9eaa427d1
        <div className="ads-preview-container">
          {Boolean(ads.length) ? (
            ads.map((ad, i) => <PreviewAd data={ad} />)
          ) : (
            <p>Aucune annonce à afficher...</p>
          )}
        </div>

      </div>
    </div>
  )
})
