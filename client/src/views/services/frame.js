import axios from 'axios';

export default class frame {
    constructor(component) {
        this.component = component;
    }

    getFrameList() {
        axios
            .get('/api/frame/list')
            .then(response => {
                this.component.setState({
                    frameList: response.data
                });
            }).catch((error) => {
                console.log(error);
            });
    }
}