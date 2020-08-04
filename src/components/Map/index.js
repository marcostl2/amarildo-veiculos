import React, { useEffect, useState } from 'react'
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Map, TileLayer, Marker} from 'react-leaflet'

import './styles.scss'

function MapContainer(props) {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoaded(true), 3000)
    })

    const position=[-22.95162,-43.21077]

    return (
        <div className="map-container">
            <h1>Localização</h1>
            {!loaded ?
                    (<Skeleton variant="rect" width="70%" height="60%" />)
                    :
                    // <Map
                    //     google={props.google}
                    //     zoom={14}
                    //     style={style}
                    //     initialCenter={{
                    //         lat: -22.95162,
                    //         lng: -43.21077
                    //     }}
                    // >
                    //     <Marker />
                    // </Map>
                    <div className="leaflet-container">
                        <Map center={position} zoom={15}>
                             {/* style={{width:'30%',height:'50px'}}> */}
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}/>
                        </Map>
                    </div>
            }
        </div>
    );
}

export default MapContainer

// export default GoogleApiWrapper({
//     apiKey: (process.env.GOOGLE_API_KEY)
// })(MapContainer)