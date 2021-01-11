import React, { Component } from 'react';

class PhotoCanvas extends Component {
    componentDidMount() {
        var canvas = document.getElementById('photo_canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = this.props.dataUri;
        img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        var frame = new Image();
        frame.src = this.props.frameDataUri;
        frame.onload = function () {
            ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
        };
    }

    componentDidUpdate() {
        var canvas = document.getElementById('photo_canvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        var img = new Image();
        img.src = this.props.dataUri;
        img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        var frame = new Image();
        frame.src = this.props.frameDataUri;
        frame.onload = function () {
            console.log(frame.height);
            ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
        };
    }

    render() {
        return (
            <canvas id="photo_canvas" className="photo-canvas" width="768" height="576"></canvas>
        );
    }
}

export default PhotoCanvas;
