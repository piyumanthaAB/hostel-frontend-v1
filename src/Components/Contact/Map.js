import { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
// import { MapContainer } from "./ContactUsElements";

class MapContainer extends Component{
    render() {
        return (
            <Map
                google={this.props.google}
                style={{ width: "100%", height: "100%" }}
                zoom={10}
                initialCenter={
                    {
                        lat: 5.954920,
                        lng:80.554955
                    }
                }
            />
        )
    }
}

export default GoogleApiWrapper({
    // apiKey:"AIzaSyD-WEUnnFX05zsDLRhTMni6WmZQOutNJgM"
    apiKey:`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`
})(MapContainer)