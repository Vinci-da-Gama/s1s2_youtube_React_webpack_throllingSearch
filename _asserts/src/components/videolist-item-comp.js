import React from 'react';
import vliStyle from '../../style/vlistItem/vli.scss';

// { sigVideo, onVideoSelect } -> es6 syntax, if keyName === valueName, then use one as obj or const.
// so sigVideo and onVideoSelect are const variables now.
const VideoListItem = ({ sigVideo, onVideoSelect }) => {
	const imgUrl = sigVideo.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item" onClick={() => {onVideoSelect(sigVideo)}}>
        	<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<img src={imgUrl} className="img-video" />
					</div>
					<div className="col-sm-12 col-md-6">
						<div className="two-line-ellipsis text-success">
							{sigVideo.snippet.title}
						</div>
					</div>
				</div>
			</div>
        </li>
    );
};

export default VideoListItem;