import React, { Component } from 'react';
import Html5Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class Camera extends Component {
    render() {
        return (
            <Html5Camera
                onTakePhoto={(dataUri) => {
                    this.props.changePhoto(dataUri);
                }}
            />
        );
    }
}

export default Camera;
