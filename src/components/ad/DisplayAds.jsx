import React, { useState, useEffect } from "react";
import PreviewAd from '../ad/PreviewAd'

export default function DisplayAds({ ads, max }) {
    const [adsToDisplay, setAdsToDisplay] = useState([])


    useEffect(() => {
        if (ads && ads.length!==0 && max) {
            const adsProfile = ads.filter((ad,i) => i < max );
            console.log("ads hey hey",adsProfile)
            setAdsToDisplay(adsProfile);
        } else {
            setAdsToDisplay(ads);
        }
    }, [ads])

    
    return (
        
        <div className='display-ads'>
            <h3 className="title-3">Mes dernières annonces</h3>     
                {adsToDisplay && adsToDisplay.length===0 && <p>Pas encore d'annonce postée</p>}
                 {adsToDisplay && adsToDisplay.length!==0 && adsToDisplay.map((ad, i)=>(
                    <div key={i}>
                    <PreviewAd data={ad}/>
                    </div>
            ))}
        
        </div>
    )
}