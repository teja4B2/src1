import React from 'react'
import AndraBank from './AndraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    let data={
        firstName:'teja',
        lastName:'adsrfas'
    }
    return (
        <div>
            <AndraBank info={data}/>
            <CorporationBank info={data} />
        </div>
    )
}


