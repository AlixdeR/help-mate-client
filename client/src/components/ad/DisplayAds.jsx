import React from 'react'
import PreviewAd from '../ad/PreviewAd'

export default function DisplayAds({ads}) {
    
    return (
        <div className='display-ads'>
            {!ads && <p><strong>Pas encore d'annonce postée</strong></p>}
            {ads && ads.map((ad, i)=>(
                <div key={i}>
                <PreviewAd data={ad}/>
                </div>
            ))}
        </div>
    )
}
