import React, { Component } from 'react';
import GoogleMap, { Marker } from 'google-maps-react'

class Map extends Component {

    constructor(props) {
        super(props);

        this.state = {
            services: []
        };

        this.addService = this.addService.bind(this);
    }

    addService(lat, lng, service) {
        this.setState({
            services: this.state.services.concat({
                name: service,
                lat: lat,
                lng: lng
            })
        })
    }

    mapClicked = (mapPros, mapObject, clickEvent) => {
        let service = window.prompt("Please enter a service you would like to offer");
        if (service !== "") {
            this.addService(clickEvent.latLng.lat(), clickEvent.latLng.lng(), service);
        }
    }

    render() {
        return (
            <GoogleMap
                google={this.props.google} zoom={14}
                onClick={this.mapClicked}
            >
                {
                    this.state.services.map(service => <Marker
                        name={service.name}
                        position={{ lat: service.lat, lng: service.lng }}
                    />)
                }

            </GoogleMap>
        )
    }
}

export default Map;

/*
export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(Container)
    */
