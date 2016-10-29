import React from 'react';
import VideoListItem from './videolist-item-comp';

const VideoList = (props) => {
	const videoItems = props.allVideos.map((sigVideo) => {
		return (
			<VideoListItem sigVideo={sigVideo} onVideoSelect={props.setupSelectVideo} key={sigVideo.etag} />
    	);
	});

    return (
		<ul className="list-group list-unstyled">
			{videoItems}
		</ul>
    );
};

export default VideoList;