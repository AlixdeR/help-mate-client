import React from 'react'
import PreviewAd from '../ad/PreviewAd'

export default function DisplayAds({ads}) {
    console.log("display", ads)
    
    return (
        
        <div className='display-ads'>
            <h3 className="title-3">Mes dernières annonces</h3>     
                {ads && ads.length===0 && <p>Pas encore d'annonce postée</p>}
                 {ads && ads.length!==0 && ads.map((ad, i)=>(
                    <div key={i}>
                    <PreviewAd data={ad}/>
                    </div>
            ))}
        
        </div>
    )
}
