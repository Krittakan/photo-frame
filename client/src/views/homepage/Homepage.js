import React, { Component } from 'react';
import {
    Button, Col, ListGroup, Row
} from 'react-bootstrap';

import frameService from '../services/frame';

import Camera from '../components/Camera';
import PhotoCanvas from '../components/PhotoCanvas';

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasPhoto: false,
            dataUri: null,
            frameList: null,
            frameDataUri: "data:image/png;base64,R0lGODlhAQABAAAAACw=",
        };

        this.frameService = new frameService(this);
    }

    componentDidMount() {
        this.frameService.getFrameList();
    }

    handleChangePhoto(value) {
        this.setState({
            hasPhoto: !this.state.hasPhoto,
            dataUri: value
        });
    }

    handleChangeFrame(value) {
        this.setState({
            frameDataUri: value,
        });
    }

    download() {
        var canvas = document.getElementById('photo_canvas');
        var image = canvas.toDataURL("image/png");

        var link = document.createElement('a');
        link.download = 'image.png';
        link.href = image;
        link.click();
    }

    render() {
        console.log(this.state);
        return <div>
            {
                this.state.hasPhoto ?
                    (
                        <Row className="justify-content-md-center">
                            <Col>
                                <PhotoCanvas dataUri={this.state.dataUri} frameDataUri={this.state.frameDataUri} />
                            </Col>
                            <Col>
                                <Row className="justify-content-md-center mb-2">
                                    <Button variant="outline-danger" block
                                        onClick={() => this.handleChangePhoto(null)}
                                    >
                                        Take New Photo
                                    </Button>
                                </Row>

                                <Row className="justify-content-md-center mb-2">
                                    <ListGroup className="w-100">
                                        <ListGroup.Item key="0" action onClick={() => this.handleChangeFrame("data:image/png;base64,R0lGODlhAQABAAAAACw=")}>No frame</ListGroup.Item>
                                        {this.state.frameList.map((frame, i) => (
                                            <ListGroup.Item key={i} action onClick={() => this.handleChangeFrame(frame.dataUri)}>
                                                {frame.name}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Row>

                                <Row className="justify-content-md-center mb-2">
                                    <Button variant="success" block
                                        onClick={() => this.download()}>Save Photo</Button>
                                </Row>
                            </Col>
                        </Row>
                    )
                    :
                    <Row className="justify-content-md-center">
                        <Col>
                            <Camera changePhoto={this.handleChangePhoto.bind(this)} />
                        </Col>
                        <Col>
                            <p>Please take a photo first !!</p>
                        </Col>
                    </Row>
            }
        </div>
    }
}

export default Homepage;