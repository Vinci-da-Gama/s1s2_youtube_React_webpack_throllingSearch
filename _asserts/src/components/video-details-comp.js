import vdStyle from '../../style/videoDetail/video-detail.scss';
import React from 'react';

const VideoDetail = ({ choosenVideo }) => {
	if(!choosenVideo) {
		return (
			<div>
				loading...
			</div>
		);
	}
	
	const vId = choosenVideo.id.videoId;
	const videoUrl = `https://www.youtube.com/embed/${vId}`;

    return (
        <div className="panel panel-success nopanel-outline">
			<div className="panel-heading phead-width">
				<h3 className="panel-title green-text text-ellipsis">{choosenVideo.snippet.title}</h3>
			</div>
			<div className="panel-body pbody-outline">
				<iframe className="adjust-video" src={videoUrl}></iframe>
				<p className="text-success">
					{choosenVideo.snippet.title}
				</p>
			</div>
		</div>
    );
};

export default VideoDetail;