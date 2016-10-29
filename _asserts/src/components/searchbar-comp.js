import sbStyle from '../../style/searchbar/searchbar.scss';
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	term: ''
        };
    }

    onTermChangeSearchVideo(term) {
    	// es6 syntax -> if keyName === valueName, only need one as object.
		this.setState({term});
		this.props.onSearchTermChange(term);
    }

    render() {
        return (
        	<div className="form-group">
				<label htmlFor="SearchVideos_ID" className="sblabel">Search_Videos</label>
				<input type="text" className="form-control search-fontsize" id="SearchVideos_ID" placeholder="the video..." 
					value={this.state.term} onChange={(event) => {this.onTermChangeSearchVideo(event.target.value)}} />
			</div>
        );
    }
}

export default SearchBar;