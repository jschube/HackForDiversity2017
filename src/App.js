import React from 'react';
import './index.css';

import Map from './Map';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Map google={this.props.google} />
            </div>
        )
    }
}


export default App;

//AIzaSyBoLLmLC2y4zfD1WUqcV50_wTDqz4Nqmug
