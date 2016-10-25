import 'whatwg-fetch';
require('../style/index.scss');
// import '../style/index.scss';
// import '../style/entryIdx/idxJs.scss';
import entryIdxCss from '../style/entryIdx/idxJs.scss';

import React from 'react';
const {Component} = React;
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';


import SuccessButton from './components/react-bs-someBtns';
// import reducers from './reducers';
const divContainer = document.querySelector('div.container');

const CommentBox = React.createClass({
    render: function() {
        return (
        	<div className = {entryIdxCss.commentBox} >
            	Hello, world. -- I am a CommentBox.
	            <SuccessButton />
            </div>
        );
    }
});

ReactDOM.render( < CommentBox / >, divContainer );