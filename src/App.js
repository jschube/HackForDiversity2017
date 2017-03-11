import React from 'react';
import Map from './Map'
import GoogleApiWrapper from 'google-maps-react'


class App extends React.Component {
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        // if (!this.props.loaded) {
        //     return <div ref='map'>
        //         Please wait, page is loading...
        //     </div>
        // }
        return (
            <div style={style} ref="map">
                <Map google={this.props.google}/>
            </div>
        )
    }
}

export default App({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(App)


//AIzaSyBoLLmLC2y4zfD1WUqcV50_wTDqz4Nqmug
