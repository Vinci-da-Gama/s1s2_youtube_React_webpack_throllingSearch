import 'whatwg-fetch';
require('../style/index.scss');
// import '../style/index.scss';
// import '../style/entryIdx/idxJs.scss';
import entryIdxCss from '../style/entryIdx/idxJs.scss';

import React, { Component } from 'react';
import ReactDOM 	from 'react-dom';
import _ from 'lodash';
import FastClick 	from 'fastclick';
import YtSearch 	from 'youtube-api-search';

import SearchBar 	from './components/searchbar-comp.js';
import VideoDetail  from './components/video-details-comp';
import VideoList 	from './components/video-list-comp';

// import reducers from './reducers';
const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';
const divContainer = document.querySelector('div.container');

class YoutubeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	videos: [],
        	selectedVideo: null
        };
        this.VideoSearch('aircraft carrier');
    }

    VideoSearch(SearchTerm) {
    	// (videos) --> response videos.
    	YtSearch({key: API_KEY, term: SearchTerm}, (responseVideos,) => {
    		this.setState({
    			videos: responseVideos,
    			selectedVideo: responseVideos[0]
    		});
    	});
    }

    render() {
    	const throllingVideoSearch = _.debounce((SearchTerm) => {this.VideoSearch(SearchTerm)}, 300);
        return (
        	<div className="container-fluid">
	        	<SearchBar onSearchTermChange={throllingVideoSearch} />
				<div className="row">
					<div className="col-xs-12 col-sm-8">
						<VideoDetail choosenVideo={this.state.selectedVideo} />
					</div>
					<div className="col-xs-12 col-sm-4">
						<VideoList setupSelectVideo={(selectedVideo) => {this.setState({selectedVideo})}} 
							allVideos={this.state.videos} />
					</div>
				</div>
			</div>
        );
    }
}

ReactDOM.render( < YoutubeApp / >, divContainer );