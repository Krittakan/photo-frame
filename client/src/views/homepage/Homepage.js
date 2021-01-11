import React, { Component } from 'react';
import Camera from '../components/Camera';
import PhotoCanvas from '../components/PhotoCanvas';

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasPhoto: false,
            dataUri: null
        };
    }

    handleChangePhoto(value) {
        this.setState({
            hasPhoto: true,
            dataUri: value
        });
    }

    render() {
        console.log(this.state);

        return this.state.hasPhoto ?
            <PhotoCanvas dataUri={this.state.dataUri} />
            :
            <Camera changePhoto={this.handleChangePhoto.bind(this)} />
            ;
    }
}

export default Homepage;