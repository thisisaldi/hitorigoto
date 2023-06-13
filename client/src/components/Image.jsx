import React, { Component } from "react";

export class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        };
    };
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };
    componentDidMount() {
        fetch('/')
        .then((res) => res.json())
        .then((data) => {
            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr =
                this.arrayBufferToBase64(data.img.data.data);
            this.setState({
                img: base64Flag + imageStr
            })
        })
    }
    render() {
        const {img} = this.state;
        return (
            <img
                src={img}
                alt='Helpful alt text'/>
        )
    }
}
