import React from 'react';
import {GoogleApiWrapper,Map} from 'google-maps-react'
import ReactDOM from 'react-dom'


//import logo from './logo.svg';
//import './App.css';


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/


export class Container extends React.Component {
/*
    constructor(props) {
        super(props);

        const {lat, lng} = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
    }
    */

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }

    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            console.log(mapRef)
            const node = ReactDOM.findDOMNode(mapRef);



            console.log("this is this.props ", this.props);
            let {initialCenter, zoom} = this.props;
            console.log(initialCenter)
            const {lat, lng} = initialCenter;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            /*

            let zoom = 14;
            let lat = 37.774929;
            let lng = -122.419416;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })

            this.map = new maps.Map(node, mapConfig);

            /*

            const evtNames = ['click', 'dragend'];


            let centerChangedTimeout;
            this.map.addListener('dragend', (evt) => {
                if (centerChangedTimeout) {
                    clearTimeout(centerChangedTimeout);
                    centerChangedTimeout = null;
                }
                centerChangedTimeout = setTimeout(() => {
                    this.props.onMove(this.map);
                }, 0);

            })
            */
        }
    }


    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        if (!this.props.loaded) {
            return <div ref='map'>
                Please wait, page is loading...
            </div>
        }
        return (
            <div style={style} ref="map">
                <Map google={this.props.google}/>
            </div>
        )
    }
}


Map.propTypes = {
    google: React.PropTypes.object,
    zoom: React.PropTypes.number,
    initialCenter: React.PropTypes.object
}


Map.defaultProps = {
    zoom: 13,
    // San Francisco, by default
    initialCenter: {
        lat: 37.774929,
        lng: -122.419416
    }
}

/*
Map.propTypes = {
    // ...
    onMove: React.PropTypes.func
}
Map.defaultProps = {
    onMove: function() {} // default prop
}
*/

export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(Container)

