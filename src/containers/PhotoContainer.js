import React, { Component } from 'react';
import PhotoCard from '../components/PhotoCard';
import Slider from './Slider';

export default class PhotoContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoUrls: [],
            numOfPages: 1,
            page: 1,
        }
    }

    componentDidMount() {
        this.fetchPhotos();
    }

    async fetchPhotos() {
        const unsplashSearch = `https://api.unsplash.com/search/photos?page=${this.state.page}&query=inspirational&client_id=`;
        const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

        let resp = await fetch(unsplashSearch + API_KEY);
        let data = await resp.json();

        const numOfPages = data["total_pages"];
        let photoUrls = data.results.map(element => element.urls.full);

        this.setState({numOfPages, photoUrls: [...this.state.photoUrls, ...photoUrls]});

        // "Pagination"
        if (this.state.numOfPages >= 1 && this.state.page <= 3) {
            this.setState({page: this.state.page + 1});
            this.fetchPhotos();
        }
    }

    sliderData = photos => {
        return photos.map(photo => {
            return {
                index: photos.indexOf(photo),
                src: photo
            }
        })
    }

    renderPhotoCards() {
        let sliderData = this.sliderData(this.state.photoUrls);
        return <Slider heading="inspo" slides={sliderData} />
        // return this.state.photoUrls.map(url => {
        //     return (
        //         <PhotoCard source={url} />
        //     )
        // })
    }

    render() {
        console.log('this.state', this.state);
        return (
            <div id="photo-card-container">
                {this.state.photoUrls.length ? this.renderPhotoCards() : <h4 className="loading-message">Loading...</h4>}
            </div>
        )
    }
}