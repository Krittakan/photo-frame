import React, { Component } from 'react';

class PhotoCanvas extends Component {
    componentDidMount() {
        var canvas = document.getElementById('photo_canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image;
        img.src = this.props.dataUri;
        img.onload = function () {
            ctx.drawImage(img, 0, 0, img.width, img.height,     // source rectangle
                0, 0, canvas.width, canvas.height);

        };
    }

    render() {
        return (
            <canvas id="photo_canvas" className="photo-canvas"></canvas>
        );
    }
}

export default PhotoCanvas;
